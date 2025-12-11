import svgPaths from "./svg-1jouhti9jr";

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
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

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <Group />
      <div className="absolute inset-[-13.16%_-10%_-13.15%_-10%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d="M0 0H48V48H0V0Z" fill="var(--fill-0, #CACACA)" fillOpacity="0.4" id="Vector" />
        </svg>
      </div>
    </div>
  );
}