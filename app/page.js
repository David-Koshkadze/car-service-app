import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Image from "next/image";
import Services from "@/components/services";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full border pt-16 relative">
        <h1 className="text-3xl text-center mb-8">რატომ მანქანის სერვისი?</h1>

        <div className="grid place-content-center gap-4 p-6 relative">
          <div className="bg-transparent border border-blue-300 hover:bg-blue-300 rounded-md flex items-center p-4 gap-4 shadow-md md:-translate-x-40 hover:scale-110 transition">
            <Image src="/icons/car.svg" width={100} height={100} />
            <span>სრული მომსახურება</span>
          </div>
          <div className="bg-transparent border border-fuchsia-300 hover:bg-fuchsia-300 rounded-md flex items-center p-4 gap-4 shadow-md hover:scale-110 transition">
            <Image src="/icons/big-truck.svg" width={100} height={100} />
            <span>ხარისხი და სანდოობა</span>
          </div>
          <div className="bg-transparent border border-emerald-300 hover:bg-emerald-300 rounded-md flex items-center p-4 gap-4 shadow-md md:translate-x-40 hover:scale-110 transition">
            <Image src="/icons/rocket.svg" width={100} height={100} />
            <span>სისწრაფე და ეფექტურობა</span>
          </div>
        </div>

        <Image
          src="/icons/navigator.svg"
          width={400}
          height={400}
          className="absolute bottom-0 hidden lg:w-[500px] lg:block md:translate-x-12 lg:translate-x-1/3 -z-10"
        />

        <Image
          src="/images/towing.jpg"
          width={600}
          height={600}
          className="absolute top-12 right-0 hidden lg:w-[400px] lg:block -md:translate-x-12 lg:-translate-x-1/3 -z-10"
        />
      </div>

      <Services />

      <About />

      <Partners />
    </>
  );
}
