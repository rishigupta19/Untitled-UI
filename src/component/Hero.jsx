import { IoIosArrowDown } from "react-icons/io";
import { PiPlayCircleLight } from "react-icons/pi";
import Tablet from "../assets/Tablet.svg";
import Logo from "../assets/Logo.svg";
import User from "../assets/User.svg";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <>
      <header className=" h-[80px] flex items-center ml-[35px]">
        <div className="container flex w-[1280px] h-[40px] justify-between mx-auto">
          <div className="content flex space-x-10">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <nav className="flex m-[5px]">
              <ul className="flex space-x-8">
                <li className="text-gray-500 hover:text-gray-700 text-[17px]">
                  <a href="#home">Home</a>
                </li>
                <li className="text-gray-500 hover:text-gray-700 flex text-[17px]">
                  <a href="#products">Products</a>
                  <IoIosArrowDown className="m-[4px]" />
                </li>
                <li className="text-gray-500 hover:text-gray-700 flex text-[17px]">
                  <a href="#resources">Resources</a>
                  <IoIosArrowDown className="m-[4px]" />
                </li>
                <li className="text-gray-500 hover:text-gray-700 text-[17px]">
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="user">
            <img src={User} alt="User" />
          </div>
        </div>
      </header>

      <hr />

      <div className="">
        <div className="container flex w-[1280px] h-[312px] flex-col items-center justify-center mx-auto">
          <div className="content flex w-[1216px] h-[312px] flex-col items-center justify-center">
            {/* Badge and Text Container */}
            <div className="flex flex-col items-center justify-center h-[120px] mt-[180px]">
              {/* Badge Group */}
              <div className="badgegroup flex items-center justify-center h-[32px] text-[#6941C6] border-[1px] border-[#D6BBFB] rounded-[50px] w-[380px] bg-[#F8F4F8]">
                <div className="badge flex h-[24px] w-[110px] text-[#6941C6] border-[1px] border-[#D6BBFB] rounded-[50px] text-[15px] items-center justify-center bg-white ml-[4px]">
                  New feature
                </div>
                <div className="content flex text-[15px] items-center mx-auto ">
                  Check out the team dashboard
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="size-[17px] ml-[5px]"
                  />
                </div>
              </div>

              {/* Heading */}
              <p className="heading text-center w-[1200px] h-[72px] text-[65px] mt-[5px]">
                Beautiful analytics to grow smarter
              </p>
            </div>
            <p className="supporttext flex w-[800px] h-[60px] text-gray-600 mt-[40px] items-center text-center text-[22px] font-normal">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="button flex w-[300px] h-[60px] space-x-3">
            <button className="demo flex w-[180px] h-[65px] border-[1px] border-[##6b7280] rounded-[8px] justify-center items-center text-slate-700 text-[18px] mt-[90px]">
              <PiPlayCircleLight className="size-[30px] text-gray-700 mr-2" />
              Demo
            </button>
            <button className="signup flex w-[150px] h-[65px] bg-[#7F56D9] justify-center items-center rounded-[8px] text-white text-[18px] hover:bg-[#663fbc] ease-in-out duration-300 mt-[90px]">
              Sign Up
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="container2 flex w-full h-[560px] mt-[200px] items-center justify-center mx-auto mr-[35px]">
          <img src={Tablet} alt="Tablet" className="w-[1380px] h-auto" />
        </div>
      </div>
      <hr className="flex mt-[27px] ml-[108px] w-[1304px]"/>
    </>
  );
};

export default Hero;
