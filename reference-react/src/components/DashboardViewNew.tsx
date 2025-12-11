import { useEffect, useMemo, useState, useCallback } from 'react';
import { usePollingGet } from '../../../src/hooks/api';
import { storageUtils } from '../../../src/utils/storage';
import { timeAgo } from '../../../src/utils/timeUtils';
import { DashboardHeader } from './DashboardHeader';
import { InfoContainer } from './InfoContainer';
import { BenchmarkComparison } from './BenchmarkComparison';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgBase from "../imports/svg-1zduvpfvng";
import svgExtra from "../imports/svg-9xenn4o0xj";
const svgPaths = { ...svgBase, ...svgExtra };
import svgPathsGenerative from "../imports/svg-v5gyqubm8s";
import Image from 'next/image';
// import imgPattern from "figma:asset/e777a57b939162b876418f1793283d92d18bafa0.png";

interface DashboardViewProps {
  domain: string;
  onOpenModal: (type: string) => void;
  onReset: () => void;
  analysisId: string | null;
}

// Custom Loading Spinner Component
function LoadingSpinner({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="animate-spin">
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="60 40"
        className="text-[#00c2b8] opacity-70"
      />
    </svg>
  );
}

// Inline Animated Loading Dots Component
function LoadingDots({ color = "#a7a7a7" }: { color?: string }) {
  return (
    <span className="inline-flex items-center gap-[2px]">
      <style>{`
        @keyframes dotPulse {
          0%, 80%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
        }
        .dot-1 { animation: dotPulse 1.4s infinite; animation-delay: 0s; }
        .dot-2 { animation: dotPulse 1.4s infinite; animation-delay: 0.2s; }
        .dot-3 { animation: dotPulse 1.4s infinite; animation-delay: 0.4s; }
      `}</style>
      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" className="dot-1">
        <circle cx="2" cy="2" r="2" fill={color} />
      </svg>
      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" className="dot-2">
        <circle cx="2" cy="2" r="2" fill={color} />
      </svg>
      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" className="dot-3">
        <circle cx="2" cy="2" r="2" fill={color} />
      </svg>
    </span>
  );
}

type ScoreSet = { opt?: number; man?: number; gen?: number; avg?: number };
type DetailScoreSet = {
  cwv?: number;
  schema?: number;
  snippet?: number;
  backlink?: number;
  newsMention?: number;
  wikidata?: number;
  aiCite?: number;
  aiOverview?: number;
  authoritySources?: number;
  aiCiteRanking?: number;
};

function useAnalysisData(analysisData: any) {
  const resultData = useMemo(() => (analysisData ? analysisData.data?.json || analysisData : null), [analysisData]);

  const createdAt = useMemo(() => (resultData?.created_at ?? null), [resultData]);

  const localScores = useMemo<ScoreSet>(() => {
    if (!resultData) return {} as ScoreSet;
    const num = (v: any) => (v === null || v === undefined ? undefined : Number(v));
    const firstValid = (...vals: any[]) => {
      for (const v of vals) {
        const n = num(v);
        if (Number.isFinite(n)) return n as number;
      }
      return undefined;
    };
    const overall = firstValid(resultData.overall_score, resultData.avg);
    return {
      opt: (() => { const v = firstValid(resultData.optimize, resultData.opt); return v !== undefined ? Math.round(v) : undefined; })(),
      man: (() => { const v = firstValid(resultData.manifest, resultData.man); return v !== undefined ? Math.round(v) : undefined; })(),
      gen: (() => { const v = firstValid(resultData.generative, resultData.gen); return v !== undefined ? Math.round(v) : undefined; })(),
      avg: overall !== undefined ? Math.round(overall) : undefined,
    };
  }, [resultData]);

  const detailScores = useMemo<DetailScoreSet>(() => {
    if (!resultData) {
      return {} as DetailScoreSet;
    }
    const subProcesses = resultData.sub_processes || [];
    const getSubScore = (type: string, key: string): number | undefined => {
      const process = subProcesses.find((p: any) => p.type === type);
      if (!process?.metadata) return undefined;
      const val = process.metadata[key];
      const n = typeof val === 'object' && val !== null && 'data' in val ? Number((val as any).data) : Number(val);
      return Number.isFinite(n) ? n : undefined;
    };
    const round = (n: number | undefined): number | undefined => (typeof n === 'number' && Number.isFinite(n) ? Math.round(n) : undefined);
    return {
      cwv: round(getSubScore('cwv', 'final_score')),
      schema: round(getSubScore('schema', 'overallScore')),
      snippet: undefined,
      backlink: round(getSubScore('backlink', 'backlink_score')),
      newsMention: round(getSubScore('news_mentioned', 'news_mention_score')),
      wikidata: round(getSubScore('wikidata', 'wikidata_score')),
      aiCite: round(getSubScore('ai_cite_score', 'ai_cite_score')),
      aiOverview: round(getSubScore('ai_overview', 'ai_overview_score')),
      aiCiteRanking: round(getSubScore('ai_cite_ranking', 'ai_cite_score_rank1')),
      authoritySources: undefined,
    };
  }, [resultData]);

  useEffect(() => {
    if (analysisData) storageUtils.set('avo_analysis_result', analysisData);
  }, [analysisData]);

  return { localScores, detailScores, createdAt };
}

