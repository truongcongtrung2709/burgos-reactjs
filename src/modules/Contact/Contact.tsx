import Banner from '../../components/Banner'
import Zones from './Zones'
import Message from './Message'

const Contact = () => {
  const bannerInfo = {
    name: 'Contact',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/contact-bg.webp'
  }
  return (
    <div className='bg-white-color'>
    <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg}/>
    <Zones/>
    <Message/>
    </div>
  )
}

export default Contact