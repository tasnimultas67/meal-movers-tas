import React from "react";

export const metadata = {
  title: "Partner With Us — Meal Movers",
  description:
    "Join Meal Movers and boost your revenue by becoming our partner! We''re dedicated to delivering the best dining experiences to our customers,and we need your help to make it happen. By partnering with us, you'll gain access to a wider audience, dedicated support, and flexible options to suit your business needs. Sign up today and let's grow together!",
};

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
    </div>
  );
};

export default page;
