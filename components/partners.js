import React from "react";

export default function Partners() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
          პარნტიორები
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
          <div
            className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800"
            key={idx}
          >
            Company
          </div>
        ))}
      </div>
    </div>
  );
}
