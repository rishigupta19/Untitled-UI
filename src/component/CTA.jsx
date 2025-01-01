const CTA = () => {
  return (
    <div className="w-full h-[374px] bg-gray-50">
      <div className="w-[1280px] h-[182px] mx-auto pt-[96px]">
        <h1 className="text-[40px] text-center">Start your free trial</h1>
        <p className="text-center text-gray-600 font-normal mt-[15px] text-[22px]">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="button mt-[40px] mx-auto w-[269px] h-[48px] space-x-[12px]">
          <button className="px-[20px] py-[12px] border-[1px] rounded-[8px] text-[16px] cursor-default">Learn more</button>
          <button className="px-[20px] py-[12px] border-[1px] rounded-[8px] bg-[#7F56D9] text-white text-[16px] hover:bg-[#663fbc] ease-in-out duration-300 cursor-default">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
