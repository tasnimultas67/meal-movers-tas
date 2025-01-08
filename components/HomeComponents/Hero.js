import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center border-b w-11/12 m-auto">
      <div className=" space-y-6 ">
        <h1 className="text-6xl font-bold">
          Savor Every Bite, Delivered Right
        </h1>
        <p className="w-8/12 text-sm text-gray-700">
          Whether you're in the mood for comfort food, healthy options, or
          gourmet dishes, we guarantee a seamless and timely delivery, so you
          can enjoy every bite without any hassle.
        </p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Find your address"
            className="border border-black p-2 text-sm w-6/12 rounded-tl rounded-bl"
          />
          <button className="bg-black p-[0.68rem] rounded-tr rounded-br">
            <MagnifyingGlassIcon className="size-4 text-white" />
          </button>
        </div>
      </div>
      {/* Hero Fectured Image */}
      <div className="flex items-center justify-center">
        <div className="relative top-0">
          <div className="p-14 bg-themeColor/20 rounded-2xl">
            <Image
              className="size-[20rem] object-cover object-top rounded-2xl"
              width={500}
              height={500}
              alt="Meal Movers Image"
              src="https://plus.unsplash.com/premium_photo-1683983983955-fb43ce4f0d9b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="px-3 py-1 text-xs bg-themeColor text-white w-fit rounded-md absolute bottom-5 -left-14">
            1000+ Restaurants
          </div>
          <div className="px-3 py-1 text-xs bg-themeColor text-white w-fit rounded-md absolute top-5 -right-14">
            1000+ Restaurants
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
