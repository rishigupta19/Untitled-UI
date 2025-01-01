import Boltshift from "../assets/Logo/Boltshift.svg";
import Lightbox from "../assets/Logo/Lightbox.svg";
import FeatherDev from "../assets/Logo/Featherdev.svg";
import Spherule from "../assets/Logo/Spherule.svg";
import Globalbank from "../assets/Logo/Globalbank.svg";
import Nietzsche from "../assets/Logo/Nietzsche.svg";

const SocialProof = () => {
  return (
    <>
      <div className="flex w-full h-[296px]">
        <div className="container flex flex-col mx-auto w-[1280px] h-[104px] justify-center text-gray-600 mt-[96px]">
          <p className="text-center">Join 4,000+ companies already growing</p>
          <div className="logos flex w-[1216px] h-[48px] space-x-[42px] mt-[34px] ">
            <img src={Boltshift} alt="BoltShift" />
            <img src={Lightbox} alt="LightBox" />
            <img src={FeatherDev} alt="FeatherDev" />
            <img src={Spherule} alt="Spherule" />
            <img src={Globalbank} alt="Global Bank" />
            <img src={Nietzsche} alt="Nietzsche" />
          </div>
        </div>
      </div>
      <hr className="w-[1300px] ml-[108px] mt-4" />
    </>
  );
};

export default SocialProof;
