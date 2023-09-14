import Image from "next/image";
import Link from "next/link";

const footerServices = [
  { title: "ევაკუატორით მომსახურება" },
  { title: "მოტოციკლის წაყვანა" },
  { title: "დაიმპორტებული ავტომობილის ადგილზე მიყვანა" },
  { title: "საწვავის მიწოდება" },
];

const navItems = [
  {
    title: "მთავარი",
    path: "/",
  },
  {
    title: "სერვისები",
    path: "/services",
  },
  {
    title: "ჩვენს შესახებ",
    path: "/about",
  },
  {
    title: "ფოტო გალერეა",
    path: "/gallery",
  },
  {
    title: "კონტაქტი",
    path: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 bottom-0">
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <a
              className="flex-none text-xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            >
              <Image
                alt="footer logo"
                width={300}
                height={70}
                src="/logo/logo.png"
              />
            </a>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">მენიუ</h4>

            <div className="mt-3 grid space-y-3">
              {navItems.map((item, idx) => (
                <p key={idx}>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </p>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">სერვისები</h4>

            <div className="mt-3 grid space-y-3">
              {footerServices.map((item, idx) => (
                <p key={idx}>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    {item.title}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex justify-center">
            <p className="text-gray-100 font-bold">+995 599 71 71 42</p>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2023 Tow.ge - ევაკუატორის მომსახურება. ყველა უფლება დაცულია
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
