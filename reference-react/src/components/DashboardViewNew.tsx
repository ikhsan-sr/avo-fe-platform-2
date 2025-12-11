import { useEffect, useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { InfoContainer } from './InfoContainer';
import { BenchmarkComparison } from './BenchmarkComparison';
import svgPaths from "../imports/svg-1zduvpfvng";
import svgPathsInfo from "../imports/svg-7avljcbs5w";
import svgPathsGenerative from "../imports/svg-v5gyqubm8s";
// import imgPattern from "figma:asset/e777a57b939162b876418f1793283d92d18bafa0.png";

interface DashboardViewProps {
  domain: string;
  scores: { opt: number; man: number; gen: number; avg: number };
  onOpenModal: (type: string) => void;
  onReset: () => void;
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

export function DashboardView({ domain, scores, onOpenModal, onReset }: DashboardViewProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [animated, setAnimated] = useState(false);
  
  // Progress bar animation widths
  const [barWidths, setBarWidths] = useState({ opt: 0, man: 0, gen: 0 });
  
  // Loading states for sequential animation
  const [loadingOptimize, setLoadingOptimize] = useState(true);
  const [loadingManifest, setLoadingManifest] = useState(true);
  const [loadingGenerative, setLoadingGenerative] = useState(true);
  const [loadingAuthority, setLoadingAuthority] = useState(true);
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [progressStroke, setProgressStroke] = useState(0);
  
  // Display scores for each card (for counter animation)
  const [displayOptScore, setDisplayOptScore] = useState(0);
  const [displayManScore, setDisplayManScore] = useState(0);
  const [displayGenScore, setDisplayGenScore] = useState(0);
  
  // Detail scores for OPTIMIZE card
  const [displayCWVScore, setDisplayCWVScore] = useState(0);
  const [displaySchemaScore, setDisplaySchemaScore] = useState(0);
  
  // Detail scores for MANIFEST card
  const [displaySnippet, setDisplaySnippet] = useState(0);
  const [displayBacklinkScore, setDisplayBacklinkScore] = useState(0);
  const [displayNewsMentionScore, setDisplayNewsMentionScore] = useState(0);
  const [displayWikidataScore, setDisplayWikidataScore] = useState(0);
  
  // Detail scores for GENERATIVE card
  const [displayAICiteScore, setDisplayAICiteScore] = useState(0);
  const [displayAIOverviewScore, setDisplayAIOverviewScore] = useState(0);
  const [displayAuthoritySourcesScore, setDisplayAuthoritySourcesScore] = useState(0);

  // Sequential loading animation
  useEffect(() => {
    // Step 1: Load Optimize card after 500ms
    const optimizeTimer = setTimeout(() => {
      setLoadingOptimize(false);
      animateScore(scores.opt, setDisplayOptScore);
      // Animate detail scores
      animateScore(67, setDisplayCWVScore);
      animateScore(67, setDisplaySchemaScore);
      // Animate progress bar
      animateProgressBar(scores.opt, (val) => setBarWidths(prev => ({ ...prev, opt: val })));
    }, 500);

    // Step 2: Load Manifest card after 1500ms
    const manifestTimer = setTimeout(() => {
      setLoadingManifest(false);
      animateScore(scores.man, setDisplayManScore);
      // Animate detail scores
      animateScore(142, setDisplaySnippet);
      animateScore(67, setDisplayBacklinkScore);
      animateScore(67, setDisplayNewsMentionScore);
      animateScore(67, setDisplayWikidataScore);
      // Animate progress bar
      animateProgressBar(scores.man, (val) => setBarWidths(prev => ({ ...prev, man: val })));
    }, 1500);

    // Step 3: Load Generative card after 2500ms
    const generativeTimer = setTimeout(() => {
      setLoadingGenerative(false);
      animateScore(scores.gen, setDisplayGenScore);
      // Animate detail scores
      animateScore(67, setDisplayAICiteScore);
      animateScore(67, setDisplayAIOverviewScore);
      animateScore(67, setDisplayAuthoritySourcesScore);
      // Animate progress bar
      animateProgressBar(scores.gen, (val) => setBarWidths(prev => ({ ...prev, gen: val })));
    }, 2500);

    // Step 4: Load Authority Score after 3500ms
    const authorityTimer = setTimeout(() => {
      setLoadingAuthority(false);
    }, 3500);

    // Step 5: Load Info Container after 4500ms (after authority score finishes animating)
    const infoTimer = setTimeout(() => {
      setLoadingInfo(false);
    }, 4500);

    return () => {
      clearTimeout(optimizeTimer);
      clearTimeout(manifestTimer);
      clearTimeout(generativeTimer);
      clearTimeout(authorityTimer);
      clearTimeout(infoTimer);
    };
  }, [scores]);

  // Helper function to animate score counting
  const animateScore = (targetScore: number, setFunction: (score: number) => void) => {
    let current = 0;
    const increment = targetScore / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setFunction(targetScore);
        clearInterval(timer);
      } else {
        setFunction(Math.ceil(current));
      }
    }, 20);
  };

  // Helper function to animate progress bars
  const animateProgressBar = (targetWidth: number, setFunction: (width: number) => void) => {
    let current = 0;
    const increment = targetWidth / 60; // 60 steps for smooth animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetWidth) {
        setFunction(targetWidth);
        clearInterval(timer);
      } else {
        setFunction(current);
      }
    }, 16); // ~60fps
  };

  // Animate the authority score counter (only when not loading)
  useEffect(() => {
    if (loadingAuthority) return;
    
    let current = 0;
    const increment = scores.avg / 100;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= scores.avg) {
        setDisplayScore(scores.avg);
        setProgressStroke(scores.avg);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.ceil(current));
        setProgressStroke(Math.ceil(current));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [scores.avg, loadingAuthority]);

  // Fade in animation
  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  return (
    <div className="bg-[#0c192c] relative size-full flex flex-col" data-name="AVQ">
      {/* Pattern Background */}
      <div className="absolute h-[777px] left-0 opacity-10 top-0 w-full pointer-events-none" data-name="Pattern">
        <div aria-hidden="true" className="absolute inset-0">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src="./assets/e777a57b939162b876418f1793283d92d18bafa0.png" />
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 777\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.8999999761581421\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4087e-15 38.85 -72 2.3789e-15 720 388.5)\\'><stop stop-color=\\'rgba(13,31,49,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(13,31,49,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
        </div>
      </div>
      
      {/* Shade Effects */}
      <div className="absolute bg-[rgba(0,194,184,0.05)] blur-[100px] filter h-[320px] left-[20px] rounded-[2.68435e+07px] top-[597px] w-[1399.2px] pointer-events-none" data-name="Shade" />
      <div className="absolute bg-[rgba(0,194,184,0.05)] blur-[100px] filter h-[320px] left-[20px] rounded-[2.68435e+07px] top-[85.2px] w-[1399.2px] pointer-events-none" data-name="Shade" />
      
      {/* Header */}
      <DashboardHeader onReset={onReset} />

      {/* Main Content */}
      <div className={`relative flex-1 fade-enter ${animated ? 'fade-enter-active' : ''}`} style={{ transitionDelay: '100ms' }}>
        {/* Authority Score Circle - Slides from center to left */}
        <div 
          className="absolute top-[60px] left-1/2 transition-all duration-1000 ease-out"
          style={{
            transform: loadingInfo ? 'translateX(-50%)' : 'translateX(calc(-50% - 200px))'
          }}
        >
          {/* Score Circle Container */}
          <div className="relative shrink-0 size-[256px]" data-name="Container">
            {/* Outer decorative ring */}
            <div className="absolute border-[0.8px] border-[rgba(207,255,4,0.2)] border-solid left-0 rounded-[2.68435e+07px] size-[256px] top-0" data-name="Container" />
            
            {/* Progress loader stroke - fills based on score with color conditions */}
            <div className={`absolute left-0 size-[256px] top-0 transition-opacity duration-1000 ease-in-out ${progressStroke > 0 ? 'opacity-100' : 'opacity-0'}`}>
              <svg className="size-full" viewBox="0 0 256 256" style={{ transform: 'rotate(-90deg)' }}>
                {/* Calculate circumference: 2 * π * r = 2 * π * 125 ≈ 785.4 */}
                <circle
                  cx="128"
                  cy="128"
                  r="125"
                  fill="none"
                  stroke={
                    progressStroke < 50 ? '#EF4444' : // Red for under 50
                    progressStroke <= 75 ? '#F8B400' : // Orange for 50-75
                    '#22c55e' // Green for 76-100
                  }
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="785.4"
                  strokeDashoffset={785.4 - (progressStroke / 100) * 785.4}
                  style={{ transition: 'stroke-dashoffset 1s ease-out, stroke 0.3s ease-out' }}
                  opacity="1"
                />
              </svg>
            </div>
            
            {/* Outer pulse ring */}
            <div className="absolute border-[0.8px] border-[rgba(0,194,184,0.1)] border-solid left-[-16px] opacity-[0.74] rounded-[2.68435e+07px] size-[288px] top-[-16px] animate-pulse-slow" data-name="Container" />
            
            {/* Inner score display */}
            <div className="absolute bg-[rgba(22,36,62,0.6)] border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid left-[16px] rounded-[2.68435e+07px] shadow-[0px_10px_25px_0px_rgba(4,11,23,0.4),0px_4px_60px_0px_rgba(240,241,244,0.15)] size-[224px] top-[16px]" data-name="Container">
              {/* Authority Score Label */}
              <div className="absolute h-[15.988px] left-[40.39px] top-[34.41px] w-[141.613px]" data-name="Text">
                <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[16px] left-[calc(50%-64.34px)] text-[#F8B400] text-[12px] text-nowrap top-[-0.8px] tracking-[1.2px] whitespace-pre">AUTHORITY SCORE</p>
              </div>
              
              {/* Score Number and Growth */}
              <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[55.46px] top-[56.4px] w-[111.463px]">
                {/* Score Number */}
                <div className="h-[96px] relative shrink-0 w-full flex items-center justify-center" data-name="Heading 1">
                  {loadingAuthority ? (
                    <LoadingSpinner size={48} />
                  ) : (
                    <p className="[text-shadow:rgba(50,255,4,0.15)_0px_4px_60px,rgba(4,11,23,0.3)_0px_10px_25px] font-['Satoshi:Bold',sans-serif] leading-[96px] not-italic text-[#defcd7] text-[96px] text-nowrap tracking-[-4.8px] whitespace-pre">{displayScore}</p>
                  )}
                </div>
                
                {/* Time Period Indicator */}
                <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[2.68435e+07px] shrink-0" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[rgba(0,194,184,0.4)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
                  <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap whitespace-pre">Last 20 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Container - Appears after Authority Score slides left */}
        <div 
          className="absolute top-[60px] transition-all duration-1000 ease-out"
          style={{
            left: loadingInfo ? 'calc(50% + 400px)' : 'calc(50% - 8px)',
            opacity: loadingInfo ? 0 : 1,
            transform: loadingInfo ? 'translateX(50px)' : 'translateX(0)'
          }}
        >
          <InfoContainer domain={domain} loading={loadingInfo} score={scores.avg} />
        </div>

        {/* Three Cards */}
        <div className="absolute content-stretch flex items-start justify-between left-1/2 top-[380px] translate-x-[-50%] w-[871px]" data-name="Card">
          {/* OPTIMIZE Card */}
          <div 
            onClick={() => onOpenModal('omg_optimize')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-[277px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(0,194,184,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(0,194,184,0.2)]"
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
                  <div className="relative shrink-0 size-[18px] opacity-30">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="Group 1">
                        <path d={svgPaths.p3561600} fill="url(#paint0_linear_4029_129)" id="Vector" opacity="0.5" />
                        <path d={svgPaths.p21f2da00} fill="url(#paint1_linear_4029_129)" id="Union" opacity="0.8" />
                      </g>
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4029_129" x1="8.99979" x2="8.99979" y1="0.0817732" y2="17.9178">
                          <stop stopColor="#00C2B8" />
                          <stop offset="1" stopColor="#00A198" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4029_129" x1="8.99992" x2="8.99992" y1="-7.60982e-05" y2="17.9999">
                          <stop stopColor="#00C2B8" />
                          <stop offset="1" stopColor="#00A198" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
              <div className="flex flex-col items-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                    {/* Score */}
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
                      <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
                        {loadingOptimize ? (
                          <LoadingSpinner size={32} />
                        ) : (
                          <>
                            <p className="relative shrink-0 text-[36px] text-white">{displayOptScore}</p>
                            <p className="relative shrink-0 text-[#919eab] text-[24px]">/100</p>
                          </>
                        )}
                      </div>
                      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">Clarity System</p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full transition-all duration-1000" style={{ paddingRight: `${100 - barWidths.opt}%` }}>
                          <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                          <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
                        </svg>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
                        <p className="relative shrink-0 text-[16px] text-white">{loadingOptimize ? <LoadingDots color="#ffffff" /> : displayCWVScore}</p>
                      </div>
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
                        <p className="relative shrink-0 text-[16px] text-white">{loadingOptimize ? <LoadingDots color="#ffffff" /> : displaySchemaScore}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MANIFEST Card */}
          <div 
            onClick={() => onOpenModal('omg_manifest')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-[277px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(207,255,4,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(207,255,4,0.2)]"
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
                  <div className="relative shrink-0 size-[18px] opacity-30">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="Group 1">
                        <path d={svgPaths.p3561600} fill="url(#paint0_linear_4029_129_manifest)" id="Vector" opacity="0.5" />
                        <path d={svgPaths.p21f2da00} fill="url(#paint1_linear_4029_129_manifest)" id="Union" opacity="0.8" />
                      </g>
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4029_129_manifest" x1="8.99979" x2="8.99979" y1="0.0817732" y2="17.9178">
                          <stop stopColor="#00C2B8" />
                          <stop offset="1" stopColor="#00A198" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4029_129_manifest" x1="8.99992" x2="8.99992" y1="-7.60982e-05" y2="17.9999">
                          <stop stopColor="#00C2B8" />
                          <stop offset="1" stopColor="#00A198" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
              <div className="flex flex-col items-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                    {/* Score */}
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
                      <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
                        {loadingManifest ? (
                          <LoadingSpinner size={32} />
                        ) : (
                          <>
                            <p className="relative shrink-0 text-[36px] text-white">{displayManScore}</p>
                            <p className="relative shrink-0 text-[#919eab] text-[24px]">/100</p>
                          </>
                        )}
                      </div>
                      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">Answer Source</p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full transition-all duration-1000" style={{ paddingRight: `${100 - barWidths.man}%` }}>
                          <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                          <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
                        </svg>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Backlink Score</p>
                        <p className="relative shrink-0 text-[16px] text-white">{loadingManifest ? <LoadingDots color="#ffffff" /> : displayBacklinkScore}</p>
                      </div>
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">News Mention Score</p>
                        <p className="relative shrink-0 text-[16px] text-white">{loadingManifest ? <LoadingDots color="#ffffff" /> : displayNewsMentionScore}</p>
                      </div>
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Wikidata Score</p>
                        <p className="relative shrink-0 text-[16px] text-white">{loadingManifest ? <LoadingDots color="#ffffff" /> : displayWikidataScore}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GENERATIVE Card */}
          <div 
            onClick={() => onOpenModal('omg_generative')}
            className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-[277px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(248,180,0,0.3)] hover:shadow-[0px_8px_32px_0px_rgba(248,180,0,0.2)]"
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
                  <div className="mix-blend-luminosity relative shrink-0 size-[17.836px]">
                    <div className="absolute bottom-[-0.92%] left-0 right-[-0.92%] top-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="Frame 1" style={{ mixBlendMode: "luminosity" }}>
                          <path d={svgPaths.p2ef25880} fill="url(#paint0_linear_4029_122)" fillOpacity="0.5" id="Vector" opacity="0.1" />
                          <path d={svgPaths.p21f2da00} fill="url(#paint1_linear_4029_122)" fillOpacity="0.5" id="Union" />
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4029_122" x1="8.91805" x2="8.91805" y1="3.49475e-05" y2="17.8361">
                            <stop stopColor="#00C2B8" />
                            <stop offset="1" stopColor="#00A198" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4029_122" x1="8.99992" x2="8.99992" y1="-7.60982e-05" y2="17.9999">
                            <stop stopColor="#00C2B8" />
                            <stop offset="1" stopColor="#00A198" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
              <div className="flex flex-col items-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                    {/* Score */}
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
                      <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
                        {loadingGenerative ? (
                          <LoadingSpinner size={32} />
                        ) : (
                          <>
                            <p className="relative shrink-0 text-[36px] text-white">{displayGenScore}</p>
                            <p className="relative shrink-0 text-[#919eab] text-[24px]">/100</p>
                          </>
                        )}
                      </div>
                      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">Influence Origin</p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full transition-all duration-1000" style={{ paddingRight: `${100 - barWidths.gen}%` }}>
                          <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                          <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
                        </svg>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">AI Cite Score</p>
                        <p className="relative shrink-0 text-[16px] text-white">{loadingGenerative ? <LoadingDots color="#ffffff" /> : displayAICiteScore}</p>
                      </div>
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 w-full" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px] w-[173px]">AI Overview Appearance</p>
                        <p className="relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{loadingGenerative ? <LoadingDots color="#ffffff" /> : displayAIOverviewScore}</p>
                      </div>
                      <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 w-full" data-name="Detail Item">
                        <p className="relative shrink-0 text-[#a7a7a7] text-[14px] w-[173px]">Authority Sources Score</p>
                        <p className="relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{loadingGenerative ? <LoadingDots color="#ffffff" /> : displayAuthoritySourcesScore}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark Comparison - Below the three cards */}
        <div className="absolute content-stretch flex items-start justify-center left-1/2 top-[700px] translate-x-[-50%] w-[871px]">
          <BenchmarkComparison 
            userDomain={domain}
            userScore={scores.avg}
            userScores={scores}
          />
        </div>
      </div>
    </div>
  );
}