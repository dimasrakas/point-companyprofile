<template>
  <section class="text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          v-scroll-reveal="{ delay: 200 }"
          class="sm:text-4xl text-3xl font-bold title-font mb-2 text-dark"
        >
          Pricing
        </h1>
        <p
          v-scroll-reveal="{ delay: 250 }"
          class="lg:w-2/3 mx-auto leading-relaxed text-base"
        >
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
        </p>
      </div>
      <div class="flex flex-wrap -m-4 px-20">
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="p-4 xl:w-1/3 md:w-1/2 w-full"
        >
          <div
            class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
          >
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
              BASIC
            </h2>
            <h1
              class="text-3xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
            >
              <span>IDR 1.000.000</span>
              <span class="text-lg ml-1 font-normal text-gray-700">/mo</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Suitable for smaller businesses
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Basic resource management features
            </p>
            <p class="flex items-center text-gray-600 mb-6">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Up to 10 users
            </p>
            <nuxt-link
              to="/pricing/detail"
              class="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded"
            >
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </nuxt-link>
            <p class="text-xs text-gray-700 mt-3">
              IDR 30.000 for extra user
            </p>
          </div>
        </div>
        <div
          v-scroll-reveal="{ delay: 350 }"
          class="p-4 xl:w-1/3 md:w-1/2 -mt-16 w-full"
        >
          <div
            class="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden"
          >
            <span
              class="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
              >POPULAR</span
            >
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
              PRO
            </h2>
            <h1
              class="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
            >
              <span>IDR 3.000.000</span>
              <span class="text-lg ml-1 font-normal text-gray-700">/mo</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Suitable for medium businesses
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Include all basic features and accounting forecast
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Up to 50 users
            </p>
            <nuxt-link
              to="/pricing/detail"
              class="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
            >
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </nuxt-link>
            <p class="text-xs text-gray-700 mt-3">
              IDR 30.000 for extra user
            </p>
          </div>
        </div>
        <div
          v-scroll-reveal="{ delay: 400 }"
          class="p-4 xl:w-1/3 md:w-1/2 w-full"
        >
          <div
            class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
          >
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
              PREMIUM
            </h2>
            <h1
              class="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
            >
              <span>IDR 9.000.000</span>
              <span class="text-lg ml-1 font-normal text-gray-700">/mo</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Suitable for larger businesses
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Enterprise resource management features
            </p>
            <p class="flex items-center text-gray-600 mb-2">
              <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg> </span
              >Unlimited users
            </p>
            <nuxt-link
              to="/pricing/detail"
              class="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded"
            >
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
