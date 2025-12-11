import svgPaths from "./svg-c7kjvwyhed";
import imgImage from "figma:asset/fa04912264ef8a7178cb6901fd42f5f37418f7d9.png";

function Container() {
  return <div className="absolute blur-3xl filter h-[387.6px] left-[759.6px] top-[390.8px] w-[759.6px]" data-name="Container" />;
}

function Image() {
  return (
    <div className="blur-md filter h-[387.585px] opacity-[0.025] relative w-[641.798px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(0,194,184,0.05)] blur-[100px] filter h-[320px] left-0 rounded-[2.68435e+07px] top-0 w-[1399.2px]" data-name="Container" />;
}

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

function Container2() {
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

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex items-center justify-center p-[0.8px] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon1 />
    </div>
  );
}

function Container4() {
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
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
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

function Container6() {
  return (
    <div className="content-stretch flex gap-[24px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <Container5 />
      <Frame3 />
      <Container5 />
      <Frame2 />
    </div>
  );
}

function BrandContext() {
  return (
    <div className="bg-[rgba(22,36,62,0.7)] box-border content-stretch flex flex-col items-start p-[16px] relative rounded-[14px] shrink-0" data-name="BrandContext">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)]" />
      <Container6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[661.35px] top-1/2 translate-y-[-50%]">
      <Container2 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#919eab] text-[16px] text-nowrap whitespace-pre">{`Your brand's authority score for search engines and AI.`}</p>
      <BrandContext />
    </div>
  );
}

function Container7() {
  return <div className="absolute border-[0.8px] border-[rgba(207,255,4,0.2)] border-solid left-0 rounded-[2.68435e+07px] size-[256px] top-0" data-name="Container" />;
}

function Container8() {
  return <div className="border-[#00c2b8] border-[0.8px_0px_0px] border-solid rounded-[2.68435e+07px] size-[290.609px]" data-name="Container" />;
}

function Container9() {
  return <div className="absolute border-[0.8px] border-[rgba(0,194,184,0.1)] border-solid left-[-16px] opacity-[0.74] rounded-[2.68435e+07px] size-[288px] top-[-16px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[15.988px] left-[40.39px] top-[34.41px] w-[141.613px]" data-name="Text">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#00c2b8] text-[12px] text-nowrap top-[-0.8px] tracking-[1.2px] whitespace-pre">BRAND TRUST SCORE</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[96px] left-[55.46px] top-[58.4px] w-[111.463px]" data-name="Heading 1">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[96px] left-0 not-italic text-[#fcfcfc] text-[96px] text-nowrap top-[5px] tracking-[-4.8px] whitespace-pre">89</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[34.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.988px] relative w-[34.813px]">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#00c2b8] text-[12px] text-nowrap top-[-0.8px] whitespace-pre">+4.2%</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2054_175)" id="Icon" opacity="0.6">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #919EAB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #919EAB)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #919EAB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2054_175">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(0,194,184,0.1)] box-border content-stretch flex gap-[8px] h-[25.587px] items-center left-[60.99px] pl-[12.8px] pr-[0.8px] py-[0.8px] rounded-[2.68435e+07px] top-[162.4px] w-[100.412px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,194,184,0.3)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Icon3 />
      <Text1 />
      <Icon4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(22,36,62,0.8)] border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid left-[16px] rounded-[2.68435e+07px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] size-[224px] top-[16px]" data-name="Container">
      <Text />
      <Heading />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute left-[341.35px] size-[256px] top-[32px]" data-name="Container">
      <Container7 />
      <div className="absolute flex items-center justify-center left-[-17.3px] size-[329.898px] top-[-59.7px]" style={{ "--transform-inner-width": "290.59375", "--transform-inner-height": "290.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-[351.611deg]">
          <Container8 />
        </div>
      </div>
      <Container9 />
      <Container11 />
    </div>
  );
}

function HeroScore() {
  return (
    <div className="absolute h-[320px] left-[60px] top-[85.2px] w-[1399.2px]" data-name="HeroScore">
      <Container1 />
      <Frame />
      <Container12 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2054_164)" id="Icon">
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
          <clipPath id="clip0_2054_164">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon5 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#00c2b8] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end not-italic relative shrink-0">
      <p className="leading-[40px] relative shrink-0 text-[36px] text-white">100</p>
      <p className="leading-[32px] relative shrink-0 text-[#919eab] text-[24px]">/100</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[8px] px-0 relative shrink-0 text-nowrap whitespace-pre">
      <Frame10 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">Influence Origin</p>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#a7a7a7] text-[14px]">Schema</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c6f558] text-[16px]">100%</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#a7a7a7] text-[14px]">Tech</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] text-white">Pass</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(22,36,62,0.7)] relative rounded-[14px] shrink-0 w-[324px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip p-[20px] relative rounded-[inherit] w-[324px]">
        <Container13 />
        <Frame13 />
        <Container14 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
              <path d="M0 0.5H284" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, #CFFF04)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon6 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#cfff04] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end not-italic relative shrink-0">
      <p className="h-[26px] leading-[40px] relative shrink-0 text-[36px] text-white w-[43px]">78</p>
      <p className="leading-[32px] relative shrink-0 text-[#919eab] text-[24px] text-nowrap whitespace-pre">/100</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[8px] px-0 relative shrink-0">
      <Frame14 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px] text-nowrap whitespace-pre">Answer Source</p>
    </div>
  );
}

