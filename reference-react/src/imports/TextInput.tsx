export default function TextInput() {
  return (
    <div className="bg-[rgba(0,0,0,0.16)] relative rounded-[10px] size-full" data-name="Text Input">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative size-full">
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#919eab] text-[16px] text-nowrap whitespace-pre">yourcompany.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}