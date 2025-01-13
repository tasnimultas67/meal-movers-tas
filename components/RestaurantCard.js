import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestaurantCard = ({ restData }) => {
  return (
    <>
      <Link href={`/restaurants/${restData.restTitle}`}>
        <div className="relative bottom-0 left-0 group/restHover overflow-hidden">
          <div className="shrink-0 relative rounded-lg overflow-hidden w-full h-[10rem] md:h-[14rem] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
            <Image
              width={500}
              height={500}
              className="absolute top-0 left-0 object-cover object-center h-full m-auto group-hover/restHover:scale-110 transition"
              src={restData.restCover}
              alt="Portfolio Image"
            />
          </div>
          <div className="absolute inset-x-2 inset-y-2 flex items-end justify-start z-10 w-full">
            <div className="p-2 text-white">
              <h3 className="text-lg font-semibold">{restData.restTitle}</h3>

              <div className="text-sm flex items-center justify-between gap-3">
                <p className=" flex items-center justify-start gap-1">
                  <Star className="size-3 fill-white"></Star>
                  {restData.restRating}
                </p>
                <p className="bg-themeColor/70 text-xs py-0.5 rounded px-2">
                  Min Ord {restData.restMmOrder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RestaurantCard;
