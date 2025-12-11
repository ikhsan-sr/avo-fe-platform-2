import svgPaths from "./svg-2p8569paw5";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="Container">
      <Icon />
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#fcfcfc] text-[30px] text-nowrap whitespace-pre">Trusted Source</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pfb16970} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
          <path d={svgPaths.p13754d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
          <path d={svgPaths.p281e4940} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
          <path d="M10 6H14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
          <path d="M10 10H14" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
          <path d="M10 14H14" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
          <path d="M10 18H14" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex items-center justify-center p-[0.8px] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 text-nowrap whitespace-pre" data-name="Container">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#a3a9b7] text-[12px]">Your Brand</p>
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[14px] text-white">sribu.com</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-center relative">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[40px] relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] w-px" />
    </div>
  );
}

function Icon2() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon2 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap whitespace-pre">Verified</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start justify-center relative">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#a3a9b7] text-[12px] text-nowrap whitespace-pre">AI Visibility</p>
        <Frame4 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] items-start justify-center relative text-nowrap whitespace-pre">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#a3a9b7] text-[12px]">Updated</p>
        <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#00c2b8] text-[14px]">Just Now</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <Container3 />
      <Frame3 />
      <Container3 />
      <Frame2 />
    </div>
  );
}

function BrandContext() {
  return (
    <div className="bg-[rgba(22,36,62,0.7)] box-border content-stretch flex flex-col items-start p-[16px] relative rounded-[14px] shrink-0" data-name="BrandContext">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)]" />
      <Container4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
      <Container />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#919eab] text-[16px] text-nowrap whitespace-pre">{`Your brand's authority score for search engines and AI.`}</p>
      <BrandContext />
    </div>
  );
}