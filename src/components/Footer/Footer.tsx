import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faYoutube,faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLocationArrow, faPhone, faClock, faEnvelope, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const Footer = () => {

  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="footer-wrapper bg-footer-background text-center  pt-[96px] pb-[24px] px-0 relative z-[1] md:pt-[120px] md:pb-[48px]">
      <div className="footer">
        <div className="container">
          <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
            <div className="relative w-full px-[15px] md:flex-[0_0_100%] md:max-w-full">
              <aside className="block">
                <div className="footer-widgets-wrapper flex flex-wrap mx-[-15px] mb-6 md:mb-[48px] ">
                  <div className="footer-widgets flex-[0_0_100%] max-w-full relative w-full px-[15px] md:flex-[0_0_50%] md:max-w-[50%]  lg:basis-0 lg:grow min-w-0">
                    <div className=" widget_media_image mb-[48px] ">
                      <div className="widget-content">
                        <img className='mx-auto md:mx-0' width={63} height={56} src="/assets/images/logo/Logo_light1.svg"  alt=""  style={{maxWidth: '100%', height: 'auto'}}  />
                      </div>
                    </div>
                    <div className="widget_text mb-[48px]">
                      <div className="widget-content">			
                        <div className="text-widget">
                          <p className='text-gray-color text-sm pt-1 mb-5 mt-0 md:text-start'>Pellentesque sed libero nunc. Lorem ipsum dolor sit amet, consec.
                          </p>
                          <p className='flex justify-center md:justify-start'>
                            <img decoding="async" loading="lazy" className="align-middle mt-0 mr-[20px] mb-[20px] ml-0  " style={{width: '32px', marginRight: '10px'}} src="/assets/images/visa-1.svg" alt="" width={32} height={32} />
                            <img decoding="async" loading="lazy" className="align-middle mt-0 mr-[20px] mb-[20px] ml-0  " style={{width: '32px', marginRight: '10px'}} src="/assets/images/american-express-1.svg" alt="" width={32} height={32} />
                            <img decoding="async" loading="lazy" className="align-middle mt-0 mr-[20px] mb-[20px] ml-0  " style={{width: '32px', marginRight: '5px'}} src="/assets/images/maestro-1.svg" alt="" width={32} height={32} />
                          </p>
                        </div>
                      </div>
                    </div>							
                  </div>
                  <div className="footer-widgets flex-[0_0_100%] max-w-full relative w-full px-[15px] md:flex-[0_0_50%] md:max-w-[50%]  lg:basis-0 lg:grow lg:min-w-0">
                    <div className="widget_text mb-12 text-center md:text-start">
                      <div className="widget-content  ">
                        <h2 className="widget-title text-md font-bold leading-7 text-white-color uppercase mb-6 break-words">Call us</h2>
                        <div className="text-widget">
                          <h5 className="footer-cta text-xl font-semibold leading-7 text-yellow-color mb-3 ">
                            <FontAwesomeIcon className='pr-3 align-middle' icon={faPhone} /> + 123 4567 8905
                          </h5>
                          <h5 className="footer-cta text-xl font-semibold leading-7 text-yellow-color mb-3">
                            <FontAwesomeIcon className='pr-3 align-middle' icon={faPhone} /> + 876 5763 3597
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="widget_text mb-12 ">
                      <div className="widget-content">
                        <div className="text-widget ">
                          <div className="soc-icon text-center md:text-start">
                            <a className='mx-[3px] text-white-color inline-block w-[46px] h-[46px] rounded-[500px] border-[1px] border-solid border-yellow-color text-center transition-all ' href="http://instagram.com">  <FontAwesomeIcon className="fa-instagram text-md leading-[18px] text-yellow-color transition-all font-normal pt-[13px]"  icon={faInstagram} /> 
                            </a>
                            <a className='mx-[3px] text-white-color inline-block w-[46px] h-[46px] rounded-[500px] border-[1px] border-solid border-yellow-color text-center transition-all ' href="http://twitter.com">  <FontAwesomeIcon className="fa-twitter text-md leading-[18px] text-yellow-color transition-all font-normal pt-[13px]"  icon={faTwitter} /> 
                            </a>
                            <a className='mx-[3px] text-white-color inline-block w-[46px] h-[46px] rounded-[500px] border-[1px] border-solid border-yellow-color text-center transition-all ' href="http://instagram.com">  <FontAwesomeIcon className="fa-youtube text-md leading-[18px] text-yellow-color transition-all font-normal pt-[13px]"  icon={faYoutube} /> 
                            </a>
                          </div>	
                        </div>
                      </div>
                    </div>					
                  </div>
                  <div className="footer-widgets flex-[0_0_100%] max-w-full relative w-full px-[15px] md:flex-[0_0_50%] md:max-w-[50%]  lg:basis-0 lg:grow lg:min-w-0">
                    <div className="widget_text mb-12 text-center md:text-start">
                      <div className="widget_text widget-content">
                        <h2 className="widget-title text-md font-bold leading-7 text-white-color uppercase mb-6 break-words">contacts
                        </h2>
                        <div className="text-widget">
                          <ul className="footer-ul pl-0 leading-6 text-sm mt-0 mb-4">
                            <li className="footer-ul1 text-md font-semibold mb-1.5 leading-6 text-white-color ">
                              <FontAwesomeIcon className='pr-[10px] font-black' icon={faLocationArrow} />Address 
                            </li>
                            <li className="footer-ul2 max-w-full  text-gray-color mb-6 md:max-w-[260px]">LA, Vehicula Street, 58
                            </li>
                            <li className="footer-ul1 text-md font-semibold mb-1.5 leading-6 text-white-color">
                                <FontAwesomeIcon className='pr-[10px] font-black' icon={faClock} /> Working Time 
                            </li>
                            <li className="footer-ul2 footer-ul3  pb-1.5 pt-[3px] border-b-2 border-solid border-border-footer max-w-[250px] mb-[3px] text-gray-color mx-auto md:mx-0">Monday - Friday:
                              <span className='float-none md:float-right text-gray-color '> 11:00-17:00
                              </span>
                            </li>
                            <li className="footer-ul2 footer-ul3  pb-1.5 pt-[3px] border-b-2 border-solid mx-auto md:mx-0 border-border-footer max-w-[250px] mb-[3px] text-gray-color ">Saturday:
                              <span className='float-none md:float-right text-gray-color'> Off</span>
                            </li>	
                            <li className="footer-ul1 mt-6 text-md font-semibold mb-1.5 leading-6 text-white-color">
                              <FontAwesomeIcon className='pr-[10px] font-black' icon={faEnvelope} />
                                 Contact</li>
                            <li className="footer-ul2 max-w-full  mb-6 md:max-w-[260px]"><a className='text-white-color transition-all' href="mailto:name@email.com">burgos@burgos.com</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>							
                  </div>
                  <div className="footer-widgets flex-[0_0_100%] max-w-full relative w-full px-[15px] md:flex-[0_0_50%] md:max-w-[50%]  lg:basis-0 lg:grow lg:min-w-0">
                    <div className="widget widget_st_latest_posts_widget mb-12 text-center md:text-start">
                      <div className="widget-content">
                        <h2 className="widget-title text-md font-bold leading-7 text-white-color uppercase mb-6 pt-0 break-words">Latest Posts</h2>
                        <div className="latest-posts inline-block mx-auto text-left ">
                          <div className="media overflow-hidden flex items-start">
                            <div className="pull-left pr-[10px] float-left">
                              <a href="/assets/images/latest-post1.webp">
                                <img width={64} height={64} src="/assets/images/latest-post1.webp" className="img-responsive text-white-color" sizes="(max-width: 64px) 100vw, 64px" />
                              </a>
                            </div>
                          <div className="media-body ml-[7px] table-cell align-top flex-1">
                            <h3 className="entry-title text-md font-semibold mb-1.5 leading-normal pt-0 m-0">
                              <a className='text-white-color' href="/">Alternative methods of food delivery logistic</a>
                            </h3>
                            <div className="entry-meta text-[85%] text-[#888] font-normal">
                              <span className="st-lp-time text-gray-color hidden">9:39 pm
                              </span> 
                              <span className="st-lp-date text-gray-color ">29 Oct 2020
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="media mt-5 overflow-hidden flex items-start">
                          <div className="pull-left pr-[10px] float-left">
                            <a href="/">
                              <img width={64} height={64} src="/assets/images/latest-post2.webp" className="img-responsive text-white-color" alt=""   sizes="(max-width: 64px) 100vw, 64px" />
                            </a>
                          </div>
                          <div className="media-body ml-[7px] table-cell align-top flex-1">
                            <h3 className="entry-title text-md font-semibold mb-1.5 leading-normal pt-0 m-0">
                              <a className='text-white-color' href="/">Where and how do we keep the ingridients fresh?
                              </a>
                            </h3>
                            <div className="entry-meta text-[85%] text-[#888] font-normal">
                              <span className="st-lp-time text-gray-color hidden">9:37 pm
                              </span> 
                              <span className="st-lp-date text-gray-color">29 Oct 2020
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="media mt-5 overflow-hidden flex items-start">
                          <div className="pull-left pr-[10px] float-left">
                            <a href="/">
                              <img width={64} height={64} src="/assets/images/latest-post3.webp" className="img-responsive text-white-color" alt=""  sizes="(max-width: 64px) 100vw, 64px" />
                            </a>
                        </div>
                          <div className="media-body ml-[7px] table-cell align-top flex-1">
                            <h3 className="entry-title text-md font-semibold mb-1.5 leading-normal pt-0 m-0">
                              <a className='text-white-color' href="">Not eating meat is decision, eating meat is an instict
                              </a>
                            </h3>
                          <div className="entry-meta text-[85%] text-[#888] font-normal"><span className="st-lp-time text-gray-color hidden">9:34 pm</span> <span className="st-lp-date text-gray-color">29 Oct 2020</span>
                          </div>
                        </div>                                      
                      </div>
                    </div>
                  </div>
                </div>						
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
<footer className="container mt-6">
  <div className="section-inner flex flex-wrap mx-[-15px]">
    <div className="footer-credits basis-0 grow min-w-0 max-w-full relative w-full px-[15px]">
      <div className="copyright pt-12 border-t-2 border-t-border-footer text-gray-color text-center max-w-full border-solid relative w-full px-[15px]">
                2023				Design by 
        <a className='text-gray-color' href="/" target="_blank">Merkulove
        </a>. Development by 
        <a className='text-gray-color' href="/" target="_blank">RayoflightThemes
        </a>. © Burgos - Street Food WordPress Theme
      </div>
    </div>
    <div onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="to-the-top text-right flex-[0_0_100%] max-w-full relative w-full px-[15px]">
      <div id="toTopBtn" className="button-top font-black inline-block leading-[1] fixed z-[1000] bottom-6 right-6 pt-[13px] text-center opacity-[0.7] rounded-[500px] bg-hero-pattern hover:opacity-[1] cursor-pointer text-white-color w-12 h-12 text-xl transition-all duration-[0.3s] ease-[ease]" >
                <FontAwesomeIcon  icon={faChevronUp}/>
      </div>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer