"use client";
import { EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const companyInfo = [
  { pageTitle: "Home", url: "/" },
  { pageTitle: "About Us", url: "/about-us" },
  { pageTitle: "Contact Us", url: "/contact-us" },
  { pageTitle: "Press", url: "/" },
  { pageTitle: "How Meal Movers works", url: "/" },
  { pageTitle: "Download apps", url: "/" },
  { pageTitle: "Careers", url: "/" },
  { pageTitle: "Help & support", url: "/" },
];

const companyHelps = [
  { pageTitle: "Partner with us", url: "/" },
  { pageTitle: "Ride with us", url: "/" },
  { pageTitle: "Terms & conditions", url: "/" },
  { pageTitle: "Refund & cancellation", url: "/" },
  { pageTitle: "Privacy policy", url: "/" },
  { pageTitle: "Rider Privacy policy", url: "/" },
  { pageTitle: "Partner Privacy policy", url: "/" },
  { pageTitle: "Security policy", url: "/" },
];

const companyOffers = [
  { pageTitle: "Food delivery", url: "/" },
  { pageTitle: "Pick-up", url: "/" },
  { pageTitle: "Dine-in", url: "/" },
  { pageTitle: "Flowers delivery", url: "/" },
  { pageTitle: "Super Meal Movers subscription", url: "/" },
  { pageTitle: "Meal Movers deals", url: "/" },
  { pageTitle: "Reward programms", url: "/" },
  { pageTitle: "Terms Of Referral and Condition", url: "/" },
];

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  const pathName = usePathname();
  return (
    <div>
      <footer className="bg-slate-950 w-[98%] m-auto p-6 pb-3 mb-2 rounded-lg pt-8">
        <div className="space-y-3 border-b border-white/10 pb-4">
          <div className="w-fit">
            <Link
              href="/"
              className="font-bold tracking-tight text-3xl flex items-center text-white"
            >
              <svg className="text-theme size-10 fill-themeColor -scale-75">
                <path
                  fill=""
                  d="M 22.417969 34.070312 C 18.570312 34.949219 14.320312 34.171875 11.195312 31.703125 C 8.800781 29.808594 8.1875 27.402344 8.828125 24.957031 C 10.6875 17.890625 16.890625 17.324219 20.660156 13.726562 C 24.207031 10.339844 23.5625 6.855469 19.679688 6.910156 C 17.546875 6.941406 15.890625 7.878906 14.0625 8.898438 C 11.128906 10.527344 6.789062 13.539062 4.65625 18.277344 C 3.449219 20.957031 3.105469 23.464844 3.8125 26.3125 C 5.90625 34.722656 15.652344 37.109375 22.738281 35.101562 C 22.84375 35.277344 22.957031 35.410156 23.054688 35.503906 C 23.125 35.566406 23.203125 35.625 23.277344 35.683594 C 27.59375 38.972656 33.671875 32.402344 32.253906 29.835938 C 30.867188 27.332031 22.316406 28.601562 22.40625 33.835938 C 22.40625 33.867188 22.40625 33.898438 22.410156 33.929688 C 22.410156 33.976562 22.414062 34.023438 22.417969 34.070312 Z M 30.332031 33.105469 C 29.84375 33.691406 27.480469 35.765625 24.933594 35.121094 C 26.664062 35.871094 29.324219 34.449219 30.332031 33.105469 Z M 30.332031 33.105469 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
                <path
                  fill=""
                  d="M 17.769531 30.308594 C 19.90625 30.277344 21.5625 29.339844 23.390625 28.324219 C 26.324219 26.691406 30.664062 23.679688 32.796875 18.945312 C 34 16.265625 34.34375 13.757812 33.636719 10.910156 C 31.519531 2.386719 21.539062 0.046875 14.429688 2.199219 L 14.441406 2.210938 L 14.425781 2.195312 C 14.417969 2.199219 14.410156 2.203125 14.40625 2.210938 C 13.769531 1.769531 12.699219 1.246094 11.4375 1.519531 C 8.828125 2.082031 4.773438 4.859375 3.085938 6.289062 C 5.617188 5.015625 8.890625 3.566406 9.585938 3.519531 C 9.75 3.507812 9.859375 3.691406 9.796875 3.796875 C 9.730469 3.921875 9.464844 4.152344 8.660156 4.636719 L 3.933594 7.472656 C 6.988281 6.296875 8.933594 5.292969 9.867188 4.957031 C 10.289062 4.808594 10.5 4.789062 10.511719 4.960938 C 10.746094 5.167969 10.042969 5.558594 8.609375 6.355469 C 7.597656 6.921875 6.226562 7.683594 4.5625 8.726562 L 9.664062 6.640625 C 10.535156 6.285156 10.875 6.210938 11.015625 6.230469 C 11.136719 6.246094 11.21875 6.4375 11.109375 6.566406 C 10.65625 7.09375 7.539062 8.851562 5 10.113281 C 7.15625 9.617188 11.808594 8.03125 13.828125 6.28125 C 14.792969 5.441406 15.015625 4.253906 15.042969 3.472656 C 15.050781 3.464844 15.058594 3.460938 15.066406 3.457031 C 15.0625 3.355469 15.046875 3.25 15.023438 3.144531 L 15.027344 3.15625 C 18.878906 2.273438 23.128906 3.046875 26.257812 5.519531 C 28.652344 7.414062 29.265625 9.816406 28.625 12.265625 C 26.765625 19.332031 20.5625 19.898438 16.792969 23.492188 C 13.242188 26.882812 13.886719 30.367188 17.769531 30.308594 Z M 17.769531 30.308594 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
                <path
                  fill=""
                  d="M 34.503906 9.207031 C 35.242188 10.863281 37.574219 17.476562 31.875 25.019531 C 30.59375 26.714844 31.550781 26.898438 32.816406 25.757812 C 35.34375 23.488281 38.796875 18.265625 34.503906 9.207031 Z M 34.503906 9.207031 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
                <path
                  fill=""
                  d="M 2.496094 28.8125 C 1.761719 27.15625 -0.574219 20.542969 5.125 12.996094 C 6.40625 11.304688 5.453125 11.121094 4.183594 12.257812 C 1.65625 14.53125 -1.796875 19.75 2.496094 28.8125 Z M 2.496094 28.8125 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
              </svg>
              Meal <span className="text-themeColor ml-1.5">Movers</span>
            </Link>
          </div>
          {/* Company Information */}
          <div className="text-xs/5 text-white space-y-3">
            <p className=" text-xs/5 w-full md:w-9/12">
              At Meal Movers, we take pride in delivering a delightful dining
              experience straight to your door. Our diverse menu, crafted in
              partnership with local restaurants, ensures that every meal is a
              culinary adventure. Whether you're in the mood for comfort food,
              healthy options, or gourmet dishes, we guarantee a seamless and
              timely delivery, so you can enjoy every bite without any hassle.
            </p>
            <div className="space-y-1">
              <p className="flex items-start md:items-center justify-start gap-1">
                <PhoneIcon className="size-4"></PhoneIcon>{" "}
                <Link href="tel:+880012345678910">+880012345678910</Link>
              </p>
              <p className="flex items-start md:items-center justify-start gap-1">
                <EnvelopeIcon className="size-4"></EnvelopeIcon>
                <Link href="mailto:info@mealmovers.vercel.app">
                  info@mealmovers.vercel.app
                </Link>
              </p>
              <p className="flex items-start md:items-center justify-start gap-1">
                <HomeIcon className="size-4"></HomeIcon> House#711/7, Road#11,
                Baitul Aman Housing Society, Shyamoli, Dhaka-1207
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-white/10 py-8 grid grid-cols-2 gap-y-6 md:grid-cols-4">
          <ul className="space-y-2">
            {companyInfo.map((menu) => (
              <li key={menu.pageTitle} className={`list-none text-xs`}>
                <Link
                  href={menu.url}
                  className={`${
                    (menu.url === "/" && pathName === "/") ||
                    (menu.url !== "/" && pathName.includes(menu.url))
                      ? "text-themeColor"
                      : ""
                  } text-white hover:text-themeColor w-fit`}
                >
                  {menu.pageTitle}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {companyInfo.map((menu) => (
              <li key={menu.pageTitle} className="list-none text-xs">
                <Link
                  href={menu.url}
                  className={`${
                    (menu.url === "/" && pathName === "/") ||
                    (menu.url !== "/" && pathName.includes(menu.url))
                      ? "text-themeColor"
                      : ""
                  } text-white hover:text-themeColor w-fit`}
                >
                  {menu.pageTitle}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {companyOffers.map((menu) => (
              <li key={menu.pageTitle} className="list-none text-xs">
                <Link
                  href={menu.url}
                  className={`${
                    (menu.url === "/" && pathName === "/") ||
                    (menu.url !== "/" && pathName.includes(menu.url))
                      ? "text-themeColor"
                      : ""
                  } text-white hover:text-themeColor w-fit`}
                >
                  {menu.pageTitle}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {companyHelps.map((menu) => (
              <li key={menu.pageTitle} className="list-none text-xs ">
                <Link
                  href={menu.url}
                  className={`${
                    (menu.url === "/" && pathName === "/") ||
                    (menu.url !== "/" && pathName.includes(menu.url))
                      ? "text-themeColor"
                      : ""
                  } text-white hover:text-themeColor w-fit`}
                >
                  {menu.pageTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Copyright footer */}
        <div className="pt-3">
          <p className="text-xs text-white">
            ©{copyrightYear} Meal Movers. All Rights Reserved. Developed by{" "}
            <Link href="https://tasnimul.vercel.app/">Tasnimul Haque</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
