import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="bg-[#c72f57] py-16 px-4 lg:px-16">
      <motion.div
        className="max-w-[1400px] mx-auto bg-white grid lg:grid-cols-2 gap-10 items-center p-6 md:p-10 rounded-lg"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* IMAGE */}
        <div className="w-full">
          <img
            src="/banner/elle.jpg"
            alt="Event Experience"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="text-black">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Enjoy The Best <br />
            Experience with Us
          </h2>

          <p
            className="text-[15px] md:text-[18px] leading-7 text-justify"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Are you looking for the best event planner in Noida and Delhi NCR to make your
            idea a reality? In Eventalist and Decor, we ensure that any event
            is memorable. We ensure that no event has had any hitches and is
            special. Whether you need a birthday planner in Noida for a fun
            party or a wedding planner in Delhi NCR to arrange your dream
            wedding, we can help. Of a small group as well as a large one, we
            are able to attend to each detail with a lot of care and love.
            Once you have settled on eventalist and decore, you are assured
            of a stress-free event and leave us to turn your special occasions
            into memories you will enjoy!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
