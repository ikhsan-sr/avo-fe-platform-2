import svgPaths from "./svg-mm7u3ebptn";

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p23fa6270} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c006e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Frame />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Benchmark Comparisson</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Container />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#939393] text-[14px] text-nowrap whitespace-pre">See how your score against the other brands</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cfd1d4] text-[16px] text-nowrap whitespace-pre">avonetiqxsribu.com</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3a9b7] text-[12px] text-nowrap whitespace-pre">Your brand</p>
      <Frame6 />
    </div>
  );
}

function CardTestimoni() {
  return (
    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame8 />
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4078_2847)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17212180} id="Vector_2" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 10H18.3333" id="Vector_3" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4078_2847">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Icon />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">fiverr.com</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 bg-[#0b1525] grow h-[58px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[58px] items-center p-[16px] relative w-full">
          <Frame9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(198,245,88,0.5)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-4px_rgba(198,245,88,0.3)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(0,194,184,0.1)] content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[10px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#006964] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[16px] text-center text-nowrap whitespace-pre">Add Competitor</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <TextInput />
      <Button />
    </div>
  );
}

function CardTestimoni1() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative shrink-0 w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[24px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[11.789px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p2ef97980} fill="var(--fill-0, #00C2B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center opacity-50 p-[8.105px] relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Frame1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">fiverr.com</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #6D6D6D)" id="Ellipse 78" r="2" />
        </svg>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a6a6b] text-[14px] text-nowrap whitespace-pre">3 days ago</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button1 />
      <Frame16 />
    </div>
  );
}

function Cross() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="cross">
          <path d={svgPaths.p8018100} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame30 />
      <Cross />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center justify-center left-[calc(50%-0.5px)] text-nowrap top-[calc(50%+5.5px)] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fef0cc] text-[48px] tracking-[-0.96px]">85</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#cfd1d4] text-[14px] tracking-[0.07px]">Overall</p>
    </div>
  );
}

function RadialCircle() {
  return (
    <div className="relative shrink-0 size-[150px]" data-name="Radial/Circle">
      <div className="absolute left-1/2 size-[114px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="absolute inset-[-49.12%_-52.63%_-56.14%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 234">
            <g filter="url(#filter0_dd_4078_2920)" id="Ellipse 77">
              <circle cx="117" cy="113" fill="var(--fill-0, #16243E)" fillOpacity="0.6" r="57" shapeRendering="crispEdges" />
              <circle cx="117" cy="113" r="56.5" shapeRendering="crispEdges" stroke="var(--stroke-0, #FCFCFC)" strokeOpacity="0.06" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234" id="filter0_dd_4078_2920" width="234" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="30" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.945098 0 0 0 0 0.956863 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4078_2920" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0149001 0 0 0 0 0.0421976 0 0 0 0 0.0907264 0 0 0 0.4 0" />
                <feBlend in2="effect1_dropShadow_4078_2920" mode="normal" result="effect2_dropShadow_4078_2920" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_4078_2920" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g id="item">
          <g id="Ellipse 75">
            <mask fill="white" id="path-1-inside-1_4078_2954">
              <path d={svgPaths.p3e18f000} />
            </mask>
            <path d={svgPaths.p3e18f000} fill="var(--fill-0, #16243E)" fillOpacity="0.9" mask="url(#path-1-inside-1_4078_2954)" stroke="var(--stroke-0, #C6F558)" strokeOpacity="0.2" />
          </g>
          <g id="Ellipse 76">
            <path d={svgPaths.pf8e7100} fill="url(#paint0_linear_4078_2954)" />
            <path d={svgPaths.p19c489c0} stroke="var(--stroke-0, #C6F558)" strokeOpacity="0.2" strokeWidth="0.5" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4078_2954" x1="75" x2="75" y1="0" y2="150">
            <stop stopColor="#00C2B8" />
            <stop offset="1" stopColor="#158F88" />
          </linearGradient>
        </defs>
      </svg>
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Your score</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
      <RadialCircle />
      <Frame7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold gap-[6px] items-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">{`Delta : `}</p>
      <p className="relative shrink-0 text-[#00c2b8] text-[24px]">-10</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Sansation:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Score Comparisson</p>
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-center justify-center left-[calc(50%-0.5px)] text-nowrap top-[calc(50%+5.5px)] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fef0cc] text-[48px] tracking-[-0.96px]">95</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#cfd1d4] text-[14px] tracking-[0.07px]">Overall</p>
    </div>
  );
}

