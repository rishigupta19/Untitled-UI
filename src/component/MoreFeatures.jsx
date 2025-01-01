import Tablet2 from "../assets/Tablet2.svg";
import Mobile from "../assets/Mobile.svg";
import Share from "../assets/Symbols/Share.svg";
import Deliver from "../assets/Symbols/Deliver.svg";
import Manage from "../assets/Symbols/Manage.svg";
import arrow from '../assets/arrow.svg';

const MoreFeatures = () => {
  return (
    <>
      <div className="h-[1300px] flex-col">
        <div className="container1 h-[168px] w-[1280px] mx-auto">
          <div className="flex flex-col items-center justify-center h-[120px] mt-[96px]">
            {/* Badge Group */}
            <div className="badgegroup flex items-center justify-center h-[32px] text-[#6941C6] border-[1px] border-[#D6BBFB] rounded-[50px] bg-[#F8F4F8] mx-auto w-[90px]">
              <div className="content flex text-[15px] items-center mx-auto ">
                Features
              </div>
            </div>

            {/* Heading */}
            <p className="heading text-center w-[1200px] h-[72px] text-[39px] mt-[5px]">
              Cutting-edge features for advanced analytics
            </p>
          </div>
          <p className="supporttext flex w-[800px] h-[60px] text-gray-600 items-center text-center text-[22px] font-normal mx-auto">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* Container 2 */}
        <div className="container2 w-[1280px] h-[876px] mx-auto">
          <div className="image w-[1280px] h-[558px] flex">
            <img
              src={Tablet2}
              alt="Tablet"
              className="w-[1200px] h-[645px] mt-[60px] ml-[110px]"
            />
            <img
              src={Mobile}
              alt="Mobile"
              className=" size-[500px] ml-[-1250px] mt-[150px]"
            />
          </div>

          <div className="features w-[1216px] h-[222px] mt-[200px]">
            <div className="cardbox grid grid-cols-3 gap-[100px] mx-auto">
              <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
                <img
                  src={Share}
                  alt="Share"
                  className="rounded-[10px] border-gray-200 border-[1px] p-3"
                />
                <h1 className="text-[21px] mt-[15px]">Share team inboxes</h1>
                <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
                <button className="flex text-[#6941C6] text-[18px] mt-[20px]">
                  Learn more <img src={arrow} alt="Arrow" className="size-[22px] mt-[3px] ml-[5px]"/>
                </button>
              </div>
              <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
                <img
                  src={Deliver}
                  alt="Deliver"
                  className="rounded-[10px] border-gray-200 border-[1px] p-3"
                />
                <h1 className="text-[21px] mt-[15px]">
                  Deliver instant answers
                </h1>
                <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
                <button className="flex text-[#6941C6] text-[18px] mt-[20px]">
                  Learn more <img src={arrow} alt="Arrow" className="size-[22px] mt-[3px] ml-[5px]"/>
                </button>
              </div>
              <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
                <img
                  src={Manage}
                  alt="Manage"
                  className="rounded-[10px] border-gray-200 border-[1px] p-3"
                />
                <h1 className="text-[21px] mt-[15px]">
                  Manage your team with reports
                </h1>
                <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
                <button className="flex text-[#6941C6] text-[18px] mt-[20px]">
                  Learn more <img src={arrow} alt="Arrow" className="size-[22px] mt-[3px] ml-[5px]"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="flex mt-[27px] ml-[108px] w-[1304px]"/>
    </>
  );
};

export default MoreFeatures;
