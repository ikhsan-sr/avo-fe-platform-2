import svgPaths from "./svg-6r1wsmjfo9";

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
    <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center p-[8.105px] relative rounded-[7.368px] size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-white inset-0 pointer-events-none rounded-[7.368px]" />
      <Frame />
    </div>
  );
}

function Frame1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Button />
        </div>
      </div>
      <Frame1 />
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

export default function Component() {
  return (
    <div className="bg-[rgba(22,36,62,0.5)] relative size-full" data-name="1">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative size-full">
          <Frame2 />
          <Cross />
        </div>
      </div>
    </div>
  );
}