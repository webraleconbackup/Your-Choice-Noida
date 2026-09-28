import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Follow({ images, title }) {
  return (
    <section className="bg-[#c72f57] py-6 pt-14 px-4 lg:px-20">
      <h2 className="text-white text-3xl lg:text-5xl md:text-6xl font-serif mb-12">
        {title}
      </h2>

      {/* GRID INSTEAD OF CAROUSEL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.85 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group overflow-hidden rounded-lg border-2 border-zinc-300"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-[320px] object-cover rounded-lg transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute top-4 left-4 flex gap-3 bg-white/60 px-3 py-1 rounded-md">
              <a href="#">
                <FaInstagram className="text-red-600 text-xl" />
              </a>
              <FaYoutube className="text-red-600 text-xl" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end md:pr-10 mt-6 md:mt-12">
        <button className="text-white text-3xl lg:text-5xl tracking-[4px] flex items-center gap-3">
          <span className="text-3xl lg:text-4xl">←</span> VIEW ALL
        </button>
      </div>
    </section>
  );
}