function RadialCircle1() {
  return (
    <div className="relative shrink-0 size-[150px]" data-name="Radial/Circle">
      <div className="absolute left-1/2 size-[114px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="absolute inset-[-49.12%_-52.63%_-56.14%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 234">
            <g filter="url(#filter0_dd_4078_2920)" id="Ellipse 77">
              <circle cx="117" cy="113" fill="var(--fill-0, #16243E)" fillOpacity="0.6" r="57" shapeRendering="crispEdges" />
              <circle cx="117" cy="113" r="56.5" shapeRendering="crispEdges" stroke="var(--stroke-0, #FCFCFC)" strokeOpacity="0.06" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234" id="filter0_dd_4078_2920" width="234" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="30" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.945098 0 0 0 0 0.956863 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4078_2920" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0149001 0 0 0 0 0.0421976 0 0 0 0 0.0907264 0 0 0 0.4 0" />
                <feBlend in2="effect1_dropShadow_4078_2920" mode="normal" result="effect2_dropShadow_4078_2920" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_4078_2920" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g id="item">
          <g id="Ellipse 75">
            <mask fill="white" id="path-1-inside-1_4078_2889">
              <path d={svgPaths.p3e18f000} />
            </mask>
            <path d={svgPaths.p3e18f000} fill="var(--fill-0, #16243E)" fillOpacity="0.9" mask="url(#path-1-inside-1_4078_2889)" stroke="var(--stroke-0, #C6F558)" strokeOpacity="0.2" />
          </g>
          <g id="Ellipse 76">
            <path d={svgPaths.pf8e7100} fill="url(#paint0_linear_4078_2889)" />
            <path d={svgPaths.p19c489c0} stroke="var(--stroke-0, #C6F558)" strokeOpacity="0.2" strokeWidth="0.5" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4078_2889" x1="75" x2="75" y1="0" y2="150">
            <stop stopColor="#EF4444" />
            <stop offset="1" stopColor="#8F1515" />
          </linearGradient>
        </defs>
      </svg>
      <Frame17 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
      <RadialCircle1 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Competitor score</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] py-0 relative w-full">
          <Frame12 />
          <Frame11 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function CardTestimoni2() {
  return (
    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Your brand</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4078_2922)" id="Icon">
          <path d={svgPaths.p19aa0680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2b561900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35abdf80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3fe85180} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 10.6667H1.34" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p32d5a6be} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5096bc0} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a7a680} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p12c93300} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4078_2922">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon1 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
    </div>
  );
}

function ScoreContainer() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Score Container">
      <p className="relative shrink-0 text-[20px] text-white">93</p>
      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container1 />
      <ScoreContainer />
    </div>
  );
}

function Container2() {
  return <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Container2 />
    </div>
  );
}

function DetailItem() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
    </div>
  );
}

function DetailItem1() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem />
      <DetailItem1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <Frame41 />
      <Frame33 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon2 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
    </div>
  );
}

function ScoreContainer1() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Score Container">
      <p className="relative shrink-0 text-[20px] text-white">93</p>
      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container3 />
      <ScoreContainer1 />
    </div>
  );
}

function Container4() {
  return <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Container5 />
    </div>
  );
}

function DetailItem2() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
    </div>
  );
}

function DetailItem3() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem2 />
      <DetailItem3 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame42 />
      <Frame35 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4078_2908)" id="Icon">
          <path d={svgPaths.p1e0b8cc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4078_2908">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon3 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
    </div>
  );
}

function ScoreContainer2() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Score Container">
      <p className="relative shrink-0 text-[20px] text-white">93</p>
      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container6 />
      <ScoreContainer2 />
    </div>
  );
}

function Container7() {
  return <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Container8 />
    </div>
  );
}

function DetailItem4() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
    </div>
  );
}

function DetailItem5() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem4 />
      <DetailItem5 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame43 />
      <Frame38 />
    </div>
  );
}

function CardTestimoni3() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col gap-[24px] items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0" data-name="Card - Testimoni">
      <Frame34 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame36 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni2 />
      <CardTestimoni3 />
    </div>
  );
}

