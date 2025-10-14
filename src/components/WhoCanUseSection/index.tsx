import React from "react";
import Image from "next/image";

const WHO_CAN_USE_ITEMS = [
  {
    title: "Retail Shops and Market Vendors",
    image: "/images/thumb-can-use-1.jpg",
  },
  {
    title: "Restaurants, cafés, and food stalls",
    image: "/images/thumb-can-use-2.jpg",
  },
  {
    title: "Service providers and freelancers",
    image: "/images/thumb-can-use-3.jpg",
  },
  {
    title: "Franchise businesses and cooperatives",
    image: "/images/thumb-can-use-4.jpg",
  },
  {
    title: "Online stores and delivery services",
    image: "/images/thumb-can-use-5.jpg",
  },
];

const WhoCanUseSection = () => {
  return (
    <section>
      <article className="w-full max-w-[1280px] mx-auto text-center mb-[150px]">
        <h2 className="text-5xl font-[900]">
          Who Can Use <span className="text-primary">GraciaPay?</span>
        </h2>
        <p className="text-lg font-[400] mt-6">
          We serve a wide range of businesses
        </p>
      </article>
      <div className="w-full h-[300px] bg-dark-blue">
        <ul className="flex items-center gap-4 mx-auto justify-center relative top-[-100px]">
          {WHO_CAN_USE_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-2 w-[260px] h-[260px] bg-primary p-4"
            >
              <figure className="block">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={230}
                  height={160}
                />
                <figcaption className="text-lg text-white text-center mt-2 font-[500]">
                  {item.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="text-lg font-[400] mt-[-50px] text-center text-white">
          If you’re a Philippine-registered business with a bank account and
          valid documents, you can start in just 1–3 days.
        </p>
      </div>
    </section>
  );
};

export default WhoCanUseSection;
