import RestaurantCard from "@/components/RestaurantCard";
import React from "react";

const Page = async () => {
  const fs = require("fs").promises;

  const file = await fs.readFile(
    process.cwd() + "/lib/restaurants.json",
    "utf8"
  );
  const restaurantsData = JSON.parse(file);

  return (
    <div className="w-11/12 m-auto py-28 pb-10">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {restaurantsData.map((restData) => (
            <RestaurantCard
              key={restData.restTitle}
              restData={restData}
            ></RestaurantCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
