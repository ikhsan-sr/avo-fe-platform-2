function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
      <p className="[text-shadow:rgba(240,241,244,0.15)_0px_4px_60px,rgba(4,11,23,0.4)_0px_10px_25px] font-['Manrope:Medium',sans-serif] font-medium relative shrink-0 text-[#c6f558] text-[18px]">Sribu.com</p>
      <p className="[text-shadow:rgba(240,241,244,0.15)_0px_4px_60px,rgba(4,11,23,0.4)_0px_10px_25px] font-['Sansation:Regular',sans-serif] not-italic relative shrink-0 text-[#cfd1d4] text-[10px]">AUTHORITY</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
      <p className="[text-shadow:rgba(240,241,244,0.15)_0px_4px_60px,rgba(4,11,23,0.4)_0px_10px_25px] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cfd1d4] text-[14px] text-nowrap whitespace-pre">{`the user want to check `}</p>
      <Frame2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" fill="var(--fill-0, #D9D9D9)" id="Ellipse 79" r="20" />
            </svg>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}