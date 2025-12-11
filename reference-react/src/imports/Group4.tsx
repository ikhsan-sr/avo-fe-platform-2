import imgPattern from "figma:asset/e777a57b939162b876418f1793283d92d18bafa0.png";

function App() {
  return <div className="absolute bg-gradient-to-b from-[rgba(12,25,44,0)] h-[775px] left-0 to-[#0c192c] top-0 w-[1440px]" data-name="App" />;
}

function Pattern() {
  return (
    <div className="absolute h-[777px] left-0 opacity-10 top-0 w-[1440px]" data-name="Pattern">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgPattern} />
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1440 777\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.8999999761581421\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.4087e-15 38.85 -72 2.3789e-15 720 388.5)\\\'><stop stop-color=\\\'rgba(13,31,49,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,31,49,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <App />
      <Pattern />
    </div>
  );
}