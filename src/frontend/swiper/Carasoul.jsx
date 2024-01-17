import React from 'react'; import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carasol.css';
import { Autoplay} from 'swiper/modules';
import ro1 from '../../Assets/Images/ro1.jpg'
import ro2 from '../../Assets/Images/ro2.jpg'
import ro3 from '../../Assets/Images/ro4.jpg'
import ro4 from '../../Assets/Images/ro5.jpg'

const Carasoul = () => {


  return (
    <div className='swiper'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ro1} alt="pic" style={{height:"700px"}}/></SwiperSlide>
        <SwiperSlide><img src={ro2} alt="pic" style={{height:"700px"}}/></SwiperSlide>
        <SwiperSlide><img src={ro3} alt="pic" style={{height:"700px"}}/></SwiperSlide>
        <SwiperSlide><img src={ro4} alt="pic" style={{height:"700px"}}/></SwiperSlide>
        <SwiperSlide><img src={ro2} alt="pic" style={{height:"700px"}}/></SwiperSlide>
      </Swiper>

    </div >

  );

}

export default Carasoul;
