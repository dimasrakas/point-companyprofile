<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-5 mx-auto">
      <!-- Tab Header Feature -->
      <div>
        <div class="flex">
          <h1 class="text-2xl font-bold leading-none">
            Tell us your business
          </h1>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div
              class="bg-white flex flex-col items-center shadow-md p-2 rounded-lg text-gray-800"
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
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div
              class="bg-white flex flex-col items-center shadow-md p-2 rounded-lg text-gray-800"
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
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div
              class="bg-white flex flex-col items-center shadow-md p-2 rounded-lg text-gray-800"
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
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Details Feature -->
      <div>
        <div class="flex">
          <h1 class="text-xl font-medium">What do you currently need ?</h1>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="xl:w-1/4 md:w-1/2 p-4 mb-5">
            <div
              class="bg-white flex flex-col items-center shadow-md p-2 rounded-lg text-gray-800 hover:bg-gray-300 focus:outline-none"
            >
              <div
                class="flex w-full items-center rounded-lg"
                @click="activeTabDetail = 1"
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/list.svg"
                  width="20"
                  height="20"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTabDetail === 1 }"
                  class="font-medium text-sm"
                >
                  Creating Invoice
                </h1>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4 mb-5">
            <div
              class="bg-white flex flex-col items-center shadow-md p-2 rounded-lg text-gray-800 hover:bg-gray-300 focus:outline-none"
            >
              <div
                class="flex w-full items-center rounded-lg"
                @click="activeTabDetail = 2"
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/list.svg"
                  width="20"
                  height="20"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTabDetail === 2 }"
                  class="font-medium text-sm"
                >
                  Start Bookkeping
                </h1>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4 mb-5">
            <div
              class="bg-white flex flex-col items-center shadow-md p-2 rounded-lg text-gray-800 hover:bg-gray-300 focus:outline-none"
            >
              <div
                class="flex w-full items-center rounded-lg"
                @click="activeTabDetail = 3"
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/list.svg"
                  width="20"
                  height="20"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTabDetail === 3 }"
                  class="font-medium text-sm"
                >
                  Easily Read Reports
                </h1>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4 mb-5">
            <div
              class="bg-white flex flex-col items-center shadow-md p-2 rounded-lg text-gray-800 hover:bg-gray-300 focus:outline-none"
            >
              <div
                class="flex w-full items-center rounded-lg"
                @click="activeTabDetail = 4"
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/list.svg"
                  width="20"
                  height="20"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTabDetail === 4 }"
                  class="font-medium text-sm"
                >
                  Not Sure Yet
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Title -->
      <div class="flex flex-col text-center justify-center mb-4 mt-6">
        <h1 class="text-3xl font-bold leading-tight">
          How do you want to start with ?
        </h1>
      </div>

      <!-- Content -->
      <div class="flex flex-wrap -mx-4 text-center justify-center py-4 mb-10">
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_printing_invoices_5r4r.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I need to create an invoice now
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_wallet_aym5.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I need to track my expenses now
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_Data_points_ubvs.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I'd like to import my bank transactions
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_finance_0bdk.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I have ending balances input
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_decide_3iwx.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I'm just testing things through in Point
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
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
