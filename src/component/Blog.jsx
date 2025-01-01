import Blog1 from "../assets/Blog/Blog1.svg";
import Blog2 from "../assets/Blog/Blog2.svg";
import Blog3 from "../assets/Blog/Blog3.svg";
import { FiArrowUpRight } from "react-icons/fi";
import User from "../assets/User.svg";
import User4 from "../assets/User4.svg";
import User5 from "../assets/User5.svg";

const Blog = () => {
  return (
    <div className="w-full h-[785px] mx-auto">
      <div className="container1 mt-[96px] mx-auto flex w-[1280px] h-[130px] relative">
        <div className="content w-[768px] h-[130px]">
          <h6 className="text-[#6941C6] text-[18px]">Our blog</h6>
          <h1 className="text-[40px] mt-[12px]">Lastest blog posts</h1>
          <h2 className="text-gray-500 font-normal text-[22px] mt-[20px]">
            Tool and strategies modern teams need to help their companies grow.
          </h2>
        </div>
        <button className="button w-[148px] h-[48px] bg-[#7F56D9] text-white rounded-[8px] border-[1px] border-[#7F56D9] hover:bg-[#663fbc] ease-in-out duration-300 absolute top-0 right-0">
          View all posts
        </button>
      </div>

      {/* Container 2 */}
      <div className="cardholder w-[1280px] h-[444px] mt-[55px] grid grid-cols-3 gap-[32px] mx-auto">
        <div className="card">
          <img src={Blog1} alt="Blog1" className="w-[600px] h-[300px]" />
          <h2 className="text-[#6941C6]">Design</h2>
          <h5 className="mt-[8px] text-[26px] flex justify-between items-center">
            UX review presentations
            <FiArrowUpRight className="text-[27px]" />
          </h5>
          <p className="font-normal mt-[8px] text-[17px] text-gray-600">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="userdetail flex">
          <img src={User} alt="User" className="mt-[24px]" />
          <div className="details ml-[12px] mt-[24px] text-[15px]">
            <h2>Olivia Rhye</h2>
            <h2 className="text-gray-500 font-normal">20 Jan 2024</h2>
          </div>
          </div>
        </div>
        <div className="card">
          <img src={Blog2} alt="Blog2" className="w-[600px] h-[300px]" />
          <h2 className="text-[#6941C6]">Product</h2>
          <h5 className="mt-[8px] text-[26px] flex justify-between items-center">
            Migrating to Linear 101
            <FiArrowUpRight className="text-[27px]" />
          </h5>
          <p className="font-normal mt-[8px] text-[17px] text-gray-600">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here’s how to get started.
          </p>
          <div className="userdetail flex">
            <img src={User4} alt="User4" className="mt-[24px]" />
            <div className="details ml-[12px] mt-[24px] text-[15px]">
              <h2>Phoenix Baker</h2>
              <h2 className="text-gray-500 font-normal">19 Jan 2024</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Blog3} alt="Blog3" className="w-[600px] h-[300px]" />
          <h2 className="text-[#6941C6]">Software Engineering</h2>
          <h5 className="mt-[8px] text-[26px] flex justify-between items-center">
            Building your API stack
            <FiArrowUpRight className="text-[27px]" />
          </h5>
          <p className="font-normal mt-[8px] text-[17px] text-gray-600">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <div className="userdetail flex">
          <img src={User5} alt="User5" className="mt-[24px]" />
          <div className="details ml-[12px] mt-[24px] text-[15px]">
            <h2>Lana Steiner</h2>
            <h2 className="text-gray-500 font-normal">18 Jan 2024</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