function CardTestimoni4() {
  return (
    <div className="bg-gradient-to-r from-[rgba(61,19,19,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(176,0,0,0.5)] w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[48px] items-center justify-center px-[20px] py-[16px] relative w-full">
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e3170a] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">competitor</p>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4078_2922)" id="Icon">
          <path d={svgPaths.p19aa0680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2b561900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35abdf80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3fe85180} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 10.6667H1.34" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p32d5a6be} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5096bc0} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a7a680} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p12c93300} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4078_2922">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon4 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
    </div>
  );
}

function ScoreContainer3() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Score Container">
      <p className="relative shrink-0 text-[20px] text-white">93</p>
      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container9 />
      <ScoreContainer3 />
    </div>
  );
}

function Container10() {
  return <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame26 />
      <Container10 />
    </div>
  );
}

function DetailItem6() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
    </div>
  );
}

function DetailItem7() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem6 />
      <DetailItem7 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <Frame44 />
      <Frame39 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon5 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
    </div>
  );
}

function ScoreContainer4() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Score Container">
      <p className="relative shrink-0 text-[20px] text-white">93</p>
      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container11 />
      <ScoreContainer4 />
    </div>
  );
}

function Container12() {
  return <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Container13 />
    </div>
  );
}

function DetailItem8() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
    </div>
  );
}

function DetailItem9() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem8 />
      <DetailItem9 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4078_2908)" id="Icon">
          <path d={svgPaths.p1e0b8cc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4078_2908">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon6 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
    </div>
  );
}

function ScoreContainer5() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Score Container">
      <p className="relative shrink-0 text-[20px] text-white">93</p>
      <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container14 />
      <ScoreContainer5 />
    </div>
  );
}

function Container15() {
  return <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Container16 />
    </div>
  );
}

function DetailItem10() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">62</p>
    </div>
  );
}

function DetailItem11() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
      <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">47</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem10 />
      <DetailItem11 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function CardTestimoni5() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col gap-[24px] items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0" data-name="Card - Testimoni">
      <Frame40 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame54 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni4 />
      <CardTestimoni5 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative w-full">
          <Frame25 />
          <p className="font-['Sansation:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
            {`OMG `}
            <br aria-hidden="true" />
            Comparisson
          </p>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-yellow-500 rounded-[8px] shrink-0 size-[16px]" />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">Test</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-red-500 rounded-[8px] shrink-0 size-[16px]" />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">Test</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[232px] ml-0 mt-0 relative w-[200.769px]" data-name="Group">
      <div className="absolute inset-[-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 234">
          <g id="Group">
            <path d={svgPaths.p350fd600} id="Vector" stroke="var(--stroke-0, #1E3A5F)" />
            <path d={svgPaths.p386e3f00} id="Vector_2" stroke="var(--stroke-0, #1E3A5F)" />
            <path d={svgPaths.p975df80} id="Vector_3" stroke="var(--stroke-0, #1E3A5F)" />
            <path d={svgPaths.p2f048f00} id="Vector_4" stroke="var(--stroke-0, #1E3A5F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[232px] ml-0 mt-0 relative w-[200.769px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.12%] right-[-0.12%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 232">
          <g id="Group">
            <path d="M100.635 116V0" id="Vector" stroke="var(--stroke-0, #1E3A5F)" />
            <path d="M100.635 116L201.019 58" id="Vector_2" stroke="var(--stroke-0, #1E3A5F)" />
            <path d="M100.635 116L201.019 174" id="Vector_3" stroke="var(--stroke-0, #1E3A5F)" />
            <path d="M100.635 116V232" id="Vector_4" stroke="var(--stroke-0, #1E3A5F)" />
            <path d="M100.635 116L0.250139 174" id="Vector_5" stroke="var(--stroke-0, #1E3A5F)" />
            <path d="M100.635 116L0.250139 58" id="Vector_6" stroke="var(--stroke-0, #1E3A5F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function RechartsZindex100R() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[17.2%] mt-[6.98%] place-items-start relative" data-name="recharts-zindex--100-:r0:">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[44.62%] mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[8px] ml-[16.46px] mt-[12px] relative w-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[16.46px] mt-0 not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[32.925px]">Entity</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.75%] mt-[23.13%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[4px] ml-0 mt-[7.74px] relative w-[6.912px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[6.91px] mt-0 not-italic relative text-[12px] text-gray-400 w-[45.895px]">Content</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.75%] mt-[66.4%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[4px] ml-0 mt-[3.74px] relative w-[6.912px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[6.91px] mt-0 not-italic relative text-[12px] text-gray-400 w-[40.907px]">Distrib.</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[44.3%] mt-[87.95%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[8px] ml-[17.46px] mt-0 relative w-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[17.46px] mt-[4.52px] not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[34.92px]">Exper.</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.19%] mt-[66.4%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[4px] ml-[26.94px] mt-[3.74px] relative w-[6.912px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[26.94px] mt-0 not-italic relative text-[12px] text-gray-400 text-right translate-x-[-100%] w-[26.938px]">Perf.</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[23.13%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[4px] ml-[45.9px] mt-[7.74px] relative w-[6.912px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[45.9px] mt-0 not-italic relative text-[12px] text-gray-400 text-right translate-x-[-100%] w-[45.895px]">Engage.</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[232px] ml-[52.81px] mt-[20px] relative w-[200.46px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group11 />
    </div>
  );
}

function RechartsZindex500R() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="recharts-zindex-500-:r8:">
      <Group12 />
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] h-[191.4px] ml-0 mt-0 relative w-[157.361px]" data-name="Group">
      <div className="absolute inset-[-0.65%_-0.65%_-0.6%_-0.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 194">
          <g id="Group">
            <path d={svgPaths.p3bee7b00} fill="var(--fill-0, #EAB308)" fillOpacity="0.3" id="recharts-radar-:r2:" stroke="var(--stroke-0, #EAB308)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] h-[147.32px] ml-0 mt-0 relative w-[128.294px]" data-name="Group">
      <div className="absolute inset-[-0.8%_-0.79%_-0.78%_-0.8%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 150">
          <g id="Group">
            <path d={svgPaths.p3fc3d100} id="recharts-radar-:r3:" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[8.92%] mt-[15.15%] place-items-start relative" data-name="Group">
      <Group15 />
    </div>
  );
}

