import React from "react";

export const metadata = {
  title: "Contact Us — Meal Movers",
  description:
    "Meal Movers is a premier food delivery service dedicated to bringing delicious meals right to your doorstep. We partner with a wide range of local restaurants and eateries to offer a diverse menu that caters to all tastes and dietary preferences. Whether you're craving comfort food, healthy options, or gourmet dishes, Meal Movers ensures a seamless and timely delivery experience. Our mission is to make mealtime convenient and enjoyable, so you can focus on what matters most.",
};

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center w-11/12 m-auto ">
      <div className="text-center space-y-5">
        <h2 className="text-5xl font-bold">Contact Us</h2>
        <p className="text-sm w-full md:w-7/12 m-auto">
          We'd love to hear from you! Whether you have questions, feedback, or
          need assistance, feel free to reach out to us. You can contact us via
          phone at +880012345678910 or email at info@mealmovers.vercel.app. Our
          team is here to help!
        </p>
      </div>
    </div>
  );
};

export default page;
