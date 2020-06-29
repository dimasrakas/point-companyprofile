<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-5 mx-auto">
      <!-- Header Feature -->
      <div>
        <div class="flex">
          <h1 class="text-2xl font-bold">Tell us your business</h1>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="xl:w-1/3 md:w-1/2 p-4 mb-5">
            <div
              class="bg-white flex flex-col items-center shadow p-2 rounded-lg text-gray-800"
            >
              <div
                class="flex w-full items-center rounded-lg p-2 hover:bg-gray-200 focus:outline-none"
                @click="activeTab = 1"
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/list.svg"
                  width="30"
                  height="30"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTab === 1 }"
                  class="font-medium text-lg"
                >
                  Service
                </h1>
              </div>
              <div
                :class="{ 'bg-primary': activeTab === 1 }"
                class="h-1 rounded-full w-16 items-start justify-start"
              ></div>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4 mb-5">
            <div
              class="bg-white flex flex-col items-center shadow p-2 rounded-lg text-gray-800"
            >
              <div
                class="flex w-full items-center rounded p-2 hover:bg-gray-200 focus:outline-none"
                @click="activeTab = 2"
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/time-2.svg"
                  width="30"
                  height="30"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTab === 2 }"
                  class="font-medium text-lg"
                >
                  Trading
                </h1>
              </div>
              <div
                :class="{ 'bg-primary': activeTab === 2 }"
                class="h-1 rounded-full w-16 items-start justify-start"
              ></div>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4 mb-5">
            <div
              class="bg-white flex flex-col items-center shadow p-2 rounded-lg text-gray-800"
            >
              <div
                class="flex w-full items-center rounded-lg p-2 hover:bg-gray-200 focus:outline-none"
                @click="activeTab = 3"
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/time-3.svg"
                  width="30"
                  height="30"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTab === 3 }"
                  class="font-medium text-lg"
                >
                  Manufacture
                </h1>
              </div>
              <div
                :class="{ 'bg-primary': activeTab === 3 }"
                class="h-1 rounded-full w-16 items-start justify-start"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nama Layanan -->
      <div class="flex flex-col text-center justify-center mb-4 mt-2">
        <h1 class="text-3xl font-bold leading-none">Nama Layanan</h1>
        <p class="text-xl">What do you currently need ?</p>
      </div>

      <!-- Content -->
      <div class="flex flex-wrap -mx-4 text-center py-4 mb-10">
        <div class="sm:w-1/2 mb-10 px-4 py-4">
          <nuxt-link to="/web/features/manufacture/details">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="~/assets/images/hero-image-dark.png"
              />
            </div>
            <h2
              class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3"
            >
              Creating Invoice
            </h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
          </nuxt-link>
        </div>
        <div class="sm:w-1/2 mb-10 px-4 py-4">
          <nuxt-link to="/web/features/manufacture/details">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="~/assets/images/hero-image-1.png"
              />
            </div>
            <h2
              class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3"
            >
              Start Bookkeping
            </h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
          </nuxt-link>
        </div>
        <div class="sm:w-1/2 mb-10 px-4 py-4">
          <nuxt-link to="/web/features/manufacture/details">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="~/assets/images/features-tabs-image.png"
              />
            </div>
            <h2
              class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3"
            >
              Easily Read Reports
            </h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
          </nuxt-link>
        </div>
        <div class="sm:w-1/2 mb-10 px-4 py-4">
          <nuxt-link to="/web/features/manufacture/details">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="~/assets/images/hero-image-2.png"
              />
            </div>
            <h2
              class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3"
            >
              Not Sure Yet
            </h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: [],
      activeTabDetail: [],
    }
  },
}
</script>

<style></style>
