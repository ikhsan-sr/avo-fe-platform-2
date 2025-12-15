import { useEffect, useMemo, useState, useCallback } from 'react';
import { usePollingGet } from '../../../src/hooks/api';
import { storageUtils } from '../../../src/utils/storage';
import { timeAgo } from '../../../src/utils/timeUtils';
import { DashboardHeader } from './DashboardHeader';
import { InfoContainer } from './InfoContainer';
import { BenchmarkComparison } from './BenchmarkComparison';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPathsGenerative from "../imports/svg-v5gyqubm8s";
import Image from 'next/image';

const FRAME_MS = 16;
const COUNT_DURATION_MS = 800;
const BAR_DURATION_MS = 800;
const AVG_ANIM_MS = 1000;
const AVG_FRAME_MS = 10;
const STAGGER = {
  opt: 500,
  man: 1500,
  gen: 2500,
  avg: 3500,
  info: 4500,
} as const;

type SubProcess = {
  id: string;
  type: string;
  status: string;
  metadata: Record<string, any>;
  header_id?: string;
  created_at?: string;
  updated_at?: string;
  error_metadata?: any;
};

type AnalysisJSON = {
  id: string;
  status: string;
  url?: string;
  created_at: string;
  updated_at?: string;
  overall_score?: number;
  avg?: number;
  optimize?: number;
  opt?: number;
  manifest?: number;
  man?: number;
  generative?: number;
  gen?: number;
  sub_processes: SubProcess[];
};

type AnalysisResponse = {
  data: { json: AnalysisJSON & Record<string, any> } & Record<string, any>;
} & Record<string, any>;

// const DUMMY_ANALYSIS_DATA: AnalysisResponse = {
//     "status": "ok",
//     "message": "Data successfully fetched",
//     "data": {
//         "json": {
//             "id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//             "payload": {
//                 "data": {
//                     "url": "translate.google.co.id",
//                     "type": "all",
//                     "questions": [
//                         "What are the best online translation tools for business documents?",
//                         "How can I translate a website into another language accurately?",
//                         "Where can I find a reliable translator for legal or medical documents?"
//                     ]
//                 }
//             },
//             "status": "executing",
//             "created_at": "2025-12-15T04:27:20.155Z",
//             "updated_at": "2025-12-15T04:28:00.523Z",
//             "executor": null,
//             "url": "translate.google.co.id",
//             "optimize": 47.5,
//             "manifest": 34, 
//             "generative": null,
//             "questions": [
//                 "What are the best online translation tools for business documents?",
//                 "How can I translate a website into another language accurately?",
//                 "Where can I find a reliable translator for legal or medical documents?"
//             ],
//             "overall_score": null,
//             "sub_processes": [
//                 {
//                     "id": "40cd6855-346e-453d-acd5-b4437e78c64b",
//                     "type": "ai_overview",
//                     "status": "executing",
//                     "metadata": null,
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:21.42405+00:00",
//                     "updated_at": "2025-12-15T04:27:21.42405+00:00",
//                     "error_metadata": null
//                 },
//                 {
//                     "id": "fc860c24-cdf5-4f4f-9200-84e4ec04b939",
//                     "type": "news_mentioned",
//                     "status": "finished",
//                     "metadata": {
//                         "total_mentions": 0,
//                         "news_mention_score": 0
//                     },
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:20.804727+00:00",
//                     "updated_at": "2025-12-15T04:27:22.92773+00:00",
//                     "error_metadata": null
//                 },
//                 {
//                     "id": "6614bc95-cd1a-4803-bb65-3752dbc4c7b1",
//                     "type": "wikidata",
//                     "status": "finished",
//                     "metadata": {
//                         "wikidata_score": {
//                             "data": 100
//                         }
//                     },
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:21.201375+00:00",
//                     "updated_at": "2025-12-15T04:27:24.155792+00:00",
//                     "error_metadata": null
//                 },
//                 {
//                     "id": "9aa8a27c-62a1-469e-ae74-081e62b3e62c",
//                     "type": "backlink",
//                     "status": "finished",
//                     "metadata": {
//                         "backlink_score": 2,
//                         "total_backlinks": 420,
//                         "authoritative_backlinks": 7
//                     },
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:21.091455+00:00",
//                     "updated_at": "2025-12-15T04:27:24.525005+00:00",
//                     "error_metadata": null
//                 },
//                 {
//                     "id": "4993d81c-493b-4026-8fd3-e29f105750d9",
//                     "type": "schema",
//                     "status": "finished",
//                     "metadata": {
//                         "overallScore": 0
//                     },
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:20.976494+00:00",
//                     "updated_at": "2025-12-15T04:27:37.172604+00:00",
//                     "error_metadata": null
//                 },
//                 {
//                     "id": "917cc09b-a0be-42f4-aa55-41c0f728e8a6",
//                     "type": "ai_cite_score",
//                     "status": "finished",
//                     "metadata": {
//                         "total_hits": 1,
//                         "per_iterasi": {
//                             "1": {
//                                 "rank": 1,
//                                 "hasMatch": true
//                             }
//                         },
//                         "ai_cite_score": 100,
//                         "total_appearances": 1
//                     },
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:21.302886+00:00",
//                     "updated_at": "2025-12-15T04:27:39.958099+00:00",
//                     "error_metadata": null
//                 },
//                 {
//                     "id": "d3a7faa1-8a9d-4e7d-80d2-63a63cdd4ff7",
//                     "type": "cwv",
//                     "status": "finished",
//                     "metadata": {
//                         "url": "https://translate.google.co.id/",
//                         "seo_score": 100,
//                         "final_score": 95,
//                         "performance_score": 78,
//                         "accessibility_score": 100,
//                         "best_practices_score": 100
//                     },
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:20.520008+00:00",
//                     "updated_at": "2025-12-15T04:27:42.08821+00:00",
//                     "error_metadata": null
//                 },
//                 {
//                     "id": "ad7fa7e5-db39-4511-9823-62aa2f461631",
//                     "type": "ai_cite_ranking",
//                     "status": "finished",
//                     "metadata": {
//                         "per_iterasi": {
//                             "1": {
//                                 "rank": 1,
//                                 "hasMatch": true
//                             }
//                         },
//                         "total_mentions": 1,
//                         "ai_cite_score_rank1": 100,
//                         "total_rank1_mentions": 1
//                     },
//                     "header_id": "0d5f9c33-f524-4f01-949c-5a0782e14c73",
//                     "created_at": "2025-12-15T04:27:21.07231+00:00",
//                     "updated_at": "2025-12-15T04:28:00.23387+00:00",
//                     "error_metadata": null
//                 }
//             ]
//         },
//         "pairedItem": {
//             "item": 0
//         }
//     }
// };

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

