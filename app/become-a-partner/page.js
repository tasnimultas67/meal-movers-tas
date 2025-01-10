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
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Steps to Activation
        </h2>
      </div>
    </div>
  );
};

export default page;
