import React from "react";

const SolarizeAmerica = () => {
  return (
    <div className="min-h-[500px] md:min-h-[809.41px] flex-col justify-start items-center gap-8 md:gap-[123.72px] inline-flex bg-[#1a1a1a] w-full py-16 md:py-24">
      <div className="flex-col justify-start items-start gap-4 md:gap-[46.54px] flex">
        <div className="self-stretch text-center text-[#fdbc0e] text-[80px] md:text-[164.42px] font-black font-['Lexend'] leading-[1] md:leading-[157.47px] tracking-[4.93px]">
          LET'S
        </div>
        <div className="self-stretch text-center text-[#fdbc0e] text-[40px] md:text-[87.82px] font-black font-['Lexend'] leading-[1] md:leading-[157.47px] tracking-[2.63px]">
          SOLARIZE
        </div>
        <div className="self-stretch text-center text-[#fdbc0e] text-[45px] md:text-[92.66px] font-black font-['Lexend'] leading-[1] md:leading-[157.47px] tracking-[2.78px]">
          AMERICA!
        </div>
      </div>
      <div className="w-full max-w-[547.07px] px-4 md:px-0 aspect-[547/352] relative">
        <div className="w-full h-[41%] left-0 bottom-0 absolute bg-[#fdbc0e] rounded-[30.43px]"></div>
        <div className="w-[47%] aspect-square left-[26.5%] top-0 absolute bg-[#fdbc0e] rounded-full"></div>
        <div className="left-[6.3%] bottom-[12%] absolute text-center text-[#1a1a1a] text-[60px] md:text-[107.69px] font-black font-['Lexend'] leading-[1.2] md:leading-[64.57px] tracking-[3.23px]">
          WattBot
        </div>
        <div className="w-[41%] aspect-square left-[29.5%] top-[4%] absolute">
          <div className="w-full h-full relative">
            <div className="w-[87%] h-[87%] left-[6.5%] top-[6.5%] absolute bg-[#1a1a1a] rounded-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets/bc-wr-yz.gif"
                  alt="Lightning Bolt"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarizeAmerica;