function Container17() {
  return <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[236px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#a7a7a7] text-[14px]">Snippet</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c6f558] text-[16px]">142</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#a7a7a7] text-[14px]">Answer</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] text-white">High</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(22,36,62,0.7)] relative rounded-[14px] shrink-0 w-[326px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip p-[20px] relative rounded-[inherit] w-[326px]">
        <Container16 />
        <Frame15 />
        <Container18 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286 1">
              <path d="M0 0.5H286" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2054_214)" id="Icon">
          <path d={svgPaths.p30f14c00} id="Vector" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2054_214">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon7 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f8b400] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end not-italic relative shrink-0">
      <p className="h-[26px] leading-[40px] relative shrink-0 text-[36px] text-white w-[43px]">78</p>
      <p className="leading-[32px] relative shrink-0 text-[#919eab] text-[24px] text-nowrap whitespace-pre">/100</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[8px] px-0 relative shrink-0">
      <Frame18 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px] text-nowrap whitespace-pre">Influence Origin</p>
    </div>
  );
}

function Container21() {
  return <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[197px]" data-name="Container" />;
}

function Container22() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#a7a7a7] text-[14px]">AI Cite</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c6f558] text-[16px]">Strong</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#a7a7a7] text-[14px]">Links</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] text-white">DR 72</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(22,36,62,0.7)] relative rounded-[14px] shrink-0 w-[324px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip p-[20px] relative rounded-[inherit] w-[324px]">
        <Container20 />
        <Frame5 />
        <Container22 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
              <path d="M0 0.5H284" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[calc(50%+0.4px)] top-[442.2px] translate-x-[-50%]">
      <Container15 />
      <Container19 />
      <Container23 />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[14.159px] ml-0 mt-0 relative w-[18.998px]" data-name="<Group>">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
        <g id="<Group>">
          <path d={svgPaths.p34961f00} fill="url(#paint0_linear_2054_192)" id="<Path>" />
          <path d={svgPaths.p3750400} fill="url(#paint1_linear_2054_192)" id="<Path>_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2054_192" x1="-1.72537" x2="4.3962" y1="3.95402" y2="-0.11558">
            <stop stopColor="#F8B400" />
            <stop offset="1" stopColor="#D5650F" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2054_192" x1="11.5819" x2="18.6355" y1="-0.882566" y2="3.32927">
            <stop stopColor="#F8B400" />
            <stop offset="1" stopColor="#D5650F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[14.159px] ml-[8.95%] mt-[32.58%] relative w-[18.998px]" data-name="<Group>">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
        <g id="<Group>">
          <path d={svgPaths.p1e2b5b80} fill="url(#paint0_linear_2054_188)" id="<Path>" />
          <path d={svgPaths.p2196ad80} fill="url(#paint1_linear_2054_188)" id="<Path>_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2054_188" x1="21.4856" x2="15.7712" y1="6.65907" y2="13.0489">
            <stop stopColor="#00C2B8" />
            <stop offset="1" stopColor="#02605C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2054_188" x1="7.41823" x2="0.364707" y1="15.0416" y2="10.8298">
            <stop stopColor="#00C2B8" />
            <stop offset="1" stopColor="#02605C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="<Group>">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[68.865px]">
      <Group2 />
      <div className="h-[16px] relative shrink-0 w-[43px]" data-name="<Compound Path>">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 16">
          <path clipRule="evenodd" d={svgPaths.p2be8db70} fill="var(--fill-0, white)" fillRule="evenodd" id="<Compound Path>" />
        </svg>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[83.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
            <path d="M0.666667 0.666667V2" id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
            <path d="M0.666667 0.666667V2" id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.54%_73.58%_73.58%_20.54%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p2178fec0} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[73.58%_20.54%_20.54%_73.58%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p2178fec0} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[83.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
            <path d="M0.666667 0.666667H2" id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[83.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
            <path d="M0.666667 0.666667H2" id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[73.58%_73.58%_20.54%_20.54%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p1dae0c80} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.54%_20.54%_73.58%_73.58%]" data-name="Vector">
        <div className="absolute inset-[-70.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p1dae0c80} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(252,252,252,0.05)] box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="absolute bg-[rgba(12,25,44,0.75)] box-border content-stretch flex h-[84.8px] items-center justify-between left-0 px-[60px] py-[20px] top-0 w-[1519.2px]" data-name="DashboardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(252,252,252,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_3px_45px_0px_rgba(0,0,0,0.15)]" />
      <Frame12 />
      <Button />
    </div>
  );
}

function DashboardView() {
  return (
    <div className="absolute bg-[#0c192c] h-[778.775px] left-0 top-0 w-[1519.2px]" data-name="DashboardView">
      <HeroScore />
      <Frame6 />
      <DashboardHeader />
    </div>
  );
}

export default function CreateDesignFromCodeCopy() {
  return (
    <div className="relative size-full" data-name="Create Design from Code (Copy)">
      <Container />
      <div className="absolute flex h-[540.487px] items-center justify-center left-[358.9px] top-[-156.46px] w-[720.244px]" style={{ "--transform-inner-width": "641.78125", "--transform-inner-height": "387.5625" } as React.CSSProperties}>
        <div className="flex-none rotate-[345deg]">
          <Image />
        </div>
      </div>
      <DashboardView />
    </div>
  );
}