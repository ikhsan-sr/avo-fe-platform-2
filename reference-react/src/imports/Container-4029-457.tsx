import svgPaths from "./svg-v5gyqubm8s";

function Icon() {
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

export default function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Container">
      <Icon />
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f8b400] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">GENERATIVE</p>
    </div>
  );
}