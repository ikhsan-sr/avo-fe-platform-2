import Logo from '../imports/Logo';

export function DashboardHeader({ onReset }: { onReset: () => void }) {
  return (
    <header className="relative z-20 px-[50px] py-[20px] backdrop-blur-[6px] backdrop-filter bg-[rgba(12,25,44,0.25)] border-b border-[rgba(252,252,252,0.1)] shadow-[0px_3px_45px_0px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1920px] mx-auto w-full flex justify-between items-center h-[44px]">
        {/* Logo */}
        <div className="flex items-center cursor-pointer w-[70px] h-[21.46px]" onClick={onReset}>
          <Logo />
        </div>
      </div>
    </header>
  );
}