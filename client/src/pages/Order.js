import React from "react";
import espresso from "../images/espresso2.jpeg";


export default function Order() {
  return (
    <div>
      <div class="mt-20">
        <h1 class="flex items-center justify-center font-bold text-teal-600 text-4xl lg:text-6xl">
          JSCafe Checkout
        </h1>
      </div>
      <div class="container p-12 mx-auto ml-20">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div class="flex flex-col md:w-full">
            <form class="justify-center w-full mx-auto" method="post" action>
              <div class="">
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      class="block mb-3 text-lg font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      class="w-full px-4 py-3 text-lg border border-gray-300 rounded lg:text-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    ></input>
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      class="block mb-3 text-lg font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      class="w-full px-4 py-3 text-lg border border-gray-300 rounded lg:text-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    ></input>
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-lg font-semibold text-gray-500"
                    >
                      Credit Card Number
                    </label>
                    <input
                      name="Credit Card Number"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      class="w-full px-4 py-3 text-lg border border-gray-300 rounded lg:text-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    ></input>
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-lg font-semibold text-gray-500"
                    >
                      Billing Address
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="123 You and Me Ln"
                      class="w-full px-4 py-3 text-lg border border-gray-300 rounded lg:text-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    ></input>
                  </div>
                </div>
                <div
                  class="space-x-0 lg:flex lg:space-x-4"
                  className="mt-4 flex flex-row"
                >
                  <div class="lg:w-1/2" className="mr-4">
                    <label
                      for="firstName"
                      class="block mb-3 text-lg font-semibold text-gray-500"
                    >
                      State
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Ex:NC"
                      class=" px-4 py-3 text-lg border border-gray-300 rounded lg:text-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    ></input>
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      class="block mb-3 text-lg font-semibold text-gray-500"
                    >
                      Zip Code
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="#####"
                      class="px-4 py-3 text-lg border border-gray-300 rounded lg:text-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    ></input>
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Address"
                      class="block mb-3 text-lg font-semibold text-gray-500"
                    >
                      Phone
                    </label>
                    <input
                      name="Last Name"
                      type="tel"
                      placeholder="(***)-***-****"
                      class="w-70 px-4 py-3 text-lg border border-gray-300 rounded lg:text-lg focus:outline-none focus:ring-1 focus:ring-teal-600"
                    ></input>
                  </div>
                </div>
                <div class="space-x-0 lg:flex lg:space-x-4"></div>
                <div class="flex items-center mt-4">
                  <label class="flex items-center text-lg group text-heading">
                    <input
                      type="checkbox"
                      class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    ></input>
                    <span class="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div class="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    class="block mb-3 text-lg font-semibold text-gray-500"
                  >
                    {" "}
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="note"
                    class="flex items-center w-full px-4 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
                    rows="4"
                    placeholder="Let us know it you have any special requests. (ex: Extra sweet, no cream, etc)"
                  ></textarea>
                </div>
                <div class="mt-4 flex-row items-center">
                  <button class="flex-row justify-center px-6 py-2 text-bold text-4xl text-gray-200 bg-teal-600 hover:bg-teal-900">
                    Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div class="pt-12 md:pt-0 2xl:ps-4">
              <h2 class="text-xl font-bold">Order Summary</h2>
              <div class="mt-8">
                <div class="flex flex-col space-y-4">
                  <div class="flex space-x-4">
                    <div>
                      <img
                        class="p-8 rounded-t-lg"
                        // ADD IMAGES LATER? OR REMOVE ALTOGETHER?
                        src={espresso}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 class="text-xl font-bold">Title</h2>
                      <p class="text-sm"></p>
                      <span class="text-teal-600">Price</span> $20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="flex space-x-4">
                    <div>
                      <img
                        class="p-8 rounded-t-lg"
                        // ADD IMAGES LATER? OR REMOVE ALTOGETHER?
                        src={espresso}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 class="text-xl font-bold">Title</h2>
                      <p class="text-sm"></p>
                      <span class="text-teal-600">Price</span> $20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex p-4 mt-4">
                <h2 class="text-xl font-bold">ITEMS 2</h2>
              </div>
              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                <span class="ml-2"></span>
              </div>

              <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span class="ml-2">$50.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
