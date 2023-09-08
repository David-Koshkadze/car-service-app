import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <h1>რატომ მანქანის სერვისი?</h1>
      <div className="bg-green-200 w-full grid place-content-center gap-4 p-6 relative">
        <div className="bg-white rounded-md flex items-center p-4 gap-4 shadow-md -translate-x-32 hover:scale-110 transition">
          <Image 
            src="/icons/car.svg" 
            width={100}
            height={100}
          />
          <span>სრული მომსახურება</span>
        </div>
        <div className="bg-white rounded-md flex items-center p-4 gap-4 shadow-md hover:scale-110 transition">
          <Image 
            src="/icons/big-truck.svg" 
            width={100}
            height={100}
          />

          <span>ხარისხი და სანდოობა</span>
        </div>

        <div className="bg-white rounded-md flex items-center p-4 gap-4 shadow-md translate-x-32 hover:scale-110 transition">
          <Image 
            src="/icons/rocket.svg" 
            width={100}
            height={100}
          />

          <span>სისწრაფე და ეფექტურობა</span>
        </div>
      </div>
      <Partners />
    </>
  );
}
