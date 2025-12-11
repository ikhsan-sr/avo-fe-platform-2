import svgPaths from "./svg-urc26bi6kj";

function Frame() {
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

function Button() {
  return (
    <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center p-[8.105px] relative rounded-[7.368px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-white inset-0 pointer-events-none rounded-[7.368px]" />
      <Frame />
    </div>
  );
}

function Frame2() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button />
      <Frame2 />
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

function CardTestimoni() {
  return (
    <div className="basis-0 bg-[rgba(22,36,62,0.5)] content-stretch flex grow items-center justify-between min-h-px min-w-px px-[32px] py-[24px] relative shrink-0 w-[871px]" data-name="Card - Testimoni">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
      <Frame4 />
      <Cross />
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
    <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center p-[8.105px] relative rounded-[7.368px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-white inset-0 pointer-events-none rounded-[7.368px]" />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">test.com</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #6D6D6D)" id="Ellipse 78" r="2" />
        </svg>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a6a6b] text-[14px] text-nowrap whitespace-pre">5 min ago</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button1 />
      <Frame3 />
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

function CardTestimoni1() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] h-[76px] relative shrink-0 w-full" data-name="Card - Testimoni">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[76px] items-center justify-between px-[32px] py-[24px] relative w-full">
          <Frame5 />
          <Cross1 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="3">
      <CardTestimoni />
      <CardTestimoni1 />
    </div>
  );
}