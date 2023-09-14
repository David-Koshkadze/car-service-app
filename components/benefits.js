import Image from "next/image";

export default function Benefits() {
  return (
    <div className="w-full pt-16 relative">
      <h1 className="text-3xl text-center mb-8">
        რატომ უნდა აირჩიოთ{" "}
        <span className="text-violet-700 font-bold">Tow.ge</span>
      </h1>

      <div className="grid place-content-center gap-4 p-6 relative">
        <div className="bg-transparent border border-blue-300 hover:bg-blue-300 rounded-md flex items-center p-4 gap-4 shadow-md md:-translate-x-40 hover:scale-110 transition">
          <Image
            alt="car"
            src="/icons/car.svg"
            width={100}
            height={100}
            priority={true}
          />
          <span>სრული მომსახურება</span>
        </div>
        <div className="bg-transparent border border-fuchsia-300 hover:bg-fuchsia-300 rounded-md flex items-center p-4 gap-4 shadow-md hover:scale-110 transition">
          <Image
            alt="truck"
            src="/icons/big-truck.svg"
            width={100}
            height={100}
            priority={true}
          />
          <span>ხარისხი და სანდოობა</span>
        </div>
        <div className="bg-transparent border border-emerald-300 hover:bg-emerald-300 rounded-md flex items-center p-4 gap-4 shadow-md md:translate-x-40 hover:scale-110 transition">
          <Image
            alt="rocket"
            src="/icons/rocket.svg"
            width={100}
            height={100}
            priority={true}
          />
          <span>სისწრაფე და ეფექტურობა</span>
        </div>
      </div>

      <Image
        src="/icons/navigator.svg"
        width={400}
        height={400}
        className="absolute bottom-0 hidden lg:w-[500px] lg:block md:translate-x-12 lg:translate-x-1/3 -z-10"
        alt="navigator"
        priority={true}
      />

      <Image
        src="/images/towing.jpg"
        width={600}
        height={600}
        className="absolute top-12 right-0 hidden lg:w-[400px] lg:block -md:translate-x-12 lg:-translate-x-1/3 -z-10"
        alt="towing-img"
        priority={true}
      />
    </div>
  );
}
