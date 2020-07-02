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
                @click="
                  activeTab = 'Service'
                  showContentHeader = 1
                  showContentDetail = 0
                "
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/list.svg"
                  width="30"
                  height="30"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTab === 'Service' }"
                  class="font-medium text-lg"
                >
                  Service
                </h1>
              </div>
              <div
                :class="{ 'bg-primary': activeTab === 'Service' }"
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
                @click="
                  activeTab = 'Trading'
                  showContentHeader = 2
                  showContentDetail = 0
                "
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/time-2.svg"
                  width="30"
                  height="30"
                  alt
                />
                <h1
                  :class="{ 'text-primary font-bold': activeTab === 'Trading' }"
                  class="font-medium text-lg"
                >
                  Trading
                </h1>
              </div>
              <div
                :class="{ 'bg-primary': activeTab === 'Trading' }"
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
                @click="
                  activeTab = 'Manufacture'
                  showContentHeader = 3
                  showContentDetail = 0
                "
              >
                <img
                  class="mr-4"
                  src="https://frontend.bukapo.id/icon/time-3.svg"
                  width="30"
                  height="30"
                  alt
                />
                <h1
                  :class="{
                    'text-primary font-bold': activeTab === 'Manufacture',
                  }"
                  class="font-medium text-lg"
                >
                  Manufacture
                </h1>
              </div>
              <div
                :class="{ 'bg-primary': activeTab === 'Manufacture' }"
                class="h-1 rounded-full w-16 items-start justify-start"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Details Feature -->
      <div v-if="showContentDetail === 1">
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

      <!-- Nama Layanan -->
      <div
        v-if="showContentHeader != ''"
        class="flex flex-col text-center justify-center mb-4 mt-2"
      >
        <h1 class="text-3xl font-bold leading-none">{{ activeTab }}</h1>
        <p class="text-xl">What do you currently need ?</p>
      </div>

      <!-- Content Header -->
      <div v-if="showContentHeader === 1">
        <div class="flex flex-wrap -mx-4 text-center py-4 mb-10">
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
                Creating Invoice Service
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
        </div>
      </div>
      <div v-if="showContentHeader === 2">
        <div class="flex flex-wrap -mx-4 text-center py-4 mb-10">
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
                Creating Invoice Service
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
        </div>
      </div>
      <div v-if="showContentHeader === 3">
        <div class="flex flex-wrap -mx-4 text-center py-4 mb-10">
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
                Creating Invoice Service
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
          <div class="sm:w-1/2 mb-10 px-4 py-4">
            <div
              @click="
                showContentDetail = 1
                showContentHeader = 0
                activeTabDetail = 1
              "
            >
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
            </div>
          </div>
        </div>
      </div>

      <!-- Content Details -->
      <div v-if="showContentDetail === 1">
        <ServiceDetail />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceIndex from '~/components/features/ServiceIndex'
import TradingIndex from '~/components/features/TradingIndex'
import ManufactureIndex from '~/components/features/ManufactureIndex'

import ServiceDetail from '~/components/features/ServiceDetail'

export default {
  component: {
    ServiceIndex,
    TradingIndex,
    ManufactureIndex,
    ServiceDetail,
  },
  data() {
    return {
      activeTab: 'Manufacture',
      activeTabDetail: '',
      showContentHeader: 1,
      showContentDetail: 0,
    }
  },

  mounted() {
    console.log(this.showContentHeader)
  },
}
</script>

<style></style>
