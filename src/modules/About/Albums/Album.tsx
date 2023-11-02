import {motion} from "framer-motion"
const Album = () => {
  return (
    <section>
      <motion.div 
      initial={{ opacity: 0,y:-200 }}
      whileInView={{ opacity: 1,y:0 }}
      viewport={{ once: true }}
        transition={{duration:0.7, delay:0.25}}
      className="section-title mt-[82px] mb-0 ">
        <div className="elemental-container">
          <div className="title-wrapper p-0 md:p-[10px] text-center w-full">
            <h2 className='text-4xl md:text-[54px] font-extrabold font-nunito uppercase'>Photo gallery</h2>
          </div>
        </div>
      </motion.div>
      <div className="section-albums mt-0 pb-[70px] md:mt-0 md:pb-[96px] px-5 xl:p-0 xl:mt-0 xl:pb-[120px]">
        <div className="elemental-container">
          <div className="albums grid grid-cols-2 md:grid-cols-3 gap-0.5">
            <motion.div   
              initial={{ opacity: 0,x:-200 }}
              whileInView={{ opacity: 1,x:0 }}
              viewport={{ once: true }}
                transition={{duration:0.7, delay:0.25}}
            className="picture p-[10px]">
              <div className="relative">
              <img src="assets/images/gal1.webp" alt="" />
                <a href="/" className="absolute top-0 left-0 w-full h-full animate__animated animate__SlideInDown text-center transition-all mt-0 group hover:bg-yellow-color">
                  <div className="mask-inner2 absolute top-1/2 w-full float-left p-3 mt-[-23px]">
                    <h3 className='mb-0 text-sm font-bold uppercase opacity-0 group-hover:opacity-100'>Cutlet</h3>
                  </div>  
                    </a> 
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0,x:0 }}
            whileInView={{ opacity: 1,x:0 }}
            viewport={{ once: true }}
              transition={{duration:0.7, delay:0.25}}
            className="picture p-[10px] animate__animated animate__fadeIn">
              <div className="relative">
              <img src="assets/images/gal2.webp" alt="" />
                <a href="/" className="absolute top-0 left-0 w-full h-full animate__animated animate__SlideInDown text-center transition-all mt-0 group hover:bg-yellow-color">
                  <div className="mask-inner2 absolute top-1/2 w-full float-left p-3 mt-[-23px]">
                    <h3 className='mb-0 text-sm font-bold uppercase opacity-0 group-hover:opacity-100'>Buritos</h3>
                  </div>  
                    </a> 
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0,x:200 }}
            whileInView={{ opacity: 1,x:0 }}
            viewport={{ once: true }}
              transition={{duration:0.7, delay:0.25}}
            className="picture p-[10px]">
              <div className="relative">
              <img src="assets/images/gal3.webp" alt="" />
                <a href="/" className="absolute top-0 left-0 w-full h-full animate__animated animate__SlideInDown text-center transition-all mt-0 group hover:bg-yellow-color">
                  <div className="mask-inner2 absolute top-1/2 w-full float-left p-3 mt-[-23px]">
                    <h3 className='mb-0 text-sm font-bold uppercase opacity-0 group-hover:opacity-100'>ingridients</h3>
                  </div>  
                    </a> 
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0,x:-200 }}
            whileInView={{ opacity: 1,x:0 }}
            viewport={{ once: true }}
              transition={{duration:0.7, delay:0.25}}
            className="picture p-[10px]">
              <div className="relative">
              <img src="assets/images/gal4.webp" alt="" />
                <a href="/" className="absolute top-0 left-0 w-full h-full animate__animated animate__SlideInDown text-center transition-all mt-0 group hover:bg-yellow-color">
                  <div className="mask-inner2 absolute top-1/2 w-full float-left p-3 mt-[-23px]">
                    <h3 className='mb-0 text-sm font-bold uppercase opacity-0 group-hover:opacity-100'>fast food</h3>
                  </div>  
                    </a> 
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0,x:0 }}
            whileInView={{ opacity: 1,x:0 }}
            viewport={{ once: true }}
              transition={{duration:0.7, delay:0.25}}
             className="picture p-[10px]">
              <div className="relative">
              <img src="assets/images/gal5.webp" alt="" />
                <a href="/" className="absolute top-0 left-0 w-full h-full animate__animated animate__SlideInDown text-center transition-all mt-0 group hover:bg-yellow-color">
                  <div className="mask-inner2 absolute top-1/2 w-full float-left p-3 mt-[-23px]">
                    <h3 className='mb-0 text-sm font-bold uppercase opacity-0 group-hover:opacity-100'>fast food</h3>
                  </div>  
                    </a> 
                </div>
            </motion.div>
            <motion.div 
             initial={{ opacity: 0,x:-200 }}
             whileInView={{ opacity: 1,x:0 }}
             viewport={{ once: true }}
               transition={{duration:0.7, delay:0.25}}
            className="picture p-[10px] animate__animated animate__fadeInRight">
              <div className="relative">
              <img src="assets/images/gal6.webp" alt="" />
                <a href="/" className="absolute top-0 left-0 w-full h-full animate__animated animate__SlideInDown text-center transition-all mt-0 group hover:bg-yellow-color">
                  <div className="mask-inner2 absolute top-1/2 w-full float-left p-3 mt-[-23px]">
                    <h3 className='mb-0 text-sm font-bold uppercase opacity-0 group-hover:opacity-100'>gril</h3>
                  </div>  
                    </a> 
                </div>
            </motion.div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Album