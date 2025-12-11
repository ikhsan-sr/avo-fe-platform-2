import svgPaths from "./svg-26dpw0wj54";

function Group() {
  return (
    <div className="absolute inset-[10.42%_8.33%_10.41%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6.58%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 43">
          <g id="Group">
            <path d="M42.5 2.5H2.5V14.5H42.5V2.5Z" fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="5" />
            <path d={svgPaths.p1997a100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            <path d={svgPaths.p35960280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="5" />
            <path d={svgPaths.p345b6700} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="5" />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <path d="M0 0H48V48H0V0Z" fill="var(--fill-0, #CACACA)" fillOpacity="0.4" id="Vector" />
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Frame">
      <MaskGroup />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full">
      <Frame />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(140,140,140,0.4)] text-center w-[629px]">Select a competitor above to view deep-dive analysis comparison</p>
    </div>
  );
}