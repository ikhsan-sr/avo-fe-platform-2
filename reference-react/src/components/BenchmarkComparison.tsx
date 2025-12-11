import { useState } from 'react';
import type { JSX } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import pathsA from "../imports/svg-2kr7bspzf9";
import pathsB from "../imports/svg-uaoyunhbeu";
const svgPaths = { ...pathsA, ...pathsB };
import Vector from "../imports/Vector";

interface Competitor {
  domain: string;
  score: number;
  opt: number;
  man: number;
  gen: number;
  cwvScore: number;
  schemaScore: number;
  addedAt: Date;
}

interface BenchmarkComparisonProps {
  userDomain: string;
  userScore: number;
  userScores: { opt: number; man: number; gen: number; avg: number };
}

export function BenchmarkComparison({ userDomain, userScore, userScores }: BenchmarkComparisonProps) {
  const [competitorInput, setCompetitorInput] = useState('');
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [expandedCompetitors, setExpandedCompetitors] = useState<Set<string>>(new Set());
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateDomain = (value: string) => {
    const trimmedDomain = value.trim();
    
    if (!trimmedDomain) {
      setError(true);
      setErrorMessage('Please enter competitor domain');
      return false;
    }
    
    const domainPattern = /\.[a-z]{2,}$/i;
    if (!domainPattern.test(trimmedDomain)) {
      setError(true);
      setErrorMessage('Please include a valid domain extension (e.g., .com, .net, .id)');
      return false;
    }
    
    const normalizedDomain = trimmedDomain.toLowerCase();
    if (competitors.some(c => c.domain === normalizedDomain)) {
      setError(true);
      setErrorMessage('This competitor has already been added');
      return false;
    }
    
    setError(false);
    setErrorMessage('');
    return true;
  };

  const handleAddCompetitor = () => {
    if (!validateDomain(competitorInput)) {
      setTimeout(() => {
        setError(false);
        setErrorMessage('');
      }, 3000);
      return;
    }

    const baseScore = Math.floor(Math.random() * 30) + 70;
    const newCompetitor: Competitor = {
      domain: competitorInput.trim().toLowerCase(),
      score: baseScore,
      opt: Math.floor(Math.random() * 20) + 80,
      man: Math.floor(Math.random() * 20) + 80,
      gen: Math.floor(Math.random() * 20) + 80,
      cwvScore: Math.floor(Math.random() * 40) + 50,
      schemaScore: Math.floor(Math.random() * 40) + 40,
      addedAt: new Date(),
    };

    setCompetitors([newCompetitor, ...competitors]);
    setCompetitorInput('');
    setError(false);
    setErrorMessage('');
    
    if (competitors.length === 0) {
      setExpandedCompetitors(new Set([newCompetitor.domain]));
    }
  };

  const handleRemoveCompetitor = (domain: string) => {
    setCompetitors(competitors.filter(c => c.domain !== domain));
    const newExpanded = new Set(expandedCompetitors);
    newExpanded.delete(domain);
    setExpandedCompetitors(newExpanded);
  };

  const toggleCompetitor = (domain: string) => {
    const newExpanded = new Set(expandedCompetitors);
    if (newExpanded.has(domain)) {
      newExpanded.delete(domain);
    } else {
      newExpanded.add(domain);
    }
    setExpandedCompetitors(newExpanded);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddCompetitor();
    }
  };

  const getTimeSince = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds} secs ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  const OMGScoreSection = ({ 
    label, 
    icon, 
    score, 
    barColor, 
    cwvScore, 
    schemaScore 
  }: { 
    label: string; 
    icon: JSX.Element; 
    score: number; 
    barColor: string; 
    cwvScore: number; 
    schemaScore: number;
  }) => (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
            {icon}
            <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">{label}</p>
          </div>
          <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
            <p className="relative shrink-0 text-[20px] text-white">{score}</p>
            <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
          </div>
        </div>
        <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full">
          <div className={`h-[6px] rounded-[2.68435e+07px] shrink-0`} style={{ width: `${score}%`, backgroundColor: barColor }} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-full">
        <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
          <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
          <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">{cwvScore}</p>
        </div>
        <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
          <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
          <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">{schemaScore}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p23fa6270} fill="white" />
                      <path d={svgPaths.p2c006e00} fill="white" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
                  Benchmark Comparisson
                </p>
              </div>
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#939393] text-[14px] text-nowrap whitespace-pre">
                See how your score against the other brands
              </p>
            </div>
            
            <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0">
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3a9b7] text-[12px] text-nowrap whitespace-pre">
                Your brand
              </p>
              <div className="content-stretch flex h-[16px] items-start relative shrink-0">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cfd1d4] text-[16px] text-nowrap whitespace-pre">
                  {userDomain}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-[rgba(22,36,62,0.5)] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center px-[20px] py-[24px] relative w-full gap-[16px]">
            <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
              <div className={`basis-0 bg-[#0b1525] grow h-[58px] min-h-px min-w-px relative rounded-[10px] shrink-0 transition-all duration-300 ${
                error ? 'ring-2 ring-red-500/50' : (isFocused || competitorInput ? 'ring-2 ring-[#C6F558]/50' : '')
              }`}>
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex h-[58px] items-center p-[16px] relative w-full">
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g clipPath="url(#clip0_bench_input)">
                            <path d={svgPaths.p14d24500} stroke={error ? "#EF4444" : (competitorInput || isFocused ? "#C6F558" : "#CFD1D4")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.p17212180} stroke={error ? "#EF4444" : (competitorInput || isFocused ? "#C6F558" : "#CFD1D4")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M1.66667 10H18.3333" stroke={error ? "#EF4444" : (competitorInput || isFocused ? "#C6F558" : "#CFD1D4")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                          <defs>
                            <clipPath id="clip0_bench_input">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={competitorInput}
                        onChange={(e) => {
                          setCompetitorInput(e.target.value);
                          if (error) {
                            setError(false);
                            setErrorMessage('');
                          }
                        }}
                        onKeyPress={handleKeyPress}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder='type "competitor.com"'
                        className={`font-['Manrope:Medium',sans-serif] font-medium leading-[normal] bg-transparent outline-none text-[16px] text-nowrap whitespace-pre w-full ${
                          error ? 'text-red-500 placeholder-red-500/50' : (competitorInput ? 'text-white' : 'text-[#6a6a6b] placeholder-[#6a6a6b]')
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className={`absolute border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] transition-all duration-300 ${
                  error
                    ? 'border-red-500/50 shadow-[0px_4px_6px_-4px_rgba(239,68,68,0.3)]'
                    : (competitorInput || isFocused 
                      ? 'border-[rgba(198,245,88,0.5)] shadow-[0px_4px_6px_-4px_rgba(198,245,88,0.3)]' 
                      : 'border-[rgba(198,245,88,0.5)]')
                }`} />
              </div>

              <button
                onClick={handleAddCompetitor}
                disabled={!competitorInput.trim()}
                className={`bg-[rgba(0,194,184,0.1)] content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[10px] self-stretch shrink-0 transition-all duration-300 ${
                  competitorInput.trim() ? 'hover:bg-[rgba(0,194,184,0.15)] cursor-pointer' : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <div aria-hidden="true" className="absolute border border-[#006964] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[16px] text-center text-nowrap whitespace-pre">
                  Add Competitor
                </p>
              </button>
            </div>

            <AnimatePresence>
              {error && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-red-500/10 border border-red-500/30 rounded-[8px] px-[16px] py-[12px]">
                    <p className="font-['Manrope:Regular',sans-serif] text-[14px] text-red-500">
                      {errorMessage}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Competitor List */}
      <AnimatePresence>
        {competitors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full flex flex-col"
          >
            {competitors.map((competitor, index) => {
              const isExpanded = expandedCompetitors.has(competitor.domain);
              const scoreDelta = userScore - competitor.score;
              
              return (
                <div key={competitor.domain} className="w-full">
                  {/* Competitor Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[rgba(22,36,62,0.5)] h-[76px] relative shrink-0 w-full"
                  >
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex h-[76px] items-center justify-between px-[32px] py-[24px] relative w-full">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                          <button
                            onClick={() => toggleCompetitor(competitor.domain)}
                            className="flex items-center justify-center relative shrink-0"
                          >
                            <div className={`flex-none transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`}>
                              <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center p-[8.105px] relative rounded-[7.368px] size-[28px]">
                                <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-white inset-0 pointer-events-none rounded-[7.368px]" />
                                <div className="relative shrink-0 size-[11.789px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                    <g>
                                      <path d={svgPaths.p2ef97980} fill="#00C2B8" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                            <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
                              {competitor.domain}
                            </p>
                            <div className="relative shrink-0 size-[4px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                                <circle cx="2" cy="2" fill="#6D6D6D" r="2" />
                              </svg>
                            </div>
                            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a6a6b] text-[14px] text-nowrap whitespace-pre">
                              {getTimeSince(competitor.addedAt)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveCompetitor(competitor.domain);
                          }}
                          className="relative shrink-0 size-[28px] hover:opacity-70 transition-opacity"
                        >
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                            <g>
                              <path d={svgPaths.p8018100} fill="white" />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Expanded Comparison Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[rgba(22,36,62,0.5)] relative shrink-0 w-full overflow-hidden"
                      >
                        <div className="flex flex-col items-center justify-center size-full">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[32px] pt-[24px] px-[32px] relative w-full">
                            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[871px]">
                              
                              {/* Score Comparison */}
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex items-center justify-between px-[64px] py-0 relative w-full">
                                    {/* Your Score Circle */}
                                    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
                                      <div className="relative shrink-0 size-[150px]">
                                        <div className="absolute left-1/2 size-[114px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                          <div className="absolute inset-[-49.12%_-52.63%_-56.14%_-52.63%]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 234">
                                              <g filter={`url(#filter0_dd_user_${index})`}>
                                                <circle cx="117" cy="113" fill="#16243E" fillOpacity="0.6" r="57" shapeRendering="crispEdges" />
                                                <circle cx="117" cy="113" r="56.5" shapeRendering="crispEdges" stroke="#FCFCFC" strokeOpacity="0.06" />
                                              </g>
                                              <defs>
                                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234" id={`filter0_dd_user_${index}`} width="234" x="0" y="0">
                                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="4" />
                                                  <feGaussianBlur stdDeviation="30" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.945098 0 0 0 0 0.956863 0 0 0 0.15 0" />
                                                  <feBlend in2="BackgroundImageFix" mode="normal" result={`effect1_dropShadow_user_${index}`} />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="10" />
                                                  <feGaussianBlur stdDeviation="12.5" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.0149001 0 0 0 0 0.0421976 0 0 0 0 0.0907264 0 0 0 0.4 0" />
                                                  <feBlend in2={`effect1_dropShadow_user_${index}`} mode="normal" result={`effect2_dropShadow_user_${index}`} />
                                                  <feBlend in="SourceGraphic" in2={`effect2_dropShadow_user_${index}`} mode="normal" result="shape" />
                                                </filter>
                                              </defs>
                                            </svg>
                                          </div>
                                        </div>
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
                                          <g>
                                            <g>
                                              <mask fill="white" id={`path-1-inside-1-user-${index}`}>
                                                <path d={svgPaths.p3e18f000} />
                                              </mask>
                                              <path d={svgPaths.p3e18f000} fill="#16243E" fillOpacity="0.9" mask={`url(#path-1-inside-1-user-${index})`} stroke="#C6F558" strokeOpacity="0.2" />
                                            </g>
                                            <g>
                                              <path d={svgPaths.pf8e7100} fill={`url(#paint0_linear_user_${index})`} />
                                              <path d={svgPaths.p19c489c0} stroke="#C6F558" strokeOpacity="0.2" strokeWidth="0.5" />
                                            </g>
                                          </g>
                                          <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id={`paint0_linear_user_${index}`} x1="75" x2="75" y1="0" y2="150">
                                              <stop stopColor="#00C2B8" />
                                              <stop offset="1" stopColor="#158F88" />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                        <div className="absolute content-stretch flex flex-col gap-[6px] items-center justify-center left-[calc(50%-0.5px)] text-nowrap top-[calc(50%+5.5px)] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
                                          <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fef0cc] text-[48px] tracking-[-0.96px]">{userScore}</p>
                                          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#cfd1d4] text-[14px] tracking-[0.07px]">Overall</p>
                                        </div>
                                      </div>
                                      <div className="content-stretch flex h-[16px] items-start relative shrink-0">
                                        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Your score</p>
                                      </div>
                                    </div>

                                    {/* Center Text */}
                                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
                                      <p className="font-['Sansation:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Score Comparisson</p>
                                      <div className="content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold gap-[6px] items-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
                                        <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">{`Delta : `}</p>
                                        <p className={`relative shrink-0 text-[24px] ${scoreDelta >= 0 ? 'text-[#00c2b8]' : 'text-[#EF4444]'}`}>
                                          {scoreDelta > 0 ? '+' : ''}{scoreDelta}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Competitor Score Circle */}
                                    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
                                      <div className="relative shrink-0 size-[150px]">
                                        <div className="absolute left-1/2 size-[114px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                          <div className="absolute inset-[-49.12%_-52.63%_-56.14%_-52.63%]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 234">
                                              <g filter={`url(#filter0_dd_comp_${index})`}>
                                                <circle cx="117" cy="113" fill="#16243E" fillOpacity="0.6" r="57" shapeRendering="crispEdges" />
                                                <circle cx="117" cy="113" r="56.5" shapeRendering="crispEdges" stroke="#FCFCFC" strokeOpacity="0.06" />
                                              </g>
                                              <defs>
                                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234" id={`filter0_dd_comp_${index}`} width="234" x="0" y="0">
                                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="4" />
                                                  <feGaussianBlur stdDeviation="30" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.945098 0 0 0 0 0.956863 0 0 0 0.15 0" />
                                                  <feBlend in2="BackgroundImageFix" mode="normal" result={`effect1_dropShadow_comp_${index}`} />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="10" />
                                                  <feGaussianBlur stdDeviation="12.5" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.0149001 0 0 0 0 0.0421976 0 0 0 0 0.0907264 0 0 0 0.4 0" />
                                                  <feBlend in2={`effect1_dropShadow_comp_${index}`} mode="normal" result={`effect2_dropShadow_comp_${index}`} />
                                                  <feBlend in="SourceGraphic" in2={`effect2_dropShadow_comp_${index}`} mode="normal" result="shape" />
                                                </filter>
                                              </defs>
                                            </svg>
                                          </div>
                                        </div>
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
                                          <g>
                                            <g>
                                              <mask fill="white" id={`path-1-inside-1-comp-${index}`}>
                                                <path d={svgPaths.p3e18f000} />
                                              </mask>
                                              <path d={svgPaths.p3e18f000} fill="#16243E" fillOpacity="0.9" mask={`url(#path-1-inside-1-comp-${index})`} stroke="#C6F558" strokeOpacity="0.2" />
                                            </g>
                                            <g>
                                              <path d={svgPaths.pf8e7100} fill={`url(#paint0_linear_comp_${index})`} />
                                              <path d={svgPaths.p19c489c0} stroke="#C6F558" strokeOpacity="0.2" strokeWidth="0.5" />
                                            </g>
                                          </g>
                                          <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id={`paint0_linear_comp_${index}`} x1="75" x2="75" y1="0" y2="150">
                                              <stop stopColor="#EF4444" />
                                              <stop offset="1" stopColor="#8F1515" />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                        <div className="absolute content-stretch flex flex-col gap-[6px] items-center justify-center left-[calc(50%-0.5px)] text-nowrap top-[calc(50%+5.5px)] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
                                          <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fef0cc] text-[48px] tracking-[-0.96px]">{competitor.score}</p>
                                          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#cfd1d4] text-[14px] tracking-[0.07px]">Overall</p>
                                        </div>
                                      </div>
                                      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Competitor score</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Divider */}
                              <div className="h-0 relative shrink-0 w-full">
                                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 871 1">
                                    <path d="M0 0.5H871" stroke="white" strokeOpacity="0.1" />
                                  </svg>
                                </div>
                              </div>

                              {/* OMG Comparison Cards */}
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-start size-full gap-[24px]">
                                  {/* YOUR BRAND Card */}
                                  <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 flex-1">
                                    <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
                                    
                                    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full">
                                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
                                      <div className="flex flex-row items-center size-full">
                                        <div className="content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                                          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Your brand</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
                                      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                        <OMGScoreSection 
                                          label="OPTIMIZE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g clipPath="url(#clip0_opt)">
                                                  <path d={svgPaths.p19aa0680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2b561900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p35abdf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p3fe85180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d="M1.33333 10.6667H1.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p32d5a6be} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p5096bc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2a7a680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p12c93300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_opt">
                                                    <rect fill="white" height="16" width="16" />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                          } 
                                          score={userScores.opt} 
                                          barColor="#00c2b8" 
                                          cwvScore={62} 
                                          schemaScore={47} 
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="MANIFEST" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g>
                                                  <path d={svgPaths.p1bb15080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                              </svg>
                                            </div>
                                          } 
                                          score={userScores.man} 
                                          barColor="#cfff04" 
                                          cwvScore={62} 
                                          schemaScore={47} 
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="GENERATIVE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g>
                                                  <path d={svgPaths.p17134c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                              </svg>
                                            </div>
                                          } 
                                          score={userScores.gen} 
                                          barColor="#ff9f0a" 
                                          cwvScore={62} 
                                          schemaScore={47} 
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Center Text */}
                                  <div className="flex items-center justify-center">
                                    <p className="font-['Sansation:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
                                      {`OMG `}
                                      <br aria-hidden="true" />
                                      Comparisson
                                    </p>
                                  </div>

                                  {/* COMPETITOR Card */}
                                  <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 flex-1">
                                    <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
                                    
                                    <div className="bg-gradient-to-r from-[rgba(61,19,19,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(176,0,0,0.5)] w-full">
                                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
                                      <div className="flex flex-row items-center justify-center size-full">
                                        <div className="content-stretch flex h-[48px] items-center justify-center px-[20px] py-[16px] relative w-full">
                                          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e3170a] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">competitor</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
                                      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                        <OMGScoreSection 
                                          label="OPTIMIZE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g clipPath="url(#clip0_opt_comp)">
                                                  <path d={svgPaths.p19aa0680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2b561900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p35abdf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p3fe85180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d="M1.33333 10.6667H1.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p32d5a6be} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p5096bc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2a7a680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p12c93300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_opt_comp">
                                                    <rect fill="white" height="16" width="16" />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                          } 
                                          score={competitor.opt} 
                                          barColor="#00c2b8" 
                                          cwvScore={competitor.cwvScore} 
                                          schemaScore={competitor.schemaScore} 
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="MANIFEST" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g>
                                                  <path d={svgPaths.p1bb15080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                              </svg>
                                            </div>
                                          } 
                                          score={competitor.man} 
                                          barColor="#cfff04" 
                                          cwvScore={competitor.cwvScore} 
                                          schemaScore={competitor.schemaScore} 
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="GENERATIVE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g>
                                                  <path d={svgPaths.p17134c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                              </svg>
                                            </div>
                                          } 
                                          score={competitor.gen} 
                                          barColor="#ff9f0a" 
                                          cwvScore={competitor.cwvScore} 
                                          schemaScore={competitor.schemaScore} 
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Divider */}
                              <div className="h-0 relative shrink-0 w-full">
                                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 871 1">
                                    <path d="M0 0.5H871" stroke="white" strokeOpacity="0.1" />
                                  </svg>
                                </div>
                              </div>

                              {/* Charts Placeholder */}
                              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full gap-[24px]">
                                <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[rgba(22,36,62,0.3)] rounded-[12px]">
                                  <p className="text-[#939393] text-center mb-2">Radar Chart</p>
                                  <p className="text-[#6a6a6b] text-[12px] text-center">Visual comparison across all metrics</p>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[rgba(22,36,62,0.3)] rounded-[12px]">
                                  <p className="text-[#939393] text-center mb-2">Line Chart</p>
                                  <p className="text-[#6a6a6b] text-[12px] text-center">Trend analysis over time</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {competitors.length === 0 && (
        <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[64px] relative w-full gap-[16px]">
              <div className="relative shrink-0 size-[48px]">
                <Vector />
              </div>
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(140,140,140,0.4)] text-center max-w-[629px]">
                Add competitor above to view deep-dive analysis comparison
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
