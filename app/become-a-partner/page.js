import { CheckBadgeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Partner With Us — Meal Movers",
  description:
    "Join Meal Movers and boost your revenue by becoming our partner! We''re dedicated to delivering the best dining experiences to our customers,and we need your help to make it happen. By partnering with us, you'll gain access to a wider audience, dedicated support, and flexible options to suit your business needs. Sign up today and let's grow together!",
};

const advantages = [
  {
    advTitle: "More Revenue",
    advDetails:
      "You will have an extra source of income with Meal Movers. Our clients are always looking for the newest, hippest eateries in their area.",
  },
  {
    advTitle: "Dedicated Support",
    advDetails:
      "We will help you at every stage, from improving your delivery menu and generating weekly reports to improving your performance.",
  },
  {
    advTitle: "Constant Flexibility",
    advDetails:
      "If you're feeling overwhelmed pause orders. You make the final decision!",
  },
];

const howItW = [
  {
    info: "The customer chooses a nearby restaurant or shop and inputs a delivery address via the app or website.",
  },
  {
    info: "The restaurant or store uses the tablet that foodi provides to take orders, and they immediately begin preparing the order.",
  },
  {
    info: "Within 30 minutes of the order being placed, our rider shows up on time to pick it up and delivers it.",
  },
  {
    info: "Each month, Foodi sends you money earned from your orders and gives you full performance data",
  },
];
const page = () => {
  return (
    <div className="w-11/12 m-auto py-32 space-y-10">
      <div className="space-y-5 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Partner With Us</h1>
        <p className="w-8/12 m-auto text-sm">
          Join Meal Movers and boost your revenue by becoming our partner! We're
          dedicated to delivering the best dining experiences to our customers,
          and we need your help to make it happen. By partnering with us, you'll
          gain access to a wider audience, dedicated support, and flexible
          options to suit your business needs. Sign up today and let's grow
          together!
        </p>
      </div>
      {/* Steps */}
      <div className="space-y-7">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Steps to Activation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-10/12 m-auto">
          <div className="bg-themeColor/10 p-4 rounded-xl text-center space-y-5 border border-themeColor/30">
            <div>
              <p className="text-sm">Step</p>
              <h3 className="text-5xl font-bold">01</h3>
            </div>
            <p className="text-sm">Sign up online</p>
          </div>
          <div className="bg-themeColor/10 p-4 rounded-xl text-center space-y-5 border border-themeColor/30">
            <div>
              <p className="text-sm">Step</p>
              <h3 className="text-5xl font-bold">02</h3>
            </div>
            <p className="text-sm">Foodi concern person will contact</p>
          </div>
          <div className="bg-themeColor/10 p-4 rounded-xl text-center space-y-5 border border-themeColor/30">
            <div>
              <p className="text-sm">Step</p>
              <h3 className="text-5xl font-bold">03</h3>
            </div>
            <p className="text-sm">Sign the contract</p>
          </div>
          <div className="bg-themeColor/10 p-4 rounded-xl text-center space-y-5 border border-themeColor/30">
            <div>
              <p className="text-sm">Step</p>
              <h3 className="text-5xl font-bold">04</h3>
            </div>
            <p className="text-sm">Go Live on Meal Movers</p>
          </div>
        </div>
      </div>
      {/* Advantage of Joining Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-24 gap-20">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold tracking-tight">
            Advantage of Joining Us
          </h2>
          <div className="space-y-2">
            {/* Single Advantage */}
            {advantages.map((adv) => (
              <div
                key={adv.advTitle}
                className="flex gap-1 items-start justify-start bg-themeColor/10 p-3 rounded-lg"
              >
                {/* Icon */}
                <CheckBadgeIcon className="size-5 text-themeColor"></CheckBadgeIcon>
                {/* Info */}
                <div className="">
                  <h2 className="font-semibold text-base tracking-tight">
                    {adv.advTitle}
                  </h2>
                  <p className="text-xs/5">{adv.advDetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Featured Image */}
        <div className="relative top-0">
          <div className="p-14 bg-themeColor/10 rounded-xl">
            <Image
              className="h-[26rem] object-cover object-center rounded-2xl shadow-xl"
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={500}
              alt="Advantage of Joining Us Image"
            />
          </div>
          <div className="px-3 py-1 text-xs bg-themeColor text-white w-fit rounded-md absolute bottom-5 -left-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold">1000+</h2>
            <p>Restaurants</p>
          </div>
          <div className="px-3 py-1 text-xs bg-themeColor text-white w-fit rounded-md absolute top-5 -right-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold">500+</h2>
            <p>Reviews</p>
          </div>
        </div>
      </div>
      {/* How it Works */}
      <div className="space-y-10 py-10">
        <h2 className="text-4xl font-bold text-center tracking-tight">
          How it Works
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {howItW.map((sWork, index) => (
            <div
              key={index}
              className="bg-themeColor/10 p-5 rounded-xl space-y-4 text-center border border-themeColor/20"
            >
              {/* Icon */}
              <RocketLaunchIcon className="size-6 text-themeColor m-auto"></RocketLaunchIcon>
              {/* Info */}
              <p className="text-sm text-gray-700">{sWork.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
