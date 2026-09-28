import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Planner",
    img: "/party/party1.jpg",
    desc: `A wedding celebration is a joyful union of love, tradition, and togetherness.`,
  },
  {
    title: "Birthday Party Organizer",
    img: "/party/party2.jpg",
    desc: `A birthday celebration is a cheerful moment filled with joy, laughter, and happiness.`,
  },
  {
    title: "Corporate Event Planner",
    img: "/party/party3.jpg",
    desc: `A corporate event is a professional gathering designed to inspire collaboration, innovation, and growth.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const PartyPlanning = () => {
  return (
    <section className="bg-[#c72f57] py-8 px-4 md:px-16 font-[Playfair_Display,Georgia,serif]">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[#f4b740] text-3xl md:text-5xl font-bold mb-12"
      >
        Party Planning
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative group"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg border-2 border-zinc-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[260px]  md:h-[320px] lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Book Now */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-[#f4b740]/70 text-black px-6 py-3 font-bold rounded-2xl hover:bg-white/70 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-[#f4b740] text-3xl font-bold mb-3 mt-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-white text-lg px-6 md:font-semibold">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartyPlanning;
