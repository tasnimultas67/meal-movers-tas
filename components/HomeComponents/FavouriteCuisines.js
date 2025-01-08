import Image from "next/image";
import Link from "next/link";
import React from "react";

const cuisine = {
  cuisinTitle: "Burger",
  cuisinImg:
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const FavouriteCuisines = () => {
  const timesToShow = 7;
  const cuisinesTotal = new Array(timesToShow).fill(cuisine);

  return (
    <div className="grid grid-cols-7 gap-2">
      {cuisinesTotal.map((cuisin, index) => (
        <Link href="#" key={index} className="">
          <div className="border rounded-xl overflow-hidden group/cuisineCard hover:border-themeColor bg-gray-50">
            <div className="overflow-hidden">
              <Image
                className="h-28 object-cover group-hover/cuisineCard:scale-110 transition-all"
                src={cuisin.cuisinImg}
                width={200}
                height={200}
                alt="Cuisine Image"
              />
            </div>
            <div className="p-2">
              <h2 className="font-semibold text-sm">{cuisin.cuisinTitle}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FavouriteCuisines;
