import svgPaths from "./svg-9xenn4o0xj";

function Icon() {
  return (
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
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">OPTIMIZE</p>
    </div>
  );
}

function Group() {
  return (
    <div className="mix-blend-luminosity relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 1" style={{ mixBlendMode: "luminosity" }}>
          <path d={svgPaths.p3561600} fill="url(#paint0_linear_4029_129)" fillOpacity="0.5" id="Vector" opacity="0.1" />
          <path d={svgPaths.p21f2da00} fill="url(#paint1_linear_4029_129)" fillOpacity="0.5" id="Union" />
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
  );
}

function CardTestimoni() {
  return (
    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
          <Container />
          <Group />
        </div>
      </div>
    </div>
  );
}

function ScoreContainer() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
      <p className="relative shrink-0 text-[36px] text-white">100</p>
      <p className="relative shrink-0 text-[#919eab] text-[24px]">/100</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
      <ScoreContainer />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">Clarity System</p>
    </div>
  );
}

function Container1() {
  return <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function DetailItem() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">CWV Score</p>
      <p className="relative shrink-0 text-[16px] text-white">62</p>
    </div>
  );
}

function DetailItem1() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Schema Score</p>
      <p className="relative shrink-0 text-[16px] text-white">47</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <DetailItem />
      <DetailItem1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <CardContent />
      <Container1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function CardTestimoni1() {
  return (
    <div className="basis-0 bg-[rgba(22,36,62,0.5)] grow min-h-px min-w-px relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] self-stretch shrink-0 w-[277px]">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni />
      <CardTestimoni1 />
    </div>
  );
}

function Icon1() {
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

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon1 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c6f558] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">MANIFEST</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="mix-blend-luminosity relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 1" style={{ mixBlendMode: "luminosity" }}>
          <path d={svgPaths.p3561600} fill="url(#paint0_linear_4029_129)" fillOpacity="0.5" id="Vector" opacity="0.1" />
          <path d={svgPaths.p21f2da00} fill="url(#paint1_linear_4029_129)" fillOpacity="0.5" id="Union" />
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
  );
}

function CardTestimoni2() {
  return (
    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
          <Container2 />
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function ScoreContainer1() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
      <p className="relative shrink-0 text-[36px] text-white">78</p>
      <p className="relative shrink-0 text-[#919eab] text-[24px]">/100</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
      <ScoreContainer1 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">Answer Source</p>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function DetailItem2() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Backlink Score</p>
      <p className="relative shrink-0 text-[16px] text-white">36</p>
    </div>
  );
}

function DetailItem3() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">News Mention Score</p>
      <p className="relative shrink-0 text-[16px] text-white">14</p>
    </div>
  );
}

function DetailItem4() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">Wikidata Score</p>
      <p className="relative shrink-0 text-[16px] text-white">57</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <DetailItem2 />
      <DetailItem3 />
      <DetailItem4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <CardContent1 />
      <Container4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function CardTestimoni3() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-[277px]">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni2 />
      <CardTestimoni3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4029_118)" id="Icon">
          <path d={svgPaths.p1e0b8cc0} id="Vector" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #F8B400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4029_118">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon2 />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f8b400] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
    </div>
  );
}

function Frame() {
  return (
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
  );
}

function CardTestimoni4() {
  return (
    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
          <Container5 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function ScoreContainer2() {
  return (
    <div className="content-stretch flex font-['Satoshi:Bold',sans-serif] items-end leading-[normal] not-italic relative shrink-0" data-name="Score Container">
      <p className="relative shrink-0 text-[36px] text-white">93</p>
      <p className="relative shrink-0 text-[#919eab] text-[24px]">/100</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Card Content">
      <ScoreContainer2 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#919eab] text-[12px]">Influence Origin</p>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[223px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function DetailItem5() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">AI Cite Score</p>
      <p className="relative shrink-0 text-[16px] text-white">80</p>
    </div>
  );
}

function DetailItem6() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 w-full" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px] w-[173px]">AI Overview Appearance</p>
      <p className="relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">85</p>
    </div>
  );
}

function DetailItem7() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 w-full" data-name="Detail Item">
      <p className="relative shrink-0 text-[#a7a7a7] text-[14px] w-[173px]">Authority Sources Score</p>
      <p className="relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">99</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <DetailItem5 />
      <DetailItem6 />
      <DetailItem7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <CardContent2 />
      <Container7 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function CardTestimoni5() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-[24px] px-[20px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-[277px]">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni4 />
      <CardTestimoni5 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative size-full" data-name="Card">
      <Frame1 />
      <Frame3 />
      <Frame8 />
    </div>
  );
}