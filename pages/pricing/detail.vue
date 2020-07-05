<template>
  <section class="py-24">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div
        v-scroll-reveal="{ delay: 200 }"
        class="lg:w-1/4 mt-48 hidden lg:block"
      >
        <div
          class="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden"
        >
          <p
            class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px"
          >
            Accounting
          </p>
          <p
            class="text-gray-900 h-12 text-center px-4 flex items-center justify-start"
          >
            Purchasing
          </p>
          <p
            class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start"
          >
            Manufacture
          </p>
          <p
            class="text-gray-900 h-12 text-center px-4 flex items-center justify-start"
          >
            Finance
          </p>
        </div>
      </div>
      <div
        class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg"
      >
        <div
          v-scroll-reveal="{ delay: 250 }"
          class="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none"
        >
          <div
            class="px-2 text-center h-48 flex flex-col items-center justify-center"
          >
            <h3 class="tracking-widest">BASIC</h3>
            <h2
              class="text-2xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2"
            >
              IDR 1.000.000
              <span class="text-gray-600 text-base ml-1">/mo</span>
            </h2>
            <span class="text-sm text-gray-600">Next 3 months</span>
          </div>
          <p
            class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <div class="border-t border-gray-300 p-6 text-center rounded-bl-lg">
            <nuxt-link
              to="/signup"
              class="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
            >
              Register
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
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-green-500 relative"
        >
          <span
            class="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
            >POPULAR</span
          >
          <div
            class="px-2 text-center h-48 flex flex-col items-center justify-center"
          >
            <h3 class="tracking-widest">PRO</h3>
            <h2
              class="text-3xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2"
            >
              IDR 3.000.000
              <span class="text-gray-600 text-base ml-1">/mo</span>
            </h2>
            <span class="text-sm text-gray-600">Charging $456 per year</span>
          </div>
          <p
            class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <div class="p-6 text-center border-t border-gray-300">
            <nuxt-link
              to="/signup"
              class="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
            >
              Register
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
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
        <div
          v-scroll-reveal="{ delay: 350 }"
          class="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none"
        >
          <div
            class="px-2 text-center h-48 flex flex-col items-center justify-center"
          >
            <h3 class="tracking-widest">PREMIUM</h3>
            <h2
              class="text-2xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2"
            >
              IDR 9.000.000
              <span class="text-gray-600 text-base ml-1">/mo</span>
            </h2>
            <span class="text-sm text-gray-600">Charging $648 per year</span>
          </div>
          <p
            class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p
            class="text-gray-600 text-center h-12 flex items-center justify-center"
          >
            <span
              class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <div class="p-6 text-center border-t border-gray-300">
            <nuxt-link
              to="/signup"
              class="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
            >
              Register
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
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
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