function RechartsZindex100R1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[26.42%] mt-[11.03%] place-items-start relative" data-name="recharts-zindex-100-:r4:">
      <Group14 />
      <Group16 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <RechartsZindex100R />
      <RechartsZindex500R />
      <RechartsZindex100R1 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[306.075px]">
      <Frame49 />
      <Group2 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-cyan-400 rounded-[8px] shrink-0 size-[16px]" />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">Test</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-red-500 rounded-[8px] shrink-0 size-[16px]" />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">Test</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full">
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] h-[248.317px] ml-0 mt-0 relative w-[408.138px]" data-name="Group">
      <div className="absolute bottom-[-0.2%] left-0 right-0 top-[-0.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 250">
          <g id="Group">
            <path d="M0 248.817H408.138" id="Vector" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M0 181.094H408.138" id="Vector_2" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M0 113.372H408.138" id="Vector_3" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M0 45.6486H408.138" id="Vector_4" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M0 0.5H408.138" id="Vector_5" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] h-[248.317px] ml-0 mt-0 relative w-[408.138px]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.12%] right-[-0.12%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 249">
          <g id="Group">
            <path d="M0.5 0V248.317" id="Vector" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M82.1277 0V248.317" id="Vector_2" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M163.755 0V248.317" id="Vector_3" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M245.383 0V248.317" id="Vector_4" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M327.011 0V248.317" id="Vector_5" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
            <path d="M408.638 0V248.317" id="Vector_6" stroke="var(--stroke-0, #1E3A5F)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group17 />
      <Group18 />
    </div>
  );
}

function RechartsZindex100Re() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.63%] mt-[0.25%] place-items-start relative" data-name="recharts-zindex--100-:re:">
      <Group19 />
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] h-[90.298px] ml-0 mt-0 relative w-[408.138px]" data-name="Group">
      <div className="absolute inset-[-1.08%_-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 93">
          <g id="Group">
            <path d={svgPaths.p25c24800} id="recharts-line-:rg:" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="[grid-area:1_/_1] h-[81.268px] ml-0 mt-[62.5%] relative w-[408.138px]" data-name="Group">
      <div className="absolute inset-[-1.23%_-0.02%_-1.2%_-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 84">
          <g id="Group">
            <path d={svgPaths.p39cb2ee0} id="recharts-line-:rh:" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5 5 5 5 5 5 5" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex400Rl() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.63%] mt-[6.65%] place-items-start relative" data-name="recharts-zindex-400-:rl:">
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group22() {
  return (
    <div className="[grid-area:1_/_1] h-[5.73px] ml-0 mt-0 relative w-0" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 5.7304V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="[grid-area:1_/_1] h-[5.73px] ml-[20%] mt-0 relative w-0" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 5.7304V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="[grid-area:1_/_1] h-[5.73px] ml-[40%] mt-0 relative w-0" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 5.7304V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="[grid-area:1_/_1] h-[5.73px] ml-[60%] mt-0 relative w-0" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 5.7304V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="[grid-area:1_/_1] h-[5.73px] ml-[80%] mt-0 relative w-0" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 5.7304V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="[grid-area:1_/_1] h-[5.73px] ml-full mt-0 relative w-0" data-name="Group">
      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 5.7304V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group28 />
    </div>
  );
}

