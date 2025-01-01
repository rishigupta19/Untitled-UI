import Logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <div className="w-full h-[440px]">
      <div className="container1 w-[1280px] h-[240px] mt-[64px] mx-auto">
        <div className="items w-[1216px] grid grid-cols-6 mx-auto gap-[32px]">
            <div className="column-1">
              <h3 className='text-[#667085] text-[14px]'>Product</h3>
              <ul className='mt-[16px] text-[#475467] space-y-[12px]'>
                <li><a href="#Overview">Overview</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#Solutions">Solutions</a></li>
                <li><a href="#Tutorials">Tutorials</a></li>
                <li><a href="#Pricing">Pricing</a></li>
                <li><a href="#Releases">Releases</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-[#667085] text-[14px]'>Company</h3>
              <ul className='mt-[16px] text-[#475467] space-y-[12px]'>
                <li><a href="#About Us">About Us</a></li>
                <li><a href="#Careers">Careers</a></li>
                <li><a href="#Press">Press</a></li>
                <li><a href="#News">News</a></li>
                <li><a href="#Media Kit">Media Kit</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-[#667085] text-[14px]'>Resources</h3>
              <ul className='mt-[16px] text-[#475467] space-y-[12px]'>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Newsletter">Newsletter</a></li>
                <li><a href="#Events">Events</a></li>
                <li><a href="#Help center">Help center</a></li>
                <li><a href="#Tutorials">Tutorials</a></li>
                <li><a href="#Support">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-[#667085] text-[14px]'>Use cases</h3>
              <ul className='mt-[16px] text-[#475467] space-y-[12px]'>
                <li><a href="#Startups">Startups</a></li>
                <li><a href="#Enterprise">Enterprise</a></li>
                <li><a href="#Government">Government</a></li>
                <li><a href="#SaaS center">SaaS center</a></li>
                <li><a href="#Marketplaces">Marketplaces</a></li>
                <li><a href="#Ecommerce">Ecommerce</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-[#667085] text-[14px]'>Social</h3>
              <ul className='mt-[16px] text-[#475467] space-y-[12px]'>
                <li><a href="#Twitter">Twitter</a></li>
                <li><a href="#LinkedIn">LinkedIn</a></li>
                <li><a href="#Facebook">Facebook</a></li>
                <li><a href="#GitHub">GitHub</a></li>
                <li><a href="#AngelList">AngelList</a></li>
                <li><a href="#Dribble">Dribble</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-[#667085] text-[14px]'>Legal</h3>
              <ul className='mt-[16px] text-[#475467] space-y-[12px]'>
                <li><a href="#Terms">Terms</a></li>
                <li><a href="#Privacy">Privacy</a></li>
                <li><a href="#Cookies">Cookies</a></li>
                <li><a href="#Licenses">Licenses</a></li>
                <li><a href="#Settings">Settings</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footerlinks"></div>
          <div className="footerlinks"></div>
          <div className="footerlinks"></div>
          <div className="footerlinks"></div>
          <div className="footerlinks"></div>
        </div>

        <hr className="mt-[97px] flex w-[1210px] mx-auto " />

      <div className="container2 w-[1280px] h-[64px] mx-auto">
        <div className="content w-[1216px] h-[64px] mx-auto flex justify-between items-end">
          <a href="#SocialProof"><img src={Logo} alt="Logo"/></a>
          <p className='text-gray-500 font-normal'>© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
