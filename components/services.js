import React from "react";
import ServiceCard from "./service-card";

const cardData = [
  {
    title: "ევაკუატორით მომსახურება",
  },
];

export default function services() {
  return (
    <div className="py-8">
      <h1 className="text-3xl text-center">სერვისები</h1>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <ServiceCard 
              id={idx}
              title="სერვისი"
              description="რაღაც სერვისი, ეფექტურად, სსერვისი ძალიან კარგი. არის სანდო და ეფექტური."
            />
          ))}
        </div>
      </div>
    </div>
  );
}
