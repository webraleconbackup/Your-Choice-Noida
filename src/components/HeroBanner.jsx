import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/banner/banner1.jpg",
  "/banner/banner2.png",
  "/banner/servicearea.jpg",
  '/banner/midbanner.jpg'
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  // Auto fade slide (same like Uttam)
  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#c72f57] overflow-hidden">
      <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden lg:px-15">

        {/* FADE SLIDER */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] xl:h-[600px] rounded-xl overflow-hidden">
          {banners.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Home Banner"
              className={`
                absolute inset-0 w-full h-full object-center rounded-lg
                transition-opacity duration-1000 ease-in-out
                ${current === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 lg:left-20 top-1/2 -translate-y-1/2 bg-white/30 p-1 lg:p-2 rounded-full shadow z-20"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 lg:right-20 top-1/2 -translate-y-1/2 bg-white/30 p-1 lg:p-2 rounded-full shadow z-20"
        >
          <ChevronRight size={30} />
        </button>

      </div>
    </section>
  );
};

export default HomeBanner;
