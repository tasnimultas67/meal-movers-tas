import Image from "next/image";
import React from "react";

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
