import Image from "next/image";
import React from "react";

const DeliverLocationCard = ({ location }) => {
  return (
    <div className="relative bottom-0 left-0 group/locationHover">
      <div className="shrink-0 relative rounded-lg overflow-hidden w-full h-[10rem] md:h-[14rem] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
        <Image
          width={500}
          height={500}
          className="absolute top-0 left-0 object-cover object-center h-full m-auto group-hover/locationHover:scale-110 transition"
          src={location.placeImg}
          alt="Portfolio Image"
        />
      </div>
      <div className="absolute inset-x-2 inset-y-2 flex items-end justify-start z-10">
        <div className="p-2 text-white">
          <h3 className="text-lg font-semibold">{location.placeName}</h3>
          <p className="text-sm">23 Restaurants</p>
        </div>
      </div>
    </div>
  );
};

export default DeliverLocationCard;
