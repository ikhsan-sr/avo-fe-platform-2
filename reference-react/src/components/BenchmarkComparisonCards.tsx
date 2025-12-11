import svgPathsOMG from "../imports/svg-zmgf6ogqec";

interface BenchmarkComparisonCardsProps {
  userScores: { opt: number; man: number; gen: number };
  competitorScore: number;
}

export function BenchmarkComparisonCards({ userScores, competitorScore }: BenchmarkComparisonCardsProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative w-full">
          {/* Your Brand Card */}
          <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Your brand</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col gap-[24px] items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0">
              {/* OPTIMIZE */}
              <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
                    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_optimize_brand)">
                            <path d={svgPathsOMG.p19aa0680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p2b561900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p35abdf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p3fe85180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M1.33333 10.6667H1.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p32d5a6be} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p5096bc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p2a7a680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p12c93300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_optimize_brand">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
                    </div>
                    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
                      <p className="relative shrink-0 text-[20px] text-white">{userScores.opt}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
                    </div>
                  </div>
                  <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
                  </div>
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                    <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                  </svg>
                </div>
              </div>
              
              {/* MANIFEST */}
              <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
                    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPathsOMG.p1bb15080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
                    </div>
                    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
                      <p className="relative shrink-0 text-[20px] text-white">{userScores.man}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
                    </div>
                  </div>
                  <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full" style={{ paddingRight: `${Math.max(0, 237 - (userScores.man * 2.37))}px` }}>
                        <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
                  </div>
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                    <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                  </svg>
                </div>
              </div>
              
              {/* GENERATIVE */}
              <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
                    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_generative_brand)">
                            <path d={svgPathsOMG.p1e0b8cc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p17134c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_generative_brand">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
                    </div>
                    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
                      <p className="relative shrink-0 text-[20px] text-white">{userScores.gen}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
                    </div>
                  </div>
                  <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full" style={{ paddingRight: `${Math.max(0, 237 - (userScores.gen * 2.37))}px` }}>
                        <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
                  </div>
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Text */}
          <p className="font-['Sansation:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
            {`OMG `}
            <br aria-hidden="true" />
            Comparisson
          </p>

          {/* Competitor Card */}
          <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(61,19,19,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(176,0,0,0.5)] w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[48px] items-center justify-center px-[20px] py-[16px] relative w-full">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e3170a] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">competitor</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col gap-[24px] items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0">
              {/* OPTIMIZE */}
              <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
                    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_optimize_comp)">
                            <path d={svgPathsOMG.p19aa0680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p2b561900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p35abdf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p3fe85180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M1.33333 10.6667H1.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p32d5a6be} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p5096bc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p2a7a680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p12c93300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_optimize_comp">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
                    </div>
                    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
                      <p className="relative shrink-0 text-[20px] text-white">{competitorScore - 5}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
                    </div>
                  </div>
                  <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
                  </div>
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                    <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                  </svg>
                </div>
              </div>
              
              {/* MANIFEST */}
              <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
                    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPathsOMG.p1bb15080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
                    </div>
                    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
                      <p className="relative shrink-0 text-[20px] text-white">{competitorScore - 3}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
                    </div>
                  </div>
                  <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full" style={{ paddingRight: `${Math.max(0, 237 - ((competitorScore - 3) * 2.37))}px` }}>
                        <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
                  </div>
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                    <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                  </svg>
                </div>
              </div>
              
              {/* GENERATIVE */}
              <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
                    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_generative_comp)">
                            <path d={svgPathsOMG.p1e0b8cc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPathsOMG.p17134c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_generative_comp">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
                    </div>
                    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
                      <p className="relative shrink-0 text-[20px] text-white">{competitorScore - 2}</p>
                      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
                    </div>
                  </div>
                  <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col h-[6px] items-start pl-0 py-0 relative w-full" style={{ paddingRight: `${Math.max(0, 237 - ((competitorScore - 2) * 2.37))}px` }}>
                        <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
                  </div>
                  <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
                    <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
                    <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
