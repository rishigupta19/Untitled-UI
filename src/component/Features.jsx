import Share from "../assets/Symbols/Share.svg";
import Tools from "../assets/Symbols/Tools.svg";
import People from "../assets/Symbols/People.svg";
import Manage from "../assets/Symbols/Manage.svg";
import Deliver from "../assets/Symbols/Deliver.svg";
import Connect from "../assets/Symbols/Connect.svg";

const Features = () => {
  return (
    <div className="flex w-[1440px] h-[836px] flex-col ml-[43px]">
      <div className="container1 flex w-[1280px] h-[160px] flex-col mx-auto items-center mt-[100px] mb-[40px]">
        <h6 className="text-[#6941C6] text-[18px]">Features</h6>
        <p className="mt-[4px] text-[40px]">
          Analytics that feels like it's from the future
        </p>
        <p className="flex w-[840px] h-[60px] text-gray-600 mt-[20px] items-center text-center text-[23px] font-normal">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Container 2 */}
      <div className="container2 w-[1300px] h-[420px] flex ml-14">
        <div className="cardbox grid grid-cols-3 mx-auto mt-[40px] gap-[48px] ">
          <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
            <img
              src={Share}
              alt="Share"
              className="rounded-[10px] border-gray-200 border-[1px] p-3"
            />
            <h1 className="text-[21px] mt-[15px]">Share team inboxes</h1>
            <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
            <img
              src={Deliver}
              alt="Deliver"
              className="rounded-[10px] border-gray-200 border-[1px] p-3"
            />
            <h1 className="text-[21px] mt-[15px]">Deliver instant answers</h1>
            <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
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
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
            <img
              src={Connect}
              alt="Connect"
              className="rounded-[10px] border-gray-200 border-[1px] p-3"
            />
            <h1 className="text-[21px] mt-[15px]">Connect with customers</h1>
            <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
            <img
              src={Tools}
              alt="Tools"
              className="rounded-[10px] border-gray-200 border-[1px] p-3"
            />
            <h1 className="text-[21px] mt-[15px]">
              Connect the tools you already use
            </h1>
            <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="card w-[420px] h-[178px] flex flex-col items-center justify-start">
            <img
              src={People}
              alt="People"
              className="rounded-[10px] border-gray-200 border-[1px] p-3"
            />
            <h1 className="text-[21px] mt-[15px]">
              Our people make the difference
            </h1>
            <p className="text-center font-normal text-gray-500 text-[18px] mt-[8px]">
              We’re an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
