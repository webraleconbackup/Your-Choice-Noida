import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const BottomPatty = () => {
  const phoneNumber = "917891015303"; // your number

  return (
    <section className="relative w-full bg-zinc-100 py-30 md:py-20">
      {/* Center Content */}
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#f4c430] mb-8">
          Talk to Our Event Experts
        </h2>

        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="inline-block bg-[#f4c430] hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg text-sm sm:text-base transition duration-300"
        >
          CALL NOW
        </a>
      </div>
    </section>
  );
};

export default BottomPatty;

