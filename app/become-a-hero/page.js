import FormRideWithUs from "@/components/FormRideWithUs";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { Hind_Siliguri } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="py-24 w-11/12 m-auto transition-all">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
        {/* Hero Information */}
        <div className={`${hindSiliguri.className} space-y-3`}>
          <h1 className={`text-5xl font-bold`}>
            আজই সাইন আপ করুন ও{" "}
            <span className="text-themeColor">মিল মুভার্স হিরো</span> পরিবারের
            অংশ হোন!
          </h1>
          <p>থাকছে ৪৫,০০০* টাকা পর্যন্ত আয় করার সুযোগ।</p>
          <div>
            <Link href="#createProfile">
              <button className="bg-black hover:bg-themeColor px-3 py-1.5 text-white rounded-md">
                ডেলিভারি শুরু করুন — আজই
              </button>
            </Link>
          </div>
        </div>
        {/* Featured Image */}
        <div className={`${hindSiliguri.className} relative top-0`}>
          <div className="p-14 rounded-2xl bg-themeColor/10 w-10/12 m-auto">
            <Image
              className="rounded-xl h-[26rem] object-cover shadow-2xl"
              src="https://plus.unsplash.com/premium_photo-1661547843345-e1ca800df0e0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={600}
              alt="Ride With Us Image"
            ></Image>
          </div>
          <div className="px-3 py-1 text-xs bg-themeColor text-white w-fit rounded-md absolute top-10 left-5 text-center shadow-lg">
            <h2 className="text-2xl font-bold">১০০০+</h2>
            <p>রেস্টুরেন্ট</p>
          </div>
          <div className="px-3 py-1 text-xs bg-themeColor text-white w-fit rounded-md absolute bottom-10 right-9 text-center shadow-lg">
            <h2 className="text-2xl font-bold">৫০০+</h2>
            <p>রিভিউস</p>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div
          className={`${hindSiliguri.className} bg-themeColor/20 p-10 rounded-2xl text-center`}
        >
          <h2 className="text-4xl text-center font-bold">
            নতুন রাইডারদের ১৭৫০ টাকা পর্যন্ত জয়েনিং বোনাস*
          </h2>
          <p>"মিল মুভার্স দিয়ে ডেলিভারি শুরু করুন, আজই"</p>
        </div>
      </div>
      {/* Registration Section */}
      <div className="py-10 bg-themeColor rounded-xl mt-20" id="createProfile">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
          <div className="relative top-0">
            <FormRideWithUs></FormRideWithUs>
            <div
              className={`${hindSiliguri.className} bg-white p-2 px-4 rounded-md w-fit absolute -top-5 left-0 `}
            >
              <p className="font-semibold">আপনার প্রোফাইল তৈরী করুন</p>
            </div>
          </div>
          <div className={`${hindSiliguri.className}`}>
            <div className="bg-white/40 p-3 pt-10 rounded-lg w-fit space-y-3 relative top-0 border border-white/60">
              <ClipboardDocumentIcon className="size-14 text-themeColor p-3 bg-white rounded-md absolute -top-5 -left-5"></ClipboardDocumentIcon>
              <p className="font-semibold">আবেদন সম্পূর্ণ করুনঃ</p>
              <ul>
                <li>১. আপনার প্রোফাইল তৈরী করুন</li>
                <li>২. আপনার ব্যক্তিগত তথ্য পূরণ করুন</li>
                <li>৩. আপনার যানবাহনের তথ্য পূরণ করুন</li>
                <li>৪. আমাদের সার্ভিস চুক্তিতে সম্মত হন</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
