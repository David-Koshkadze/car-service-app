"use client";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div class="h-auto flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 hover:shadow-md cursor-pointer dark:border-gray-700">
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        Icon
      </div>

      <div class="my-3">
        <h3 class="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>

      <div>
        {description}
      </div>
    </div>
  );
}
