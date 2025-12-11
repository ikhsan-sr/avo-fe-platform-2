import svgPaths from "./svg-g21rngbe81";

function CardTestimoni() {
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4095_223)" id="Icon">
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
          <clipPath id="clip0_4095_223">
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container />
      <ScoreContainer />
    </div>
  );
}

function Container1() {
  return <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Container1 />
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem />
      <DetailItem1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <Frame16 />
      <Frame8 />
    </div>
  );
}

function Icon1() {
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

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon1 />
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container2 />
      <ScoreContainer1 />
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
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Container4 />
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem2 />
      <DetailItem3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame17 />
      <Frame10 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4095_234)" id="Icon">
          <path d={svgPaths.p1e0b8cc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4095_234">
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container5 />
      <ScoreContainer2 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Container7 />
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem4 />
      <DetailItem5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame18 />
      <Frame13 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame9 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame11 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function CardTestimoni1() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0" data-name="Card - Testimoni">
      <Frame26 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni />
      <CardTestimoni1 />
    </div>
  );
}

function CardTestimoni2() {
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

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4095_223)" id="Icon">
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
          <clipPath id="clip0_4095_223">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon3 />
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

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container8 />
      <ScoreContainer3 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#00c2b8] h-[6px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container" />;
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Container9 />
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

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem6 />
      <DetailItem7 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <Frame19 />
      <Frame14 />
    </div>
  );
}

function Icon4() {
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

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0" data-name="Container">
      <Icon4 />
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

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container10 />
      <ScoreContainer4 />
    </div>
  );
}

function Container11() {
  return <div className="bg-[#cfff04] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Container12 />
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem8 />
      <DetailItem9 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4095_234)" id="Icon">
          <path d={svgPaths.p1e0b8cc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4095_234">
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

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[237px]">
      <Container13 />
      <ScoreContainer5 />
    </div>
  );
}

function Container14() {
  return <div className="bg-[#f8b400] h-[6px] rounded-[2.68435e+07px] shrink-0 w-[187px]" data-name="Container" />;
}

function Container15() {
  return (
    <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[6px] items-start pl-0 pr-[49.7px] py-0 relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Container15 />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-[213px]">
      <DetailItem10 />
      <DetailItem11 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function CardTestimoni3() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col gap-[24px] items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0" data-name="Card - Testimoni">
      <Frame15 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame22 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
            <path d="M0 0.5H237" id="Vector 1" stroke="var(--stroke-0, white)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Frame25 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni2 />
      <CardTestimoni3 />
    </div>
  );
}

export default function Frame27() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative size-full">
      <Frame4 />
      <p className="font-['Sansation:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
        {`OMG `}
        <br aria-hidden="true" />
        Comparisson
      </p>
      <Frame />
    </div>
  );
}