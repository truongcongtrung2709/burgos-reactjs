import Sidebar from '../../components/Sidebar'
import burgersData from "../../data/data.json";
import ProductItem from './ProductItem';
const Products = () => {
  return (
    <div className='container'>
      <div className="products-wrapper  row mb-[35px] pt-24">
        <div className='products-content relative w-full px-[15px] lg:flex-[0_0_66.666667%] lg:max-w-[66.666667%]'>
          <nav className='mb-[15px] block text-[15px] font-medium text-text-color md:mb-6 pl-[18px] border-l-2 border-l-yellow-color border-solid'>
            <a href="/" className='text-[#0c4c7b] font-medium text-[15px]'>Home</a> - Shop
          </nav>
          <div className="header-title w-full md:w-auto">
            <h1 className='uppercase text-6xl font-extrabold'>Products</h1>
          </div>
          <p className='result-number mb-[48px] w-full float-left md:mt-0 md:mb-[1em] md:mx-0'>
            Showing all 12 results
          </p>
          <form className='mb-6 w-full md:w-[250px] md:ml-auto md:mr-0'>
            <select  className=' mb-6 w-full align-top max-w-full border text-text-color text-[15px] h-11 appearance-none pl-[25px] rounded-[22px] border-solid border-gray-color outline-none font-lato bg-chevron-down-bg bg-[right_center] bg-no-repeat' name="orderby" id="">
            <option value="menu_order" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' >Default sorting</option>
            <option value="menu_order" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' >Sort by popularity</option>
            <option value="menu_order" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' >Sort by average rating</option>
            <option value="menu_order" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' >Sort by latest</option>
            <option value="menu_order" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' >Sort by price: low to high</option>
            <option value="menu_order" className='h-10 border rounded text-text-color w-full px-3 py-1.5 border-solid border-[#ccc]' >Sort by price: high to low</option>
            </select>
          </form>
          <div className="product__list mb-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-7">
          {burgersData.map((burger) => (
            <div key={burger.id} className="product-item  text-center">
              <ProductItem {...burger}/>
            </div>    
          ))}
          </div>
        </div>
          <Sidebar/>
      </div>
    </div>
  )
}

export default Products