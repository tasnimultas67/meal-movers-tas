import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Us — Meal Movers",
  description:
    "Meal Movers is a premier food delivery service dedicated to bringing delicious meals right to your doorstep. We partner with a wide range of local restaurants and eateries to offer a diverse menu that caters to all tastes and dietary preferences. Whether you're craving comfort food, healthy options, or gourmet dishes, Meal Movers ensures a seamless and timely delivery experience. Our mission is to make mealtime convenient and enjoyable, so you can focus on what matters most.",
};

const page = () => {
  return (
    <div className="pt-32 pb-20 w-[97%] m-auto">
      <section className="space-y-6">
        <h1 className="text-6xl font-bold tracking-tight text-center">
          Meal Movers Limited
        </h1>
        <p className="text-sm text-center w-10/12 m-auto">
          At Meal Movers, we take pride in delivering a delightful dining
          experience straight to your door. Our diverse menu, crafted in
          partnership with local restaurants, ensures that every meal is a
          culinary adventure. Whether you're in the mood for comfort food,
          healthy options, or gourmet dishes, we guarantee a seamless and timely
          delivery, so you can enjoy every bite without any hassle.
        </p>
        <Image
          className="h-[26rem] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1736265024403-01663c4862d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About us featured Image"
          width={1200}
          height={600}
        ></Image>
      </section>
    </div>
  );
};

export default page;
