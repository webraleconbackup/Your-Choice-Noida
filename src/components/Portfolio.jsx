import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Portfolio = () => {
  const images = [
    '/portfolio/portfolio1.jpg',
    '/portfolio/portfolio2.jpg',
    '/portfolio/portfolio3.jpg',
    '/portfolio/portfolio4.jpg',
    '/portfolio/portfolio5.png',
    '/portfolio/portfolio6.png',
    '/portfolio/portfolio7.png',
    '/portfolio/portfolio8.png',
    '/portfolio/portfolio9.png',
    '/portfolio/portfolio10.png',
    '/portfolio/portfolio11.png',
    '/portfolio/portfolio12.png',
  ];

  return (
    <section className="w-full bg-[#c72f57] py-16">
      {/* HEADER */}
      <div className="text-center px-4 mb-12">
        <h2
          className="text-[#ffb703] text-4xl md:text-6xl font-extrabold tracking-wide"
          style={{ fontFamily: 'Playfair Display' }}
        >
          OUR PORTFOLIO
        </h2>

        <p
          className="text-white text-lg md:text-2xl mt-4 leading-relaxed max-w-4xl mx-auto"
          style={{ fontFamily: 'Playfair Display' }}
        >
          <span className="font-bold text-[#ffb703] text-2xl">Your Choice Event</span> captures{' '}
          <span className="text-white" style={{ fontFamily: 'Pacifico' }}>
            all of your
          </span>{' '}
          beautiful memories with elegance & style
        </p>
      </div>

      {/* IMAGE CAROUSEL USING SWIPER */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-16">
        <Swiper
          spaceBetween={30}
          slidesPerView={1} // Desktop default
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="group relative rounded-2xl overflow-hidden shadow-xl border-2 border-zinc-300">
                {/* IMAGE */}
                <img
                  src={img}
                  alt="Portfolio"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover transform group-hover:scale-110 transition-all duration-700"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href="tel:7891015303"
                    className="bg-[#ffb703]/40 text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-white/40 transition-all duration-300 shadow-lg"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
