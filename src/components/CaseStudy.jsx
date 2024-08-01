import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const CaseStudy = () => {

    return (
        <Swiper
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          navigation
        className='w-full container mx-auto mt-9'>
          <SwiperSlide>
            <div className="p-4 bg-gray-800 text-white rounded-lg">
              <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
              <a href="#" className="text-green-500">Learn more →</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-gray-800 text-white rounded-lg">
              <p>For B2B software compnay, we developed an SEO strategy that resulted in a first page ranking for keywords and a 200% increase in organic traffic. </p>
              <a href="#" className="text-green-500">Learn more →</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-gray-800 text-white rounded-lg">
              <p>For a national retail chain, we created a social media markeitng campaign that incresed followers by 25% and generated 20% increase in online sales.</p>
              <a href="#" className="text-green-500">Learn more →</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-gray-800 text-white rounded-lg">
              <p>For a national retail chain, we created a social media markeitng campaign that incresed followers by 25% and generated 20% increase in online sales.</p>
              <a href="#" className="text-green-500">Learn more →</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-gray-800 text-white rounded-lg">
              <p>For a national retail chain, we created a social media markeitng campaign that incresed followers by 25% and generated 20% increase in online sales.</p>
              <a href="#" className="text-green-500">Learn more →</a>
            </div>
          </SwiperSlide>
        </Swiper>
  )
}

export default CaseStudy
