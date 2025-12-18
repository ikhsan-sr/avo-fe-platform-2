import { useState, useEffect } from 'react';

import svgPathsVeryPoorly from "../imports/svg-hwd4s7iovw";
import svgPathsRisk from "../imports/svg-yjq3nin4tv";
import svgPathsBorderline from "../imports/svg-05j5mqbpjp";
import svgPathsTrusted from "../imports/svg-hkonjttvnw";

interface InfoContainerProps {
  domain: string;
  loading?: boolean;
  score: number;
}

// Inline Loading Spinner for Info Section
function LoadingSpinner({ size = 16 }: { size?: number }) {
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
    <span className="inline-block animate-pulse" style={{ color }}>
      ...
    </span>
  );
}

export function InfoContainer({ domain, loading = false, score }: InfoContainerProps) {
  // Use CSS animation for progress bar instead of JavaScript state
  const [isLoading, setIsLoading] = useState(loading);

  // Sync loading state when prop changes
  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  // Determine state based on score or dummy domain
  const getState = () => {
    if (score < 20) return 'invisible';
    if (score >= 20 && score < 35) return 'foundational';
    if (score >= 35 && score < 46) return 'contender';
    if (score >= 46 && score < 66) return 'validated';
    if (score >= 66 && score < 86) return 'authority';
    if (score >= 86) return 'trusted';
  };

  const state = getState();

  // Configuration for each state
  const stateConfig = {
    invisible: {
      svgPaths: svgPathsVeryPoorly,
      titlePrefix: '',
      titleHighlight: 'Invisible',
      titleColor: '#ff9b95',
      subtitlePrefix: '',
      subtitleHighlight: 'The brand lacks a fundamental, recognizable digital footprint. No entity is recognized, and content is unindexable or non-existent.',
      subtitleColor: '#919eab',
      subtitleSuffix: '',
      iconType: 'xRed'
    },
    foundational: {
      svgPaths: svgPathsRisk,
      titlePrefix: '',
      titleHighlight: 'Foundational',
      titleColor: '#ff9b95',
      subtitlePrefix: '',
      subtitleHighlight: 'The entity is technically present and indexable, but lacks the structure or volume of signals to be recognized as a viable competitor.',
      subtitleColor: '#919eab',
      subtitleSuffix: '',
      iconType: 'xRed'
    },
    contender: {
      svgPaths: svgPathsBorderline,
      titlePrefix: '',
      titleHighlight: 'Contender',
      titleColor: '#ffdf99',
      subtitlePrefix: '',
      subtitleHighlight: 'The technical groundwork is laid. The entity is recognizable and can compete for low-difficulty queries. This phase is dedicated to content velocity and increasing Answer Share.',
      subtitleColor: '#ffffff',
      subtitleSuffix: '',
      iconType: 'warningYellow'
    },
    validated: {
      svgPaths: svgPathsTrusted,
      titlePrefix: '',
      titleHighlight: 'Validated',
      titleColor: '#bbff97',
      subtitlePrefix: '',
      subtitleHighlight: 'The brand has begun to prove its expertise. It is actively cited by media and search engines, confirming its role as a reliable source but not yet the market leader.',
      subtitleColor: '#ffffff',
      subtitleSuffix: '',
      iconType: 'checkTeal'
    },
    authority: {
      svgPaths: svgPathsTrusted,
      titlePrefix: '',
      titleHighlight: 'Authority',
      titleColor: '#bbff97',
      subtitlePrefix: '',
      subtitleHighlight: 'The brand is the definitive and recognized source for its core topics. It consistently captures AI answers and forces competitors to measure against it.',
      subtitleColor: '#ffffff',
      subtitleSuffix: '',
      iconType: 'checkTeal'
    },
    trusted: {
      svgPaths: svgPathsTrusted,
      titlePrefix: '',
      titleHighlight: 'Trusted',
      titleColor: '#bbff97',
      subtitlePrefix: '',
      subtitleHighlight: 'The brand is the absolute, undisputed standard in its category. Its authority is proven and unquestionable to AI, institutions, and the audience.',
      subtitleColor: '#ffffff',
      subtitleSuffix: '',
      iconType: 'checkTeal'
    }
  };
  
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const config = stateConfig[state];
  const svgPaths = config.svgPaths;

  // Render icon based on type
  const renderIcon = () => {
    if (config.iconType === 'xRed') {
      return (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Icon">
            <path d={'p1f023100' in svgPaths ? svgPaths.p1f023100 : (svgPaths as any).p11b100} id="Vector" stroke="var(--stroke-0, #E3170A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={('p3bebc700' in svgPaths) ? (svgPaths as any).p3bebc700 : (svgPaths as any).p60f4400} fill="var(--fill-0, #E3170A)" id="Union" /> 
          </g>
        </svg>
      );
    } else if (config.iconType === 'warningYellow') {
      return (
        <div className="absolute bottom-0 left-0 right-[-18.75%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 24">
            <g id="Icon">
              <path d={'p11b100' in svgPaths ? (svgPaths as any).p11b100 : (svgPaths as any).p1f023100} id="Vector" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12.5 12L27.5 10" id="Vector 3" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      );
    } else {
      // checkTeal
      return (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Icon">
            <path d={'p1f023100' in svgPaths ? svgPaths.p1f023100 : (svgPaths as any).p11b100} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      );
    }
  };

  // Render value rating icon
  const renderValueIcon = () => {
    if (config.valueIcon === 'downRed') {
      return (
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <div className="relative size-[12px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Icon">
                  <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #E3170A)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={(svgPaths as any).p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #E3170A)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      );
    } else if (config.valueIcon === 'horizontalYellow') {
      return (
        <div className="h-[6px] relative shrink-0 w-[12px]" data-name="Vector">
          <div className="absolute inset-[-1.67%_-0.83%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
              <path d={'p11560b00' in svgPaths ? (svgPaths as any).p11560b00 : (svgPaths as any).p1f023100} fill="var(--fill-0, #F8B400)" id="Vector" stroke="var(--stroke-0, #F8B400)" strokeWidth="0.1" />
            </svg>
          </div>
        </div>
      );
    } else {
      // upGreen
      return (
        <div className="relative shrink-0 size-[12px]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="Icon">
              <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={(svgPaths as any).p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      );
    }
  };

  // Render AI visibility icon
  const renderAIVisibilityIcon = () => {
    if (config.aiVisibilityIcon === 'warning') {
      return (
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g clipPath="url(#clip0_4078_1236)" id="Icon">
              <path d={svgPaths.p25306a00} id="Vector" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </g>
            <defs>
              <clipPath id="clip0_4078_1236">
                <rect fill="white" height="14" width="14" />
              </clipPath>
            </defs>
          </svg>
        </div>
      );
    } else {
      // check
      return (
        <div className="relative shrink-0 size-[14px]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g clipPath="url(#clip0_2054_200)" id="Icon">
              <path d={svgPaths.p25306a00} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </g>
            <defs>
              <clipPath id="clip0_2054_200">
                <rect fill="white" height="14" width="14" />
              </clipPath>
            </defs>
          </svg>
        </div>
      );
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Info Container">
      {/* Heading Section */}
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
        {/* Domain with Globe Icon */}
        <div className={`content-stretch flex gap-[4px] items-center relative shrink-0 transition-all duration-700 ease-out ${isLoading ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`} style={{ transitionDelay: isLoading ? '0ms' : '0ms' }}>
          <div className="relative shrink-0 size-[12px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <g clipPath="url(#clip0_2085_187)" id="Icon">
                <path d={svgPaths.p10ca1a00} id="Vector" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p11683900} id="Vector_2" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.0002 6H11.0002" id="Vector_3" stroke="var(--stroke-0, #BABABA)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_2085_187">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <a
            href={`https://${domain.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="[text-underline-position:from-font] decoration-solid font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#bababa] text-[16px] text-nowrap underline whitespace-pre cursor-pointer"
          >
            {domain.toLowerCase()}
          </a>
        </div>

        {/* Title with Icon */}
        <div className={`box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full min-h-[42px] transition-all duration-900 ease-out ${isLoading ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`} data-name="Container" style={{ transitionDelay: isLoading ? '0ms' : '400ms' }}>
          <div className={`relative shrink-0 size-[24px] transition-all duration-900 ${isLoading ? 'scale-0 rotate-[-180deg] opacity-0' : 'scale-100 rotate-0 opacity-100'}`} data-name="Icon" style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', transitionDelay: isLoading ? '0ms' : '400ms' }}>
            {renderIcon()}
          </div>
          <p className={`[text-shadow:rgba(240,241,244,0.15)_0px_4px_60px,rgba(4,11,23,0.4)_0px_10px_25px] font-manrope font-bold leading-[normal] relative shrink-0 text-[#fcfcfc] text-[30px] text-nowrap whitespace-pre transition-opacity duration-500`}>
            {isLoading ? (
            <LoadingDots color="#fcfcfc" />
          ) : (
            <>
              <span>{config.titlePrefix}</span>
              <span style={{ color: config.titleColor }}>{config.titleHighlight}</span>
            </>
          )}
          </p>
        </div>

        {/* Subtitle */}
        <p className={`font-manrope font-normal leading-[normal] relative shrink-0 text-[#919eab] text-[16px] min-h-[20px] max-w-[425px] transition-all duration-900 ease-out ${isLoading ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`} style={{ transitionDelay: isLoading ? '0ms' : '800ms' }}>
          {isLoading ? (
            <LoadingDots color="#919eab" />
          ) : (
            <>
              <p>{config.subtitlePrefix}</p>
              <span className="font-manrope font-normal text-sm" style={{ color: config.subtitleColor }}>
                {config.subtitleHighlight}
              </span>
              <span>{config.subtitleSuffix}</span>
            </>
          )}
        </p>
      </div>

      {/* Brand Context Card */}
      <div className={`hidden bg-gradient-to-r content-stretch flex flex-col from-[rgba(19,46,61,0.7)] items-start p-[16px] relative rounded-[14px] shrink-0 to-[rgba(10,58,85,0.7)] transition-all duration-900 ease-out ${isLoading ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`} data-name="BrandContext" style={{ transitionDelay: isLoading ? '0ms' : '1200ms' }}>
        <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)]" />
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          {/* Value Rating */}
          <div className={`content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 transition-all duration-800 ease-out ${isLoading ? 'opacity-0 translate-x-[-10px]' : 'opacity-100 translate-x-0'}`} data-name="Info Item" style={{ transitionDelay: isLoading ? '0ms' : '1600ms' }}>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3a9b7] text-[12px] text-nowrap whitespace-pre">
                Value Rating
              </p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Info Value Container">
              {isLoading ? (
                <LoadingSpinner size={16} />
              ) : (
                <>
                  {renderValueIcon()}
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                    {config.valueRating}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className={`bg-[rgba(255,255,255,0.05)] h-[40px] shrink-0 w-px transition-all duration-800 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`} data-name="Container" style={{ transitionDelay: isLoading ? '0ms' : '1800ms' }} />

          {/* AI Visibility */}
          <div className={`content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 transition-all duration-800 ease-out ${isLoading ? 'opacity-0 translate-x-[-10px]' : 'opacity-100 translate-x-0'}`} data-name="Info Item" style={{ transitionDelay: isLoading ? '0ms' : '2000ms' }}>
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#a3a9b7] text-[12px] text-nowrap whitespace-pre">
              AI Visibility
            </p>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Info Value Container">
              {isLoading ? (
                <LoadingSpinner size={16} />
              ) : (
                <>
                  {renderAIVisibilityIcon()}
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-nowrap whitespace-pre" style={{ color: config.aiVisibilityColor }}>
                    {config.aiVisibility}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className={`bg-[rgba(255,255,255,0.05)] h-[40px] shrink-0 w-px transition-all duration-800 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`} data-name="Container" style={{ transitionDelay: isLoading ? '0ms' : '2200ms' }} />

          {/* Updated */}
          <div className={`content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 text-nowrap whitespace-pre transition-all duration-800 ease-out ${isLoading ? 'opacity-0 translate-x-[-10px]' : 'opacity-100 translate-x-0'}`} data-name="Info Item" style={{ transitionDelay: isLoading ? '0ms' : '2400ms' }}>
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#a3a9b7] text-[12px]">
              Updated
            </p>
            {isLoading ? (
              <LoadingSpinner size={16} />
            ) : (
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white">
                {config.updated}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
