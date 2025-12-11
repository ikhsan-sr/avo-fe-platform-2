import svgPaths from "./svg-kokejkb72r";
import imgAvonetiqTheDigitalAuthorityFirm from "figma:asset/b6dfddf4b480f3190bac55ef8eeb0086b1e30e78.png";

function AvonetiqTheDigitalAuthorityFirm() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[151.23px]" data-name="AVONETIQ - The Digital Authority Firm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.01%]" src={imgAvonetiqTheDigitalAuthorityFirm} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-0 top-[30px] w-[151.23px]" data-name="Link">
      <AvonetiqTheDigitalAuthorityFirm />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[151.23px]" data-name="Container">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[21px] left-[13px] top-1/2 translate-y-[-50%] w-[87.7px]" data-name="Link">
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-0 text-[#fcfcfc] text-[15px] top-[10.5px] tracking-[-0.27px] translate-y-[-50%] w-[88.035px]">
        <p className="leading-[21px]">The Protocol</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[113.7px]" data-name="Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[21px] left-[13px] top-1/2 translate-y-[-50%] w-[66.7px]" data-name="Link">
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-0 text-[#fcfcfc] text-[15px] top-[10.5px] tracking-[-0.27px] translate-y-[-50%] w-[67.003px]">
        <p className="leading-[21px]">The Proof</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute bottom-0 left-[113.71px] top-0 w-[92.7px]" data-name="Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[21px] left-[13px] top-1/2 translate-y-[-50%] w-[81.22px]" data-name="Link">
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-0 text-[#fcfcfc] text-[15px] top-[10.5px] tracking-[-0.27px] translate-y-[-50%] w-[81.545px]">
        <p className="leading-[21px]">The System</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute bottom-0 left-[206.41px] top-0 w-[107.22px]" data-name="Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[21px] left-[13px] top-1/2 translate-y-[-50%] w-[110.14px]" data-name="Link">
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-0 text-[#fcfcfc] text-[15px] top-[10.5px] tracking-[-0.27px] translate-y-[-50%] w-[110.511px]">
        <p className="leading-[21px]">The Intelligence</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute bottom-0 left-[313.63px] top-0 w-[136.14px]" data-name="Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[21px] left-[13px] top-1/2 translate-y-[-50%] w-[58.81px]" data-name="Link">
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-0 text-[#fcfcfc] text-[15px] top-[10.5px] tracking-[-0.27px] translate-y-[-50%] w-[59.191px]">
        <p className="leading-[21px]">The Firm</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute bottom-0 left-[449.77px] top-0 w-[84.81px]" data-name="Item">
      <Link5 />
    </div>
  );
}

function NavMainMenuList() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[534.58px]" data-name="Nav - Main Menu → List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-0 left-[176.23px] top-0 w-[534.58px]" data-name="Container">
      <NavMainMenuList />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[18px] relative w-[17.38px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3353fb30} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[22.95px] left-0 overflow-clip top-1/2 translate-y-[-50%] w-[36px]" data-name="Link">
      <div className="absolute flex h-[18px] items-center justify-center left-[9.31px] top-[3.95px] w-[17.38px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[18px] relative w-[14.86px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
        <g id="Icon">
          <path d={svgPaths.p3b082580} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[22.95px] left-[36px] overflow-clip top-1/2 translate-y-[-50%] w-[36px]" data-name="Link">
      <div className="absolute flex h-[18px] items-center justify-center left-[10.56px] top-[3.95px] w-[14.86px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[18px] relative w-[14.86px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
        <g id="Icon">
          <path d={svgPaths.p3c682840} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[22.95px] left-[72px] overflow-clip top-1/2 translate-y-[-50%] w-[36px]" data-name="Link">
      <div className="absolute flex h-[18px] items-center justify-center left-[10.56px] top-[3.95px] w-[14.86px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[108px]" data-name="List → Item">
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute bottom-0 left-[108px] top-0 w-[113.5px]" data-name="List → Item">
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20.8px] justify-center leading-[0] right-[12.66px] text-[#fcfcfc] text-[16px] text-right top-[41.99px] translate-y-[-50%] w-[87.835px]">
        <p className="leading-[20.8px]">Client Login</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bottom-0 left-[1118.5px] top-0 w-[221.5px]" data-name="Nav">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function BannerMainMenu() {
  return (
    <div className="absolute h-[84px] left-[50px] right-[50px] top-0" data-name="Banner - Main Menu">
      <Container />
      <Container1 />
      <Nav />
    </div>
  );
}

export default function OverlayShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(12,25,44,0.25)] relative shadow-[0px_3px_45px_0px_rgba(0,0,0,0.15)] size-full" data-name="Overlay+Shadow+OverlayBlur">
      <BannerMainMenu />
    </div>
  );
}