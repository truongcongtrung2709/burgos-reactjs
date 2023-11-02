import {useState} from 'react'
import { useLocation } from 'react-router-dom';
const Header = () => {
  const {pathname} = useLocation();
  const [isToggle, setIsToggle] = useState(false)
  function toggleMenu(){
    console.log("Hello");
    
    setIsToggle(!isToggle)
  }
  return (
<div className={` ${pathname === "/" ? "top-fixed relative lg:bg-transparent bg-black-navy-color z-[5] w-full lg:absolute" : "top-fixed relative  bg-white-color z-[5] w-full "} `}>
  <div className=' container p-0'>
    <div className='m-0 sm:row  sm:relative  items-center flex flex-wrap '>
      <div className='py-6 flex-max-w relative-padding  '>
        <nav className="relative float-left pt-[15px] right-0 w-full pl-0 z-[5] flex items-center justify-between flex-wrap px-0 lg:flex-row lg:flex-nowrap lg:justify-start">
            <a href="/" className="ml-[-2px] my-0 mx-3 py-[5px] text-sm whitespace-nowrap">
              <img src="assets/images/logo/Logo_light.svg" className={` ${pathname=== "/" ?" max-w-[150px] min-w-[200px] p-0" :"hidden"}`} alt="" />
              <img src="assets/images/logo/Logo2.svg" className={` ${pathname=== "/" ?"hidden" :"  max-w-[150px] min-w-[200px] p-0"}`} alt="" />
            </a>
            <button data-collapse-toggle="nav-toggle " id="nav-toggle" className={`inline-block absolute z-[2] right-0 top-0 pr-0 outline-none pt-6 cursor-pointer lg:hidden ${isToggle ? "open" : ""}`  }  onClick={() => toggleMenu()}>
              <span></span>
              <span></span>
              <span></span>        
            </button>
            <div className={`${isToggle ? "block" : "hidden"} w-full lg:flex lg:flex-grow basis-auto lg:justify-end items-center mr-0 lg:mr-20 3xl:mr-auto lg:w-auto`}id="navbar-default">
              <ul className="text-sm font-extrabold leading-6 flex flex-col lg:flex-row lg:space-x-8 p-0 rounded-none lg:mt-0 mt-6 mb-0 bg-transparent ml-8  lg:bg-white  dropdown-animate">
                <li className=' py-[16px]'>
                  <a href="/" className={`${pathname === "/" ? "lg:mr-[18px]  cursor-pointer    text-yellow-color relative group  border-yellow-color lg:py-0"  : "lg:mr-[18px]  cursor-pointer    text-black relative group  border-yellow-color lg:py-0" }`} aria-current="page">HOME
                    <span className='bg-yellow-color absolute w-full h-1  -bottom-2 hidden group-hover:block left-0 animate__animated animate__fadeInDown animate__faster ' ></span></a>
          
                </li>
                <li className=' py-[16px]'>
                  <a href="/about" className={`${pathname === "/"?"lg:mr-[18px]  cursor-pointer    text-white-color relative group  border-yellow-color lg:py-0": pathname ==="/about" ? "lg:mr-[18px]  cursor-pointer    text-yellow-color relative group  border-yellow-color lg:py-0" :"lg:mr-[18px]  cursor-pointer    text-black relative group  border-yellow-color lg:py-0"}`}>ABOUT
                    <span className='bg-yellow-color absolute w-full h-1  -bottom-2 hidden group-hover:block left-0 animate__animated animate__fadeInDown animate__faster'></span></a>
                  
                </li>
                <li className=' py-[16px]'>
                  <a href="/products" className={`${pathname === "/"?"lg:mr-[18px]  cursor-pointer    text-white-color relative group  border-yellow-color lg:py-0":"lg:mr-[18px]  cursor-pointer    text-black relative group  border-yellow-color lg:py-0"}`}>PRODUCTS
                    <span className='bg-yellow-color absolute w-full h-1  -bottom-2 hidden group-hover:block left-0 animate__animated animate__fadeInDown animate__faster'></span></a>
                  
                </li>
                <li className=' py-[16px]'>
                  <a href="/blog" className={`${pathname === "/"?"lg:mr-[18px]  cursor-pointer    text-white-color relative group  border-yellow-color lg:py-0": pathname === "/blog"? "lg:mr-[18px]  cursor-pointer    text-yellow-color relative group  border-yellow-color lg:py-0":"lg:mr-[18px]  cursor-pointer    text-black relative group  border-yellow-color lg:py-0"}`}
                  >BLOGS
                  <span className='bg-yellow-color absolute w-full h-1  -bottom-2 hidden group-hover:block left-0 animate__animated animate__fadeInDown animate__faster'></span></a>
                  
                </li>
                <li className=' py-[16px]'>
                  <a href="/contact" className={`${pathname === "/"?"lg:mr-[18px]  cursor-pointer    text-white-color relative group  border-yellow-color lg:py-0":"lg:mr-[18px]  cursor-pointer    text-black relative group  border-yellow-color lg:py-0"}`}>CONTACT
                  <span className='bg-yellow-color absolute w-full h-1  -bottom-2 hidden group-hover:block left-0 animate__animated animate__fadeInDown animate__faster'></span></a>
                  
                </li>
              </ul>
            </div>
        </nav>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header