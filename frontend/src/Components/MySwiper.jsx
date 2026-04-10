import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function MySwiper() {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      speed={600}
      parallax={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          backgroundImage: "url('src/assets/bg3.png')",
        }}
        data-swiper-parallax="-23%"
      ></div>

      {/* Testimonial 1 */}
      <SwiperSlide>
        <div className="p-4 shadow-sm rounded text-center">
          <p>"CareerSetu helped me land my dream job in just two weeks!"</p>
          <h6 className="fw-bold">— Priya Sharma</h6>
        </div>
      </SwiperSlide>

      {/* Testimonial 2 */}
      <SwiperSlide>
        <div className="p-4 shadow-sm rounded text-center">
          <p>"The platform is easy to use and full of opportunities."</p>
          <h6 className="fw-bold">— Rohan Mehta</h6>
        </div>
      </SwiperSlide>

      {/* Testimonial 3 */}
      <SwiperSlide>
        <div className="p-4 shadow-sm rounded text-center">
          <p>"As an employer, I found great talent quickly and efficiently."</p>
          <h6 className="fw-bold">— Neha Kapoor</h6>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