function Group30() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.26%] mt-[97.74%] place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-0 relative w-[408.138px]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409 1">
            <path d="M0 0.5H408.138" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </svg>
        </div>
      </div>
      <Group29 />
    </div>
  );
}

function Group31() {
  return (
    <div className="[grid-area:1_/_1] h-0 ml-0 mt-full relative w-[5.21px]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H5.21028" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="[grid-area:1_/_1] h-0 ml-0 mt-[72.73%] relative w-[5.21px]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H5.21028" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="[grid-area:1_/_1] h-0 ml-0 mt-[45.45%] relative w-[5.21px]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H5.21028" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="[grid-area:1_/_1] h-0 ml-0 mt-[18.18%] relative w-[5.21px]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H5.21028" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="[grid-area:1_/_1] h-0 ml-0 mt-0 relative w-[5.21px]" data-name="Group">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H5.21028" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
    </div>
  );
}

function Group37() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group36 />
    </div>
  );
}

function Group38() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <div className="[grid-area:1_/_1] h-[248.317px] ml-[5.21px] mt-0 relative w-0" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 249">
            <path d="M0.5 0V248.317" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </svg>
        </div>
      </div>
      <Group37 />
    </div>
  );
}

function RechartsZindex500Rm() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.42%] mt-[0.25%] place-items-start relative" data-name="recharts-zindex-500-:rm:">
      <Group30 />
      <Group38 />
    </div>
  );
}

function Group39() {
  return (
    <div className="[grid-area:1_/_1] h-[97.938px] ml-0 mt-0 relative w-[415.085px]" data-name="Group">
      <div className="absolute inset-[-1.02%_-0.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 100">
          <g id="Group">
            <path d={svgPaths.p15eb600} fill="var(--fill-0, #22D3EE)" id="Vector" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
            <path d={svgPaths.p11a0d200} fill="var(--fill-0, #22D3EE)" id="Vector_2" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
            <path d={svgPaths.p3cdce220} fill="var(--fill-0, #22D3EE)" id="Vector_3" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
            <path d={svgPaths.p170e8980} fill="var(--fill-0, #22D3EE)" id="Vector_4" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
            <path d={svgPaths.pfc65740} fill="var(--fill-0, #22D3EE)" id="Vector_5" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
            <path d={svgPaths.p36b27500} fill="var(--fill-0, #22D3EE)" id="Vector_6" stroke="var(--stroke-0, #22D3EE)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="[grid-area:1_/_1] h-[88.908px] ml-0 mt-[60.37%] relative w-[415.085px]" data-name="Group">
      <div className="absolute inset-[-1.12%_-0.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 91">
          <g id="Group">
            <path d={svgPaths.p2c5bb780} fill="var(--fill-0, #EF4444)" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5" strokeWidth="2" />
            <path d={svgPaths.pec33a80} fill="var(--fill-0, #EF4444)" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5" strokeWidth="2" />
            <path d={svgPaths.p10b28e00} fill="var(--fill-0, #EF4444)" id="Vector_3" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5" strokeWidth="2" />
            <path d={svgPaths.p21a4ce00} fill="var(--fill-0, #EF4444)" id="Vector_4" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5" strokeWidth="2" />
            <path d={svgPaths.p11361070} fill="var(--fill-0, #EF4444)" id="Vector_5" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5" strokeWidth="2" />
            <path d={svgPaths.p36b27500} fill="var(--fill-0, #EF4444)" id="Vector_6" stroke="var(--stroke-0, #EF4444)" strokeDasharray="5 5" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex600Rn() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.82%] mt-[5.3%] place-items-start relative" data-name="recharts-zindex-600-:rn:">
      <Group39 />
      <Group40 />
    </div>
  );
}

