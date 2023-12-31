import Link from "next/link";
import Modal from "./modal";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden md:flex absolute -top-96 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>

      <video autoPlay loop muted className="relative md:absolute">
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 md:h-[30rem]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Tow.ge - შენი მანქანის სერვისი
            </p>

            <div className="my-8">
              <h1 className="inline-block py-2 text-4xl md:text-5xl lg:text-6xl mb-4 bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Tow.ge
              </h1>
              <h1 className="font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                ევაკუატორის მომსახურება
              </h1>
            </div>

            <div className="my-8 text-center">
              <p className="text-center text-lg font-bold text-gray-700 dark:text-gray-400">
                საუკეთესო მანქანის სერვისი მთელს საქართველოში.
              </p>
            </div>

            <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
              <Link
                className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                href="/services"
              >
                სერვისები
                <svg
                  className="w-3 h-3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
