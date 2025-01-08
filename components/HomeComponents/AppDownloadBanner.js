import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppDownloadBanner = () => {
  return (
    <section>
      <div className="w-full m-auto bg-themeColor p-10 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="w-[80%] space-y-3">
            <div className=" text-4xl font-bold text-white">
              <h2 className="">For better experience,</h2>
              <h2>Download the Meal Movers app now</h2>
            </div>
            <p className="w-10/12 text-sm text-gray-50">
              It's all at your fingertips – the restaurants and shops you love.
              Find the right food to suit your mood, and make the first bite
              last. Go ahead, download us.
            </p>
            <div className="flex items-center gap-2">
              <Link href="https://tasnimul.vercel.app/" target="_blank">
                <Image
                  className=""
                  src="/google-play.svg"
                  width={120}
                  height={50}
                  alt="Google Play Store"
                />
              </Link>
              <Link href="https://tasnimul.vercel.app/" target="_blank">
                <Image
                  src="/app-store.svg"
                  width={120}
                  height={50}
                  alt="Apple App Store"
                />
              </Link>
            </div>
          </div>

          <div className="w-[20%]">
            <div className="bg-white p-6 pb-4 rounded-xl space-y-2 shadow-2xl">
              <Image
                className=" border-2 rounded-md border-themeColor"
                src="/qrcode_tasnimul.vercel.app.png"
                width={500}
                height={500}
                alt="App Download QR Code"
              ></Image>
              <p className="text-xs text-center">Scan to Download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