function Group41() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[7.38px] mt-0 not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[14.762px]">M1</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[19.42%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[7.82px] mt-0 not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[15.631px]">M2</p>
    </div>
  );
}

function Group43() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[38.84%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[8.25px] mt-0 not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[16.499px]">M3</p>
    </div>
  );
}

function Group44() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[58.36%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[8.25px] mt-0 not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[16.499px]">M4</p>
    </div>
  );
}

function Group45() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[77.99%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[7.82px] mt-0 not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[15.631px]">M5</p>
    </div>
  );
}

function Group46() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[96.05%] mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[8.25px] mt-0 not-italic relative text-[12px] text-center text-gray-400 translate-x-[-50%] w-[16.499px]">M6</p>
    </div>
  );
}

function Group47() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.92%] mt-[89.84%] place-items-start relative" data-name="Group">
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[89.4%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[13.03px] mt-0 not-italic relative text-[12px] text-gray-400 text-right translate-x-[-100%] w-[13.026px]">35</p>
    </div>
  );
}

function Group49() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[64.34%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[13.03px] mt-0 not-italic relative text-[12px] text-gray-400 text-right translate-x-[-100%] w-[13.026px]">50</p>
    </div>
  );
}

function Group50() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[39.29%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[13.03px] mt-0 not-italic relative text-[12px] text-gray-400 text-right translate-x-[-100%] w-[13.026px]">65</p>
    </div>
  );
}

function Group51() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[14.23%] place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[13.03px] mt-0 not-italic relative text-[12px] text-gray-400 text-right translate-x-[-100%] w-[13.026px]">80</p>
    </div>
  );
}

function Group52() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal h-[28.652px] leading-[normal] ml-[13.03px] mt-0 not-italic relative text-[12px] text-gray-400 text-right translate-x-[-100%] w-[13.026px]">90</p>
    </div>
  );
}

function Group53() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group48 />
      <Group49 />
      <Group50 />
      <Group51 />
      <Group52 />
    </div>
  );
}

function RechartsZindex2000Rr() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="recharts-zindex-2000-:rr:">
      <Group47 />
      <Group53 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <RechartsZindex100Re />
      <RechartsZindex400Rl />
      <RechartsZindex500Rm />
      <RechartsZindex600Rn />
      <RechartsZindex2000Rr />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[431.585px]">
      <Frame60 />
      <Group3 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function CardTestimoni6() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative shrink-0 w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[32px] pt-[24px] px-[32px] relative w-full">
          <Frame15 />
          <Frame18 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 807 1">
                <path d="M0 0.5H807" id="Vector 2" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>
          <Frame29 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 807 1">
                <path d="M0 0.5H807" id="Vector 2" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[11.789px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p2ef97980} fill="var(--fill-0, #00C2B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center p-[8.105px] relative rounded-[7.368px] size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-white inset-0 pointer-events-none rounded-[7.368px]" />
      <Frame2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">fastwork.com</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #6D6D6D)" id="Ellipse 78" r="2" />
        </svg>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a6a6b] text-[14px] text-nowrap whitespace-pre">5 min ago</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Button2 />
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Cross1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="cross">
          <path d={svgPaths.p8018100} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame32 />
      <Cross1 />
    </div>
  );
}

function CardTestimoni7() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative shrink-0 w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative w-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[11.789px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p2ef97980} fill="var(--fill-0, #00C2B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center p-[8.105px] relative rounded-[7.368px] size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-white inset-0 pointer-events-none rounded-[7.368px]" />
      <Frame3 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">tokopedia.com</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #6D6D6D)" id="Ellipse 78" r="2" />
        </svg>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a6a6b] text-[14px] text-nowrap whitespace-pre">23 hours ago</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Button3 />
        </div>
      </div>
      <Frame61 />
    </div>
  );
}

function Cross2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="cross">
          <path d={svgPaths.p8018100} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame62 />
      <Cross2 />
    </div>
  );
}

function CardTestimoni8() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative w-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni />
      <CardTestimoni1 />
      <CardTestimoni6 />
      <CardTestimoni7 />
      <CardTestimoni8 />
    </div>
  );
}