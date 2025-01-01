import Sisyphus from '../assets/Logo/Sisyphus.svg'
import Candice from '../assets/Candice.svg'

const Testimonial = () => {
  return (
    <div className="flex w-full h-[595px] bg-gray-50">
      <div className="container w-[1280px] h-[360] mt-[96px] mx-auto">
        <img src={Sisyphus} alt="Sisyphus" className='flex mx-auto'/>
        <h1 className='text-center text-[52px] w-[1250px] font-medium mt-[15px] ml-[10px]'>We’ve been using Untitled to kick start every new <br /> <p className='font-medium mt-[-20px]'>project and can’t imagine working without it.</p></h1>
        <div className="designation w-[1216px] h-[56px] mx-auto mt-[30px]">
          <img src={Candice} alt="User" className='mx-auto'/>
          <h2 className='text-center text-[20px] mt-[20px]'>Candice Wu</h2>
          <p className='text-center text-gray-600 font-normal text-[18px]'>Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial