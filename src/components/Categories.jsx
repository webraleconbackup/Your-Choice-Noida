import React from "react";

const categories = [
  { title: "Customized Balloons", img: "/categories/customized.png" },
  { title: "Adult's Birthday", img: "/categories/adult.png" },
  { title: "Kid's Birthday", img: "/categories/kids.png" },
  { title: "New Born", img: "/categories/newborn.png" },
  { title: "Baby Shower", img: "/categories/babyshower.png" },
  { title: "Room Decor", img: "/categories/roomdecor.png" },
  { title: "Anniversary", img: "/categories/anniversary.png" },
  { title: "Marry Me Proposal", img: "/categories/proposal.png" },
];

const Categories = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Categories
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Find the perfect decoration for every special moment
          </p>
        </div>

        {/* Categories Grid */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-6 
            gap-x-6 
            gap-y-10
          "
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div
                className="
                  w-32 h-32 
                  rounded-full 
                  bg-white 
                  shadow-md 
                  overflow-hidden 
                  flex items-center justify-center
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-3 text-sm font-medium text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
