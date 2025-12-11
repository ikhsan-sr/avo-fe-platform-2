import svgPaths from "./svg-p4qnrntbbg";

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

export default function Logo() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="Logo">
      <Group2 />
      <div className="h-[16px] relative shrink-0 w-[43px]" data-name="<Compound Path>">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 16">
          <path clipRule="evenodd" d={svgPaths.p2be8db70} fill="var(--fill-0, white)" fillRule="evenodd" id="<Compound Path>" />
        </svg>
      </div>
    </div>
  );
}