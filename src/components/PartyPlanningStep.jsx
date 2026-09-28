import React from "react";

const steps = [
  {
    title: "Decide the Occasion & Purpose",
    desc: "Identify the type of party—birthday, anniversary, kids party, proposal, baby shower, or surprise celebration.",
  },
  {
    title: "Set a Budget",
    desc: "Fix a clear budget covering décor, food, cake, entertainment, and any special arrangements.",
  },
  {
    title: "Choose Date, Time & Venue",
    desc: "Select a suitable date and time, and finalize a venue that fits your guest count and theme.",
  },
  {
    title: "Create a Guest List",
    desc: "Prepare a guest list and decide whether the celebration will be intimate or grand.",
  },
  {
    title: "Plan Theme & Decorations",
    desc: "Choose a theme, color palette, and decoration style that matches the occasion.",
  },
  {
    title: "Arrange Food & Entertainment",
    desc: "Finalize catering, cake, music, games, or live entertainment to keep guests engaged.",
  },
  {
    title: "Finalize & Enjoy the Celebration",
    desc: "Confirm all bookings, do a final check, and enjoy a stress-free celebration.",
  },
];

const PartyPlanningSteps = () => {
  return (
    <section className="w-full bg-[#F58F2B] px-4 sm:px-8 lg:px-16 py-14">
      <div className="max-w-5xl">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold mb-10 flex items-center justify-center gap-3">
          🎉 <span>Step-by-Step Party Planning Guide</span>
        </h2>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index}>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3">
                Step {index + 1}: {step.title}
              </h3>

              <p className="text-black text-base text-lg md:text-xl leading-relaxed max-w-4xl">
                {step.desc}
              </p>

              {/* Divider */}
              {index !== steps.length - 1 && (
                <div className="w-screen border-b border-gray-800 mt-10 -ml-4 sm:-ml-8 lg:-ml-24" />

              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartyPlanningSteps;
