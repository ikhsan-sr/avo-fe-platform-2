import svgPaths from "./svg-09wztqngpw";

function Group() {
  return (
    <div className="absolute bottom-[32.57%] left-0 right-[8.95%] top-0" data-name="<Group>">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 327">
        <g id="<Group>">
          <path d={svgPaths.p163caf00} fill="url(#paint0_linear_2007_39189)" id="<Path>" />
          <path d={svgPaths.p13fe1700} fill="url(#paint1_linear_2007_39189)" id="<Path>_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2007_39189" x1="-39.7551" x2="101.235" y1="91.0707" y2="-2.63767">
            <stop stopColor="#F8B400" />
            <stop offset="1" stopColor="#D5650F" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2007_39189" x1="266.691" x2="429.135" y1="-20.3289" y2="76.6593">
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
    <div className="absolute bottom-0 left-[8.94%] right-0 top-[32.58%]" data-name="<Group>">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 438 327">
        <g id="<Group>">
          <path d={svgPaths.p1cfca000} fill="url(#paint0_linear_2007_39193)" id="<Path>" />
          <path d={svgPaths.p6605200} fill="url(#paint1_linear_2007_39193)" id="<Path>_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2007_39193" x1="494.798" x2="363.184" y1="153.363" y2="300.51">
            <stop stopColor="#00C2B8" />
            <stop offset="1" stopColor="#02605C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2007_39193" x1="170.855" x2="8.41101" y1="346.424" y2="249.436">
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
    <div className="absolute contents inset-0" data-name="<Group>">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full" data-name="<Group>">
      <Group2 />
    </div>
  );
}