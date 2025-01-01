import { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import { PiMinusCircle } from "react-icons/pi";
import User from "../assets/User.svg";
import User3 from "../assets/User3.svg";
import User2 from "../assets/User2.svg";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can i change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy??",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <>
      <div className="flex h-auto flex-col">
        <div className="container1 w-[1280px] h-auto mt-[96px] mx-auto">
          <p className="text-center text-[40px]">Frequently asked questions</p>
          <p className="text-center text-[23px] text-gray-600 font-light mt-[15px]">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="container2 w-[1280px] h-auto mt-[40px] mx-auto">
          <div className="qna w-[850px] h-[504px] mx-auto mt-[30px]">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item w-full mb-[24px]">
                <div className="flex items-start justify-between">
                  <div className="text w-[90%]">
                    <p className="text-[20px] font-medium">{faq.question}</p>
                    {open === index && (
                      <p className="mt-[10px] text-[17px] text-gray-500 font-light">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-[40px] h-[40px] flex items-center justify-end text-[30px] text-gray-400 bg-white rounded-full"
                  >
                    {open === index ? <PiMinusCircle /> : <PiPlusCircle />}
                  </button>
                </div>
                <hr className="mt-[25px]" />
              </div>
            ))}
          </div>
        </div>

        <div className="container3 w-[1280px] h-[298px] mx-auto bg-gray-50 mt-[64px]">
          <div className="flex mx-auto mt-[32px] w-[120px] h-[56px] justify-between">
            <img src={User2} alt="User2" className="ml-[-10px]" />
            <img src={User3} alt="User3" />
          </div>
          <div className="relative">
            <img
              src={User}
              alt="User"
              className="mt-[-65px] ml-[604px] w-[60px] h-[60px] border-[2px] border-white box-border rounded-full"
            />
          </div>
          <p className="text-center text-[24px] mt-[32px]">Still have questions?</p>
          <p className="text-center text-gray-500 mt-[8px] font-light text-[20px]">Can't find the answer you're looking for? Please chat to our friendly team. </p>
          <button className="bg-[#7F56D9] px-[20px] py-[12px] rounded-lg mx-auto flex mt-[32px] text-white text-[18px] hover:bg-[#663fbc] ease-in-out duration-300">
            Get in touch
          </button>
        </div>
      </div>
      <hr className="mt-[97px] flex w-[1220px] mx-auto " />
    </>
  );
};

export default FAQ;
