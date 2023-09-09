"use client";

export default function Footer() {
  return (
    <footer class="bg-gray-900 bottom-0">
      <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div class="col-span-full lg:col-span-1">
            <a
              class="flex-none text-xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
          </div>

          <div class="col-span-1">
            <h4 class="font-semibold text-gray-100">Product</h4>

            <div class="mt-3 grid space-y-3">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  href="#"
                >
                  Pricing
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  href="#"
                >
                  Changelog
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  href="#"
                >
                  Docs
                </a>
              </p>
            </div>
          </div>

          <div class="col-span-1">
            <h4 class="font-semibold text-gray-100">სერვისები</h4>

            <div class="mt-3 grid space-y-3">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  href="#"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  href="#"
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  href="#"
                >
                  Careers
                </a>{" "}
                <span class="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">
                  We're hiring
                </span>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  href="#"
                >
                  Customers
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-400">
              © 2023 მანქანის სერვისი. ყველა უფლება დაცულია
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
