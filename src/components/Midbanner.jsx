import React, { useState, useEffect } from "react";

const Midbanner = ({ banners }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#c72f57] pb-4">
      <div className="relative w-full max-w-[1600px] px-4 lg:px-16 overflow-hidden">
        
        {/* CLICKABLE BANNER */}
        <a
          href="https://wa.me/917891015303"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          <img
            src={banners[current]}
            alt="Home Banner"
            className="w-full h-[200px] md:h-[420px] lg:h-[520px] xl:h-[600px] object-center transition-all duration-500 overflow-hidden rounded-lg"
          />
        </a>

      </div>
    </section>
  );
};

export default Midbanner;
