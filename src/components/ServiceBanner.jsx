import React from "react";

const ServiceBanner = ({bannerData}) => {
  return (
    <>
      {bannerData.map((item) => (
        <section
          key={item.id}
          className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[320px] overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
              {item.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg uppercase tracking-widest">
              <span className="text-pink-500 font-semibold">Home - </span>
              <span className="text-white">{item.breadcrumb}</span>
            </p>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceBanner;