function useDashboardAnimation(
  localScores: ScoreSet,
  detailScores: DetailScoreSet,
  isLoading: boolean,
) {
  const [loadingOptimize, setLoadingOptimize] = useState(true);
  const [loadingManifest, setLoadingManifest] = useState(true);
  const [loadingGenerative, setLoadingGenerative] = useState(true);
  const [loadingAuthority, setLoadingAuthority] = useState(true);
  const [loadingInfo, setLoadingInfo] = useState(true);

  const [displayOpt, setDisplayOpt] = useState(0);
  const [displayMan, setDisplayMan] = useState(0);
  const [displayGen, setDisplayGen] = useState(0);
  const [displayAvg, setDisplayAvg] = useState<number | undefined>(undefined);
  const [progressStroke, setProgressStroke] = useState(0);

  const [barOpt, setBarOpt] = useState(0);
  const [barMan, setBarMan] = useState(0);
  const [barGen, setBarGen] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const resetId = setTimeout(() => {
        setLoadingOptimize(true);
        setLoadingManifest(true);
        setLoadingGenerative(true);
        setLoadingAuthority(true);
        setLoadingInfo(true);
        setDisplayOpt(0);
        setDisplayMan(0);
        setDisplayGen(0);
        setDisplayAvg(undefined);
        setProgressStroke(0);
        setBarOpt(0);
        setBarMan(0);
        setBarGen(0);
      }, 0);
      return () => clearTimeout(resetId);
    }

    const animateCount = (target: number | undefined, setter: (n: number) => void, durationMs = 1000) => {
      if (!Number.isFinite(target as number)) return;
      const t = target as number;
      let current = 0;
      const steps = Math.max(1, Math.floor(durationMs / 16));
      const inc = t / steps;
      const id = setInterval(() => {
        current += inc;
        if (current >= t) {
          setter(Math.round(t));
          clearInterval(id);
        } else {
          setter(Math.ceil(current));
        }
      }, 16);
      return id as unknown as number;
    };

    const animateBar = (target: number | undefined, setter: (n: number) => void, durationMs = 1000) => {
      if (!Number.isFinite(target as number)) return;
      const t = target as number;
      let current = 0;
      const steps = Math.max(1, Math.floor(durationMs / 16));
      const inc = t / steps;
      const id = setInterval(() => {
        current += inc;
        if (current >= t) {
          setter(t);
          clearInterval(id);
        } else {
          setter(current);
        }
      }, 16);
      return id as unknown as number;
    };

    const timers: number[] = [];
    const timeouts: number[] = [];

    timeouts.push(setTimeout(() => {
      setLoadingOptimize(false);
      timers.push(animateCount(localScores.opt, setDisplayOpt, 800) as number);
      timers.push(animateBar(localScores.opt, setBarOpt, 800) as number);
    }, 500) as unknown as number);

    timeouts.push(setTimeout(() => {
      setLoadingManifest(false);
      timers.push(animateCount(localScores.man, setDisplayMan, 800) as number);
      timers.push(animateBar(localScores.man, setBarMan, 800) as number);
    }, 1500) as unknown as number);

    timeouts.push(setTimeout(() => {
      setLoadingGenerative(false);
      timers.push(animateCount(localScores.gen, setDisplayGen, 800) as number);
      timers.push(animateBar(localScores.gen, setBarGen, 800) as number);
    }, 2500) as unknown as number);

    timeouts.push(setTimeout(() => {
      setLoadingAuthority(false);
      if (Number.isFinite(localScores.avg as number)) {
        const avg = localScores.avg as number;
        let current = 0;
        const steps = Math.max(1, Math.floor(1000 / 10));
        const inc = avg / steps;
        const id = setInterval(() => {
          current += inc;
          if (current >= avg) {
            setDisplayAvg(Math.round(avg));
            setProgressStroke(avg);
            clearInterval(id);
          } else {
            const val = Math.ceil(current);
            setDisplayAvg(val);
            setProgressStroke(val);
          }
        }, 10);
        timers.push(id as unknown as number);
      }
    }, 3500) as unknown as number);

    timeouts.push(setTimeout(() => {
      setLoadingInfo(false);
    }, 4500) as unknown as number);

    return () => {
      timeouts.forEach((to) => clearTimeout(to as any));
      timers.forEach((tm) => tm && clearInterval(tm as any));
    };
  }, [isLoading, localScores.opt, localScores.man, localScores.gen, localScores.avg]);

  const loading = useMemo(
    () => ({ optimize: loadingOptimize, manifest: loadingManifest, generative: loadingGenerative, authority: loadingAuthority, info: loadingInfo }),
    [loadingOptimize, loadingManifest, loadingGenerative, loadingAuthority, loadingInfo]
  );

  const display = useMemo(
    () => ({ opt: displayOpt, man: displayMan, gen: displayGen, details: detailScores }),
    [displayOpt, displayMan, displayGen, detailScores]
  );

  const barWidths = useMemo(
    () => ({ opt: barOpt, man: barMan, gen: barGen }),
    [barOpt, barMan, barGen]
  );

  const displayScore = displayAvg;

  return { loading, displayScore, progressStroke, barWidths, display };
}

