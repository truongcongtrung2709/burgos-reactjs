import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ClientsAboutUs = () => {
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className='overflow-hidden mt-20 mb-[60px] pl-3 pr-0 py-0 md:mt-[70px] md:mb-[60px] md:pl-2.5 md:pr-0 md:py-0 xl:mt-[190px] xl:mb-0'>
      <div className="elemental-container">
        <div className="ClientsAboutUs__content1 animate__animated animate__fadeIn w-full md:w-[39.737%]">
          <div className="ClientsAboutUs__wrapper flex flex-wrap w-full content-center items-center mt-0 mb-[46px] mx-0 md:pl-[3px] md:pr-10 md:pt-0 md:pb-2.5 xl:pl-2.5 xl:pr-10 xl:py-0">
            <div className='mb-5 w-full'>
              <h2 className='text-4xl md:text-[54px] font-extrabold uppercase'>Clients about us</h2>
            </div>
            <div className=' w-full -mt-5 mb-[50px] mx-0'>
              <p>Praesent eleifend tellus consectetur erat maximus aliquet. Quisque felis felis, porttitor sits</p>
            </div>
            <div className='w-full'>
              <a href="/" className='custom-button1 px-[40px] py-5 lg:pt-[22px] lg:pb-5 lg:px-[50px]  uppercase'>go to shop</a>
            </div>

          </div>
        </div>
        <div className="ClientsAboutUs__content2 animate__animated animate__fadeInRight w-full md:w-[60.263%]">
          <div className='ClientsAboutUs__wrapper  w-full content-center items-center  px-2.5 py-0 rounded-none border-solid border-white-color'>
          <Slider {...settings} className='slider mb-[22px]'>
          <div className='slider-item min-h-[50px] mx-[0%] my-0 p-[5%]'>
            <div className="item px-5 py-[30px] border-l-[6px] border-l-yellow-color border-solid">
              <p className='text-black-navy-color block'>Etiam eu sagittis justo. Morbi tor turpis, ac varius nunc consequat a. Integer maximus libero ut rhoncus hendrerit. Etiam eget tincidunt nunc. In iaculis pretium tempor</p>
              <cite className='block text-[15px] italic font-extrabold text-black-navy-color font-lato'></cite>
            </div>
          </div>
          <div className='slider-item min-h-[50px] mx-[0%] my-0 p-[5%]'>
            <div className="item px-5 py-[30px] border-l-[6px] border-l-yellow-color border-solid">
              <p className='text-black-navy-color block'>Etiam eu sagittis justo. Morbi tor turpis, ac varius nunc consequat a. Integer maximus libero ut rhoncus hendrerit. Etiam eget tincidunt nunc. In iaculis pretium tempor</p>
              <cite className='block text-[15px] italic font-extrabold text-black-navy-color font-lato'></cite>
            </div>
          </div>
          <div className='slider-item min-h-[50px] mx-[0%] my-0 p-[5%]'>
            <div className="item px-5 py-[30px] border-l-[6px] border-l-yellow-color border-solid">
              <p className='text-black-navy-color block'>Etiam eu sagittis justo. Morbi tor turpis, ac varius nunc consequat a. Integer maximus libero ut rhoncus hendrerit. Etiam eget tincidunt nunc. In iaculis pretium tempor</p>
              <cite className='block text-[15px] italic font-extrabold text-black-navy-color font-lato'></cite>
            </div>
          </div>
          <div className='slider-item min-h-[50px] mx-[0%] my-0 p-[5%]'>
            <div className="item px-5 py-[30px] border-l-[6px] border-l-yellow-color border-solid">
              <p className='text-black-navy-color block'>Etiam eu sagittis justo. Morbi tor turpis, ac varius nunc consequat a. Integer maximus libero ut rhoncus hendrerit. Etiam eget tincidunt nunc. In iaculis pretium tempor</p>
              <cite className='block text-[15px] italic font-extrabold text-black-navy-color font-lato'></cite>
            </div>
          </div>
         
        </Slider>
      
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsAboutUs