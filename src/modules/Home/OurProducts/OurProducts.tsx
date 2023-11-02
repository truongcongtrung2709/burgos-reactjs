import ProductItem from "./ProductItem";
import burgersData from "../../../data/data.json";
import {motion} from "framer-motion"
const OurProducts = () => {
  
  return (
    <section className="our-products mb-[24px] xl:mb-[55px]">
      <motion.h1
      initial={{ opacity: 0,y:500 }}
      whileInView={{ opacity: 1,y:0 }}
      viewport={{ once: true }}
        transition={{duration:0.5, delay:0.25}}
      className="text-4xl uppercase mt-[75px] p-[10px] mb-3 md:mt-0 text-center font-extrabold md:text-5xl mr-[5px] break-words ">
        Our Products
      </motion.h1>
      <div className="elemental-container">
        <div className="product-list mt-0 mb-6 xl:mb-[55px] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-y-[48px] gap-x-5">
        {burgersData.map((burger) => (
           <div key={burger.id} className="product-item  text-center">
           <ProductItem {...burger}/>
         </div>    
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
