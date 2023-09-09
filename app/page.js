import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Image from "next/image";
import Services from "@/components/services";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-gray-50 w-full py-16 relative h-screen">
        <h1 className="text-3xl text-center mb-8">რატომ მანქანის სერვისი?</h1>

        <div className="grid place-content-center gap-4 p-6 relative">
          <div className="bg-white border border-blue-500 rounded-md flex items-center p-4 gap-4 shadow-md md:-translate-x-40 hover:scale-110 transition">
            <Image src="/icons/car.svg" width={100} height={100} />
            <span>სრული მომსახურება</span>
          </div>
          <div className="bg-white border border-blue-500 rounded-md flex items-center p-4 gap-4 shadow-md hover:scale-110 transition">
            <Image src="/icons/big-truck.svg" width={100} height={100} />
            <span>ხარისხი და სანდოობა</span>
          </div>
          <div className="bg-white border border-blue-500 rounded-md flex items-center p-4 gap-4 shadow-md md:translate-x-40 hover:scale-110 transition">
            <Image src="/icons/rocket.svg" width={100} height={100} />
            <span>სისწრაფე და ეფექტურობა</span>
          </div>
        </div>

        <Image
          src="/icons/navigator.svg"
          width={400}
          height={400}
          className="absolute bottom-0 hidden md:w-[200px] lg:w-[400px] md:block md:translate-x-12 lg:translate-x-1/3"
        />

        <Image
          src="/icons/towing.svg"
          width={400}
          height={400}
          className="absolute top-12 right-0 hidden md:w-[200px] lg:w-[300px] md:block -md:translate-x-12 lg:-translate-x-1/3"
        />
      </div>

      <Services />

      <About />

      <Partners />
    </>
  );
}
