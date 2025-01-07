import React from "react";
import DeliverLocationCard from "../DeliverLocationCard";

const deliverLocation = {
  placeName: "Dhaka",
  placeImg:
    "https://images.unsplash.com/photo-1719937206098-236a481a2b6d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const DeliverLocation = () => {
  const timesToShow = 12;
  const deliverLocationsTotal = new Array(timesToShow).fill(deliverLocation);

  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {deliverLocationsTotal.map((location, index) => (
          <DeliverLocationCard key={index} location={location} />
        ))}
      </div>
    </div>
  );
};

export default DeliverLocation;