function AuthorityScoreCircle({
  loading,
  displayScore,
  progressStroke,
  createdAt,
}: {
  loading: boolean;
  displayScore?: number;
  progressStroke: number;
  createdAt: string | null;
}) {
  return (
    <div className="relative shrink-0 size-[256px]" data-name="Container">
      <div className="absolute border-[0.8px] border-[rgba(207,255,4,0.2)] border-solid left-0 rounded-[2.68435e+07px] size-[256px] top-0" data-name="Container" />
      <div className={`absolute left-0 size-[256px] top-0`}>
        <svg className="size-full" viewBox="0 0 256 256" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="128"
            cy="128"
            r="125"
            fill="none"
            stroke={
              progressStroke < 50 ? '#EF4444' :
              progressStroke <= 75 ? '#F8B400' :
              '#22c55e'
            }
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="785.4"
            strokeDashoffset={785.4 - (progressStroke / 100) * 785.4}
            opacity="1"
          />
        </svg>
      </div>
      <div className="absolute border-[0.8px] border-[rgba(0,194,184,0.1)] border-solid left-[-16px] opacity-[0.74] rounded-[2.68435e+07px] size-[288px] top-[-16px] animate-pulse-slow" data-name="Container" />
      <div className="absolute bg-[rgba(22,36,62,0.6)] border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid left-[16px] rounded-[2.68435e+07px] shadow-[0px_10px_25px_0px_rgba(4,11,23,0.4),0px_4px_60px_0px_rgba(240,241,244,0.15)] size-[224px] top-[16px]" data-name="Container">
        <div className="absolute h-[15.988px] left-[40.39px] top-[34.41px] w-[141.613px]" data-name="Text">
          <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[16px] left-[calc(50%-64.34px)] text-[#F8B400] text-[12px] text-nowrap top-[-0.8px] tracking-[1.2px] whitespace-pre">AUTHORITY SCORE</p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[55.46px] top-[56.4px] w-[111.463px]">
          <div className="h-[96px] relative shrink-0 w-full flex items-center justify-center" data-name="Heading 1">
            {loading ? (
              <LoadingSpinner size={48} />
            ) : (
              typeof displayScore === 'number' && Number.isFinite(displayScore) ? (
                <p className="[text-shadow:rgba(50,255,4,0.15)_0px_4px_60px,rgba(4,11,23,0.3)_0px_10px_25px] font-['Satoshi:Bold',sans-serif] not-italic text-[#defcd7] text-[48px] sm:text-[64px] md:text-[96px] leading-[60px] md:leading-[96px] text-nowrap tracking-[-2px] md:tracking-[-4.8px] whitespace-pre">{Math.round(displayScore)}</p>
              ) : (
                <LoadingSpinner size={48} />
              )
            )}
          </div>
          <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[2.68435e+07px] shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border border-[rgba(0,194,184,0.4)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
            <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap whitespace-pre">{createdAt ? timeAgo(createdAt) : <LoadingDots color="#00c2b8" />}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreCardContent({
  loading,
  score,
  barColor,
  barWidth,
  scoreLabel,
  details,
}: {
  loading: boolean;
  score?: number;
  barColor: string;
  barWidth?: number;
  scoreLabel: string;
  details: Array<{ label: string; value?: number }>;
}) {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
              <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
                {loading ? (
                  <LoadingSpinner size={32} />
                ) : (
                  typeof score === 'number' && Number.isFinite(score) ? (
                    <>
                      <p className="relative shrink-0 text-[28px] md:text-[36px] text-white">{Math.round(score)}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[18px] md:text-[24px]">/100</p>
                    </>
                  ) : (
                    <LoadingDots color="#ffffff" />
                  )
                )}
              </div>
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">{scoreLabel}</p>
            </div>
            <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full" style={{ paddingRight: `${100 - (barWidth ?? 0)}%` }}>
                  <div className="h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" style={{ backgroundColor: barColor }} data-name="Container" />
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                  <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              {details.map((d, idx) => (
                <div key={idx} className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                  <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">{d.label}</p>
                  <p className="relative shrink-0 text-[16px] text-white">{loading ? <LoadingDots color="#ffffff" /> : (typeof d.value === 'number' && Number.isFinite(d.value) ? Math.round(d.value) : '-' )}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardView({ domain, onOpenModal, onReset, analysisId }: DashboardViewProps) {
  const shouldStopPolling = useCallback((data: any) => (data as any)?.data?.json?.status === 'finished', []);
  const { data: analysisData, isLoading } = usePollingGet<any>(
    analysisId ? `/findone-main-process?id=${analysisId}` : null,
    {
      interval: 2000,
      shouldStopPolling,
      initialLoading: true,
    }
  );
  const { localScores, detailScores, createdAt } = useAnalysisData(analysisData);
  const { loading, displayScore, progressStroke, barWidths, display } = useDashboardAnimation(
    localScores,
    detailScores,
    isLoading,
  );
  const [animated, setAnimated] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const isMd = viewportWidth >= 768;
  const isTablet = viewportWidth >= 640 && viewportWidth < 768;


  return (
    <div className="bg-[#0c192c] relative size-full flex flex-col overflow-x-hidden" data-name="AVQ">
      {/* Pattern Background */}
      <div className="absolute h-[777px] left-0 opacity-10 top-0 w-full pointer-events-none" data-name="Pattern">
        <div aria-hidden="true" className="absolute inset-0">
          <ImageWithFallback alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src="./assets/e777a57b939162b876418f1793283d92d18bafa0.png" />
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 777\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.8999999761581421\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4087e-15 38.85 -72 2.3789e-15 720 388.5)\\'><stop stop-color=\\'rgba(13,31,49,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(13,31,49,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
        </div>
      </div>
      
      {/* Shade Effects */}
      <div className="absolute bg-[rgba(0,194,184,0.05)] blur-[100px] filter h-[320px] left-[20px] rounded-[2.68435e+07px] top-[597px] w-[1399.2px] pointer-events-none" data-name="Shade" />
      <div className="absolute bg-[rgba(0,194,184,0.05)] blur-[100px] filter h-[320px] left-[20px] rounded-[2.68435e+07px] top-[85.2px] w-[1399.2px] pointer-events-none" data-name="Shade" />
      
      {/* Header */}
      <DashboardHeader onReset={onReset} />

      {/* Main Content */}
    <div className={`relative mt-15 xl:mt-0 flex-1 min-h-screen md:min-h-[1100px] fade-enter ${animated ? 'fade-enter-active' : ''}`} style={{ transitionDelay: '100ms' }}>
        {/* Authority Score Circle - desktop absolute, mobile centered */}
        <div
          className={isMd ? "absolute top-[60px] left-1/2" : "flex justify-center px-4"}
          style={isMd ? { transform: 'translateX(calc(-50% - 200px))' } : undefined}
        >
          <AuthorityScoreCircle 
            loading={loading.authority}
            displayScore={displayScore}
            progressStroke={progressStroke}
            createdAt={createdAt}
          />
        </div>

        {/* Info Container - desktop absolute, mobile centered */}
        <div 
          className={isMd ? "absolute top-[60px]" : "flex justify-center px-4 mt-6"}
          style={isMd ? { left: 'calc(50% - 8px)', opacity: 1, transform: 'translateX(0)' } : undefined}
        >
          <div className="mt-12"></div>
          <InfoContainer domain={domain} loading={loading.info} score={localScores.avg ?? 0} />
        </div>

        {/* Three Cards - responsive grid */}
        <div className={
          isMd
            ? "absolute content-stretch flex items-start justify-between left-1/2 top-[380px] translate-x-[-50%] w-[871px]"
            : `w-full px-4 grid gap-4 ${isTablet ? 'grid-cols-2' : 'grid-cols-1'} mt-6`
        } data-name="Card">
          {/* OPTIMIZE Card */}
          <div 
            onClick={() => onOpenModal('omg_optimize')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full md:w-[277px] min-h-[48px] transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(0,194,184,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(0,194,184,0.2)]"
          >
            <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                  <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g clipPath="url(#clip0_4029_136)" id="Icon">
                          <path d={svgPaths.p19aa0680} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p2b561900} id="Vector_2" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p35abdf80} id="Vector_3" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p3fe85180} id="Vector_4" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M1.33333 10.6667H1.34" id="Vector_5" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p32d5a6be} id="Vector_6" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p5096bc0} id="Vector_7" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p2a7a680} id="Vector_8" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p12c93300} id="Vector_9" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                        <defs>
                          <clipPath id="clip0_4029_136">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
                  </div>
                  <div className="relative shrink-0 size-[18px]">
                    <Image src="icons/exclamation.svg" alt="Exclamation Icon" width={18} height={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <ScoreCardContent
              loading={loading.optimize}
              score={display.opt}
              barColor="#00c2b8"
              barWidth={barWidths.opt}
              scoreLabel="Clarity System"
              details={[
                { label: 'CWV Score', value: display.details.cwv },
                { label: 'Schema Score', value: display.details.schema },
              ]}
            />
          </div>

          {/* MANIFEST Card */}
          <div 
            onClick={() => onOpenModal('omg_manifest')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full md:w-[277px] min-h-[48px] transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(207,255,4,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(207,255,4,0.2)]"
          >
            <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                  <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Icon">
                          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, #CFFF04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c6f558] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
                  </div>
                 <div className="relative shrink-0 size-[18px]">
                    <Image src="icons/exclamation.svg" alt="Exclamation Icon" width={18} height={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <ScoreCardContent
              loading={loading.manifest}
              score={display.man}
              barColor="#cfff04"
              barWidth={barWidths.man}
              scoreLabel="Answer Source"
              details={[
                { label: 'Backlink Score', value: display.details.backlink },
                { label: 'News Mention Score', value: display.details.newsMention },
                { label: 'Wikidata Score', value: display.details.wikidata },
              ]}
            />
          </div>

          {/* GENERATIVE Card */}
          <div 
            onClick={() => onOpenModal('omg_generative')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full md:w-[277px] min-h-[48px] transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(248,180,0,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(248,180,0,0.2)]"
          >
            <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                  <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g clipPath="url(#clip0_4029_118)" id="Icon">
                          <path d={svgPathsGenerative.p1e0b8cc0} id="Vector" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPathsGenerative.p17134c00} id="Vector_2" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                        <defs>
                          <clipPath id="clip0_4029_118">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f8b400] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
                  </div>
                  <div className="relative shrink-0 size-[18px]">
                    <Image src="icons/exclamation.svg" alt="Exclamation Icon" width={18} height={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <ScoreCardContent
              loading={loading.generative}
              score={display.gen}
              barColor="#f8b400"
              barWidth={barWidths.gen}
              scoreLabel="Influence Origin"
              details={[
                { label: 'AI Cite Score', value: display.details.aiCite },
                { label: 'AI Overview Appearance', value: display.details.aiOverview },
                { label: 'AI Cite Ranking Score', value: display.details.aiCiteRanking },
              ]}
            />
          </div>
        </div>

        {/* Benchmark Comparison - responsive container with horizontal scroll on small screens */}
        <div className={isMd ? "absolute content-stretch flex items-start justify-center left-1/2 top-[700px] translate-x-[-50%] w-[871px]" : "w-full px-4 overflow-x-auto mt-6"}>
          {isMd ? (
            <BenchmarkComparison 
              userDomain={domain}
              userScore={localScores.avg ?? 0}
              userScores={{
                opt: localScores.opt ?? 0,
                man: localScores.man ?? 0,
                gen: localScores.gen ?? 0,
                avg: localScores.avg ?? 0,
              }}
            />
          ) : (
            <div className="min-w-[871px]">
              <BenchmarkComparison 
                userDomain={domain}
                userScore={localScores.avg ?? 0}
                userScores={{
                  opt: localScores.opt ?? 0,
                  man: localScores.man ?? 0,
                  gen: localScores.gen ?? 0,
                  avg: localScores.avg ?? 0,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
