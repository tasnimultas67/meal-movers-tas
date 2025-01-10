import { CheckBadgeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Leckerli_One } from "next/font/google";
import Image from "next/image";
import React from "react";

const leckerliOne = Leckerli_One({
  weight: ["400"],
  subsets: ["latin"],
});

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
    <div className="w-11/12 m-auto py-32 pb-14 space-y-10">
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
        <div className="pt-10">
          <Image
            className="object-cover w-full h-[35rem] rounded-lg object-center"
            src="https://images.unsplash.com/photo-1695654686808-8e90bd2c6923?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Partner With Us Featured Image"
            width={1600}
            height={500}
          ></Image>
        </div>
      </div>
      {/* Steps */}
      <div className="space-y-7 py-20 pb-10">
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
      {/* Sign Up Form */}
      <div className="space-y-10">
        <div className="text-center w-8/12 m-auto space-y-6">
          <div className="space-y-7">
            <p
              className={`${leckerliOne.className} text-start -rotate-6 text-lg text-themeColor`}
            >
              Excited?
            </p>
            <h2 className="text-4xl font-bold">
              To become our partner and boost your revenue, complete the form
              below!
            </h2>
          </div>
          <p className="text-sm">
            We're craving the greatest things in life, like serving our
            customers the greatest food and updating the shopping experience.
            Foodi is a rapidly growing company that manages to retain its appeal
            as a locally focused service with a strong sense of community.
          </p>
        </div>
        <div className="bg-themeColor/10 p-10 rounded-lg border border-themeColor/20 w-10/12 m-auto">
          <form action="#" method="POST" className="space-y-3">
            <div>
              <label
                htmlFor="outletName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Outlet Name
              </label>
              <div className="">
                <input
                  id="outletName"
                  name="outletName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="enter your outlet name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
                />
              </div>
            </div>
            {/* Owner Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First Name
                </label>
                <div className="">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="enter your first name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Last Name
                </label>
                <div className="">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="enter your last Name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="enter your email address"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <div className="">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="enter your phone number"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            {/* Business Email & File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="businessEmail"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Business Email address
                </label>
                <div className="">
                  <input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="enter your business email address"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
                  />
                </div>
              </div>
              {/* File Uploads */}
              <div>
                <div>
                  <label
                    htmlFor="outletImg"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Outlet Images (Each image size max 2Mb)
                  </label>
                  <div className="">
                    <input
                      id="outletImg"
                      name="outletImg"
                      type="file"
                      required
                      autoComplete="file"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-3/12 justify-center rounded-md bg-themeColor px-3 py-1.5 text-sm/6 font-medium text-white shadow-sm hover:bg-themeColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-themeColor"
              >
                Submit Request
              </button>
            </div>
          </form>
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
      <div className="space-y-10 py-10 pb-0">
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