type DetailStatusSet = {
  cwv?: boolean;
  schema?: boolean;
  backlink?: boolean;
  newsMention?: boolean;
  wikidata?: boolean;
  aiCite?: boolean;
  aiOverview?: boolean;
  aiCiteRanking?: boolean;
};

// Menormalkan data API analisis menjadi skor dan status yang siap ditampilkan
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

  const detailStatuses = useMemo<DetailStatusSet>(() => {
    if (!resultData) {
      return {} as DetailStatusSet;
    }
    const subProcesses = resultData.sub_processes || [];
    const status = (type: string): boolean | undefined => {
      const p = subProcesses.find((sp: any) => sp?.type === type);
      if (!p || typeof p.status !== 'string') return undefined;
      return p.status !== 'finished';
    };
    return {
      cwv: status('cwv'),
      schema: status('schema'),
      backlink: status('backlink'),
      newsMention: status('news_mentioned'),
      wikidata: status('wikidata'),
      aiCite: status('ai_cite_score'),
      aiOverview: status('ai_overview'),
      aiCiteRanking: status('ai_cite_ranking'),
    };
  }, [resultData]);

  useEffect(() => {
    if (analysisData) storageUtils.set('avo_analysis_result', analysisData);
  }, [analysisData]);

  return { localScores, detailScores, detailStatuses, createdAt };
}

