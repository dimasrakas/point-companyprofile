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
      <h1 v-if="activeTab === 'Services'">Rendered</h1>
    </div>
  </section>
</template>

<script>
import Service from '~/pages/web/features/service/index'
import Trading from '~/pages/web/features/trading/index'
import Manufacture from '~/pages/web/features/manufacture/index'

export default {
  component: {
    Service,
    Trading,
    Manufacture,
  },
  data() {
    return {
      activeTab: [],
      activeTabDetail: [],
      service: true,
    }
  },
}
</script>

<style></style>
