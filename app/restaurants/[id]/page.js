"use client";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules"; // Removed A11y

const foods = [
  "Salad",
  "Sandwich",
  "Bread",
  "Steak",
  "Tuna Steak",
  "Fish",
  "Shrimp",
  "Rice",
  "Spaghetti",
  "Pizza",
  "Hamburger",
  "Eggs",
  "Cheese",
  "Sausages",
  "Apple Juice",
  "Grape Juice",
  "Milk",
  "Candy",
  "CookiePie",
  "Cake",
  "Cupcake",
];

const Page = () => {
  return (
    <div className="w-11/12 m-auto py-20 pb-10 space-y-3">
      {/* Restaurant Single Page Hero Section */}
      <div className="relative bottom-0 left-0 group/restHover overflow-hidden">
        <div className="shrink-0 relative rounded-lg overflow-hidden w-full h-[20rem] md:h-[20rem] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
          <Image
            width={1600}
            height={500}
            className="absolute top-0 left-0 object-cover object-center h-full m-auto transition"
            src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Portfolio Image"
          />
        </div>
        <div className="absolute left-0 bottom-0 right-0 flex items-end justify-center md:justify-start z-10 w-full p-4">
          <div className="flex flex-col md:flex-row items-center justify-start gap-3">
            {/* Restaurant Profile Picture */}
            <div className="p-1 bg-white rounded-lg shadow-2xl">
              <Image
                className="size-20 rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Restaurant Profile Picture"
                width={500}
                height={500}
              ></Image>
            </div>
            {/* Restaurant Information */}
            <div className="text-white space-y-3 text-center md:text-left">
              <h3 className="text-4xl font-semibold tracking-tight">
                Burger House
              </h3>
              <div className="text-sm flex items-center justify-between gap-3">
                <p className="flex items-center justify-start gap-1">
                  <MapPin className="size-3.5"></MapPin>
                  House 9, Block B, Banani, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Food Tabs */}
      <div className="bg-themeColor/10 p-2 rounded-md">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {foods.map((food) => (
            <SwiperSlide
              key={food}
              className="flex-none w-48 h-48 bg-red-200 m-2 flex items-center justify-center rounded"
            >
              {food}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
