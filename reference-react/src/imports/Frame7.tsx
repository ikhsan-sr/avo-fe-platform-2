import svgPaths from "./svg-uaoyunhbeu";

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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Container />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#939393] text-[14px] text-nowrap whitespace-pre">See how your score against the other brands</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cfd1d4] text-[16px] text-nowrap whitespace-pre">avonetiqxsribu.com</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a3a9b7] text-[12px] text-nowrap whitespace-pre">Your brand</p>
      <Frame3 />
    </div>
  );
}

function CardTestimoni() {
  return (
    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame4 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4078_2827)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #CFD1D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17212180} id="Vector_2" stroke="var(--stroke-0, #CFD1D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 10H18.3333" id="Vector_3" stroke="var(--stroke-0, #CFD1D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4078_2827">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Icon />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6a6a6b] text-[16px] text-nowrap whitespace-pre">type “competitor.com”</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 bg-[#0b1525] grow h-[58px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[58px] items-center p-[16px] relative w-full">
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(32,48,47,0.1)] content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[10px] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#20302f] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#20302f] text-[16px] text-center text-nowrap whitespace-pre">Add Competitor</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <TextInput />
      <Button />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10.42%_8.33%_10.41%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 53">
          <g id="Group">
            <path d="M52.5 2.5H2.5V17.5H52.5V2.5Z" fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="5" />
            <path d={svgPaths.pbe2f700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d={svgPaths.pee22296} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="5" />
            <path d={svgPaths.p2af3f040} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[10.42%_8.33%_10.41%_8.33%]" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[10.42%_8.33%_10.41%_8.33%]" data-name="Mask group">
      <Group1 />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <path d="M0 0H60V60H0V0Z" fill="var(--fill-0, #CACACA)" fillOpacity="0.4" id="Vector" />
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="Frame">
      <MaskGroup />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame1 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(202,202,202,0.4)] text-center w-[629px]">Select a competitor above to view deep-dive analysis comparison</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame6 />
    </div>
  );
}

function CardTestimoni1() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Card - Testimoni">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[32px] pt-[24px] px-[20px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      <CardTestimoni />
      <CardTestimoni1 />
    </div>
  );
}