// Mengatur animasi bertahap untuk skor dan progress bar agar UI tetap responsif
function useDashboardAnimation(
  localScores: ScoreSet,
  detailScores: DetailScoreSet,
  detailStatuses: DetailStatusSet,
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

    const animateCount = (target: number | undefined, setter: (n: number) => void, durationMs = COUNT_DURATION_MS) => {
      if (!Number.isFinite(target as number)) return;
      const t = target as number;
      let current = 0;
      const steps = Math.max(1, Math.floor(durationMs / FRAME_MS));
      const inc = t / steps;
      const id = setInterval(() => {
        current += inc;
        if (current >= t) {
          setter(Math.round(t));
          clearInterval(id);
        } else {
          setter(Math.ceil(current));
        }
      }, FRAME_MS);
      return id as unknown as number;
    };

    const animateBar = (target: number | undefined, setter: (n: number) => void, durationMs = BAR_DURATION_MS) => {
      if (!Number.isFinite(target as number)) return;
      const t = target as number;
      let current = 0;
      const steps = Math.max(1, Math.floor(durationMs / FRAME_MS));
      const inc = t / steps;
      const id = setInterval(() => {
        current += inc;
        if (current >= t) {
          setter(t);
          clearInterval(id);
        } else {
          setter(current);
        }
      }, FRAME_MS);
      return id as unknown as number;
    };

    const timers: number[] = [];
    const timeouts: number[] = [];

    timeouts.push(setTimeout(() => {
      const optTarget = localScores.opt;
      if (!Number.isFinite(optTarget as number)) {
        setLoadingOptimize(true);
        setDisplayOpt(0);
        setBarOpt(0);
      } else {
        setLoadingOptimize(false);
        timers.push(animateCount(optTarget, setDisplayOpt, COUNT_DURATION_MS) as number);
        timers.push(animateBar(optTarget, setBarOpt, BAR_DURATION_MS) as number);
      }
    }, STAGGER.opt) as unknown as number);

    timeouts.push(setTimeout(() => {
      const manTarget = localScores.man;
      if (!Number.isFinite(manTarget as number)) {
        setLoadingManifest(true);
        setDisplayMan(0);
        setBarMan(0);
      } else {
        setLoadingManifest(false);
        timers.push(animateCount(manTarget, setDisplayMan, COUNT_DURATION_MS) as number);
        timers.push(animateBar(manTarget, setBarMan, BAR_DURATION_MS) as number);
      }
    }, STAGGER.man) as unknown as number);

    timeouts.push(setTimeout(() => {
      const genTarget = localScores.gen;
      if (!Number.isFinite(genTarget as number)) {
        setLoadingGenerative(true);
        setDisplayGen(0);
        setBarGen(0);
      } else {
        setLoadingGenerative(false);
        timers.push(animateCount(genTarget, setDisplayGen, COUNT_DURATION_MS) as number);
        timers.push(animateBar(genTarget, setBarGen, BAR_DURATION_MS) as number);
      }
    }, STAGGER.gen) as unknown as number);

    timeouts.push(setTimeout(() => {
      setLoadingAuthority(false);
      if (Number.isFinite(localScores.avg as number)) {
        const avg = localScores.avg as number;
        let current = 0;
        const steps = Math.max(1, Math.floor(AVG_ANIM_MS / AVG_FRAME_MS));
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
        }, AVG_FRAME_MS);
        timers.push(id as unknown as number);
      }
    }, STAGGER.avg) as unknown as number);

    timeouts.push(setTimeout(() => {
      setLoadingInfo(false);
    }, STAGGER.info) as unknown as number);

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
    () => ({ opt: displayOpt, man: displayMan, gen: displayGen, details: detailScores, detailsStatus: detailStatuses }),
    [displayOpt, displayMan, displayGen, detailScores, detailStatuses]
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
          <p 
            className="absolute leading-[16px] left-[calc(50%-64.34px)] text-[#F8B400] text-[12px] text-nowrap top-[-0.8px] tracking-[1.2px] whitespace-pre"
          >
            AUTHORITY SCORE
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[55.46px] top-[56.4px] w-[111.463px]">
          <div className="h-[96px] relative shrink-0 w-full flex items-center justify-center" data-name="Heading 1">
            {loading ? (
              <LoadingSpinner size={48} />
            ) : (
              typeof displayScore === 'number' && Number.isFinite(displayScore) ? (
                <p className="[text-shadow:rgba(50,255,4,0.15)_0px_4px_60px,rgba(4,11,23,0.3)_0px_10px_25px] font-satoshi font-bold not-italic text-[#defcd7] text-[48px] sm:text-[64px] md:text-[96px] leading-[60px] md:leading-[96px] text-nowrap tracking-[-2px] md:tracking-[-4.8px] whitespace-pre">{Math.round(displayScore)}</p>
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
  details: Array<{ label: string; value?: number; loading?: boolean }>;
}) {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] flex-1 w-full" data-name="Card - Testimoni">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
              <div className="content-stretch flex font-satoshi font-bold items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
                {loading || !(typeof score === 'number' && Number.isFinite(score)) ? (
                  <LoadingSpinner size={32} />
                ) : (
                  <>
                      <p className="relative shrink-0 text-[28px] md:text-[36px] text-white mb-[-3px] mr-[2px]">{Math.round(score)}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[18px] md:text-[24px]">/100</p>
                    </>
                )}
              </div>
              <p className=" font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">{scoreLabel}</p>
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
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full min-h-[78px]">
              {details.map((d, idx) => (
                <div key={idx} className="content-stretch flex  font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                  <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">{d.label}</p>
                  <p className="relative shrink-0 text-[16px] text-white">
                    {d.loading ? <LoadingDots color="#ffffff" /> : (typeof d.value === 'number' && Number.isFinite(d.value) ? Math.round(d.value) : '-' )}
                  </p>
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
 
      

  const { localScores, detailScores, detailStatuses, createdAt } = useAnalysisData(analysisData);
  const { loading, displayScore, progressStroke, barWidths, display } = useDashboardAnimation(
    localScores,
    detailScores,
    detailStatuses,
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
    <div className="bg-[#0c192c] min-h-screen relative size-full flex flex-col pb-14" data-name="AVQ">
      {/* Pattern Background */}
      {/* <div className="absolute h-[777px] left-0 opacity-10 top-0 w-full pointer-events-none" data-name="Pattern"> */}
      {/* <div className="fixed inset-0 opacity-10 pointer-events-none -z-10" data-name="Pattern"> */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0" data-name="Pattern">
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
            ? "absolute content-stretch flex items-stretch justify-between left-1/2 top-[380px] translate-x-[-50%] w-[871px]"
            : `w-full px-4 grid auto-rows-fr gap-4 ${isTablet ? 'grid-cols-2' : 'grid-cols-1'} mt-6`
        } data-name="Card">
          {/* OPTIMIZE Card */}
          <div 
            onClick={() => onOpenModal('omg_optimize')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full md:w-[277px] min-h-[48px] h-full transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(0,194,184,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(0,194,184,0.2)]"
          >
            <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                  <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <Image src="icons/fingerprint.svg" alt="Optimize Icon" width={16} height={16} />
                    </div>
                    <p className="font-manrope font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
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
                { label: 'CWV Score', value: display.details.cwv, loading: !!display.detailsStatus?.cwv },
                { label: 'Schema Score', value: display.details.schema, loading: !!display.detailsStatus?.schema },
              ]}
            />
          </div>

          {/* MANIFEST Card */}
          <div 
            onClick={() => onOpenModal('omg_manifest')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full md:w-[277px] min-h-[48px] h-full transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(207,255,4,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(207,255,4,0.2)]"
          >
            <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                  <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <Image src="icons/chat.svg" alt="Manifest Icon" width={16} height={16} />
                    </div>
                    <p className="font-manrope font-semibold leading-[normal] relative shrink-0 text-[#c6f558] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
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
                { label: 'Backlink Score', value: display.details.backlink, loading: !!display.detailsStatus?.backlink },
                { label: 'News Mention Score', value: display.details.newsMention, loading: !!display.detailsStatus?.newsMention },
                { label: 'Wikidata Score', value: display.details.wikidata, loading: !!display.detailsStatus?.wikidata },
              ]}
            />
          </div>

          {/* GENERATIVE Card */}
          <div 
            onClick={() => onOpenModal('omg_generative')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full md:w-[277px] min-h-[48px] h-full transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(248,180,0,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(248,180,0,0.2)]"
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
                    <p className="font-manrope font-semibold leading-[normal] relative shrink-0 text-[#f8b400] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
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
                { label: 'AI Cite Score', value: display.details.aiCite, loading: !!display.detailsStatus?.aiCite },
                { label: 'AI Overview Appearance', value: display.details.aiOverview, loading: !!display.detailsStatus?.aiOverview },
                { label: 'AI Cite Ranking Score', value: display.details.aiCiteRanking, loading: !!display.detailsStatus?.aiCiteRanking },
              ]}
            />
          </div>
        </div>

        {/* Benchmark Comparison - responsive container with horizontal scroll on small screens */}
        <div className={isMd ? "relative content-stretch flex items-start justify-center mx-auto mt-[700px] w-[871px]" : "w-full px-4 overflow-x-auto mt-6"}>
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
