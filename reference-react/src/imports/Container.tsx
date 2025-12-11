import svgPaths from "./svg-6urjj3gtoe";

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#919eab] text-[14px] text-center">
        <span>{`See how your brand appears to `}</span>
        <span className="font-['Manrope:Medium',sans-serif] font-medium text-[#c6f558]">search engines</span>
        <span>{` and `}</span>
        <span className="font-['Manrope:Medium',sans-serif] font-medium text-[#c6f558]">AI Platform</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[30px] text-center text-nowrap whitespace-pre">Check Your Brand Authority</p>
      <Paragraph />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(252,252,252,0.05)] h-[57.6px] left-0 rounded-[10px] top-0 w-[446.4px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[57.6px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-[446.4px]">
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#919eab] text-[16px] text-nowrap whitespace-pre">yourcompany.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4001_78)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17212180} id="Vector_2" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 10H18.3333" id="Vector_3" stroke="var(--stroke-0, #00C2B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4001_78">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.6px] items-center left-0 pl-[16px] pr-0 py-0 top-0 w-[36px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[57.6px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[100.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[100.188px]">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[normal] left-[50.5px] not-italic text-[#0c192d] text-[16px] text-center text-nowrap top-[0.6px] translate-x-[-50%] whitespace-pre">Start Analysis</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16626 10H15.8329" id="Vector" stroke="var(--stroke-0, #0C192C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e217c80} id="Vector_2" stroke="var(--stroke-0, #0C192C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00c2b8] h-[56px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,194,184,0.3),0px_4px_6px_-4px_rgba(0,194,184,0.3)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center pl-0 pr-[0.012px] py-0 relative w-full">
          <Text />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
          <Frame />
          <Container1 />
          <Button />
        </div>
      </div>
    </div>
  );
}