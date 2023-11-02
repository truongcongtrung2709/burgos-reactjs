import Introduce from './Introduce'
import OurFeatures from './OurFeatures/OurFeatures'
import ClientsAboutUs from './ClientsAboutUs'
import FastOrder from './FastOrder'
import Albums from './Albums'
import Banner from '../../components/Banner'

const About = () => {
const bannerInfo = {
  name: 'About',
  description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
  bannerImg : 'assets/images/contact-bg.webp'
}
  return (
    <div className='bg-body-background bg-center bg-repeat'>
      <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg} />
      <Introduce/>
      <OurFeatures/>
      <ClientsAboutUs/>
      <FastOrder/>
      <Albums/>
    </div>
  )
}

export default About