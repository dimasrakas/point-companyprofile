<template>
  <div class="pt-10 mt-2">
    <div
      class="md:overflow-hidden"
      style="
        background-color: #3bb78f;
        background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
      "
    >
      <div class="px-2 sm:px-2 md:px-20 lg:px-20 py-20 md:py-16">
        <div class="md:max-w-full md:mx-auto">
          <div class="md:flex md:flex-wrap">
            <div class="md:w-1/2 text-center md:text-left md:pt-16">
              <h1
                v-scroll-reveal="{ delay: 200 }"
                class="font-bold font-header text-white text-2xl md:text-5xl lg:text-5xl leading-tight mb-4 pt-16"
              >
                <span v-if="$store.state.lang == 'id'" v-html="id.heading">{{
                  id.heading
                }}</span>
                <span v-if="$store.state.lang == 'en'" v-html="en.heading">{{
                  en.heading
                }}</span>
              </h1>

              <p
                v-scroll-reveal="{ delay: 250 }"
                class="text-light font-description md:text-xl md:pr-48"
              >
                <span v-if="$store.state.lang == 'id'">{{
                  id.description
                }}</span>
                <span v-if="$store.state.lang == 'en'">{{
                  en.description
                }}</span>
              </p>

              <nuxt-link
                v-scroll-reveal="{ delay: 300 }"
                to="/features"
                class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg shadow"
              >
                <span v-if="$store.state.lang == 'id'">{{
                  id.subheading
                }}</span>
                <span v-if="$store.state.lang == 'en'">{{
                  en.subheading
                }}</span>
              </nuxt-link>
            </div>
            <div class="md:w-1/2 relative">
              <div class="hidden md:block">
                <div
                  v-scroll-reveal="{ delay: 450 }"
                  class="md:-ml-20 md:-mb-40 lg:-ml-20 lg:-mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                  style="transform: rotate(-8deg);"
                >
                  <img
                    class="py-2"
                    src="~/assets/icon/shipping-and-delivery.svg"
                    alt
                  />

                  <div class="text-gray-700 font-medium text-center">
                    <span v-if="$store.state.lang == 'id'">{{
                      id.service
                    }}</span>
                    <span v-if="$store.state.lang == 'en'">{{
                      en.service
                    }}</span>
                  </div>
                </div>

                <div
                  v-scroll-reveal="{ delay: 500 }"
                  class="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                  style="transform: rotate(-8deg); z-index: 2;"
                >
                  <img class="py-2" src="~/assets/icon/store.svg" alt />

                  <div class="text-gray-700 font-medium text-center">
                    <span v-if="$store.state.lang == 'id'">{{
                      id.trading
                    }}</span>
                    <span v-if="$store.state.lang == 'en'">{{
                      en.trading
                    }}</span>
                  </div>
                </div>

                <div
                  v-scroll-reveal="{ delay: 400 }"
                  class="ml-32 absolute left-0 bottom-0 w-48 bg-white rounded-lg shadow-lg px-10 py-8"
                  style="
                    transform: rotate(-8deg);
                    z-index: 2;
                    margin-bottom: -220px;
                  "
                >
                  <img
                    class="py-2"
                    src="~/assets/icon/shipping-and-delivery(1).svg"
                    alt
                  />

                  <div class="text-gray-700 font-medium text-center">
                    <span v-if="$store.state.lang == 'id'">{{
                      id.manufacture
                    }}</span>
                    <span v-if="$store.state.lang == 'en'">{{
                      en.manufacture
                    }}</span>
                  </div>
                </div>

                <div
                  v-scroll-reveal="{ delay: 350 }"
                  class="mt-10 w-full md:absolute lg:absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow-lg"
                  style="
                    transform: rotate(-8deg);
                    margin-right: -250px;
                    z-index: 1;
                  "
                >
                  <div class="w-32 bg-gray-200" style="height: 560px;"></div>
                  <div class="flex-1 p-6">
                    <h2
                      v-scroll-reveal="{ delay: 550 }"
                      class="text-lg text-gray-700 font-bold mb-3"
                    >
                      <span v-if="$store.state.lang == 'id'">{{
                        id.welcome
                      }}</span>
                      <span v-if="$store.state.lang == 'en'">{{
                        en.welcome
                      }}</span>
                    </h2>
                    <div v-scroll-reveal="{ delay: 600 }" class="flex mb-5">
                      <div class="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                        <div class="p-1 rounded-full bg-gray-300"></div>
                      </div>
                      <div class="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                        <div class="p-1 rounded-full bg-gray-300"></div>
                      </div>
                      <div class="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                        <div class="p-1 rounded-full bg-gray-300"></div>
                      </div>
                      <div class="w-16 rounded-full bg-gray-100 py-2 px-4">
                        <div class="p-1 rounded-full bg-gray-300"></div>
                      </div>
                    </div>

                    <div
                      v-scroll-reveal="{ delay: 650 }"
                      class="flex flex-wrap -mx-4 mb-5"
                    >
                      <div class="w-1/3 px-4">
                        <div class="h-40 rounded-lg bg-white shadow-lg p-6">
                          <div
                            class="w-16 h-16 rounded-full bg-gray-200 mb-6"
                          ></div>
                          <div
                            class="h-2 w-16 bg-gray-200 mb-2 rounded-full"
                          ></div>
                          <div class="h-2 w-10 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div class="w-1/3 px-4">
                        <div class="h-40 rounded-lg bg-white shadow-lg p-6">
                          <div
                            class="w-16 h-16 rounded-full bg-gray-200 mb-6"
                          ></div>
                          <div
                            class="h-2 w-16 bg-gray-200 mb-2 rounded-full"
                          ></div>
                          <div class="h-2 w-10 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div class="w-1/3 px-4">
                        <div class="h-40 rounded-lg bg-white shadow-lg p-6">
                          <div
                            class="w-16 h-16 rounded-full bg-gray-200 mb-6"
                          ></div>
                          <div
                            class="h-2 w-16 bg-gray-200 mb-2 rounded-full"
                          ></div>
                          <div class="h-2 w-10 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <h2
                      v-scroll-reveal="{ delay: 700 }"
                      class="text-lg text-gray-700 font-bold mb-3"
                    >
                      <span v-if="$store.state.lang == 'id'">{{
                        id.dashboard
                      }}</span>
                      <span v-if="$store.state.lang == 'en'">{{
                        en.dashboard
                      }}</span>
                    </h2>

                    <div
                      v-scroll-reveal="{ delay: 750 }"
                      class="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3"
                    >
                      <div class="w-1/3">
                        <div class="flex">
                          <div class="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                          <div>
                            <div
                              class="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                            ></div>
                            <div
                              class="h-2 w-10 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto"
                        >
                          <div class="p-1 rounded-full bg-green-200"></div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="h-2 w-10 bg-gray-100 rounded-full mx-auto"
                        ></div>
                      </div>
                    </div>

                    <div
                      v-scroll-reveal="{ delay: 800 }"
                      class="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3"
                    >
                      <div class="w-1/3">
                        <div class="flex">
                          <div class="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                          <div>
                            <div
                              class="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                            ></div>
                            <div
                              class="h-2 w-10 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto"
                        >
                          <div class="p-1 rounded-full bg-orange-200"></div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="h-2 w-16 bg-gray-100 rounded-full mx-auto"
                        ></div>
                      </div>
                    </div>

                    <div
                      v-scroll-reveal="{ delay: 850 }"
                      class="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3"
                    >
                      <div class="w-1/3">
                        <div class="flex">
                          <div class="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                          <div>
                            <div
                              class="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                            ></div>
                            <div
                              class="h-2 w-10 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-16 rounded-full bg-blue-100 py-2 px-4 mx-auto"
                        >
                          <div class="p-1 rounded-full bg-blue-200"></div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="h-2 w-8 bg-gray-100 rounded-full mx-auto"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-scroll-reveal="{ delay: 600 }"
                  class="w-full md:absolute lg:absolute left-0 bottom-0 ml-1"
                  style="
                    transform: rotate(-8deg);
                    z-index: 1;
                    margin-bottom: -360px;
                  "
                >
                  <div class="grid--gray h-48 w-48"></div>
                </div>
              </div>

              <div
                v-scroll-reveal="{ delay: 200 }"
                class="md:hidden w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow"
              >
                <div
                  class="h-4 bg-gray-200 absolute top-0 left-0 right-0 rounded-t-lg flex items-center"
                >
                  <span
                    class="h-2 w-2 rounded-full bg-red-500 inline-block mr-1 ml-2"
                  ></span>
                  <span
                    class="h-2 w-2 rounded-full bg-orange-400 inline-block mr-1"
                  ></span>
                  <span
                    class="h-2 w-2 rounded-full bg-green-500 inline-block mr-1"
                  ></span>
                </div>
                <div class="w-32 bg-gray-100 px-2 py-8" style="height: 340px;">
                  <div class="h-2 w-16 bg-gray-300 rounded-full mb-4"></div>
                  <div class="flex items-center mb-4">
                    <div
                      class="h-5 w-5 rounded-full bg-gray-300 mr-3 flex-shrink-0"
                    ></div>
                    <div>
                      <div class="h-2 w-10 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  <div class="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
                  <div class="h-2 w-10 bg-gray-200 rounded-full mb-2"></div>
                  <div class="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                  <div class="h-2 w-6 bg-gray-200 rounded-full mb-2"></div>
                  <div class="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
                  <div class="h-2 w-10 bg-gray-200 rounded-full mb-2"></div>
                  <div class="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                  <div class="h-2 w-6 bg-gray-200 rounded-full mb-2"></div>
                </div>
                <div class="flex-1 px-4 py-8">
                  <h2 class="text-xs text-gray-700 font-bold mb-1">
                    <span v-if="$store.state.lang == 'id'">{{
                      id.welcome
                    }}</span>
                    <span v-if="$store.state.lang == 'en'">{{
                      en.welcome
                    }}</span>
                  </h2>
                  <div class="flex mb-5">
                    <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                    <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                    <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                    <div class="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                  </div>

                  <div class="flex flex-wrap -mx-2 mb-5">
                    <div class="w-1/3 px-2">
                      <div class="p-3 rounded-lg bg-white shadow">
                        <div
                          class="w-6 h-6 rounded-full bg-gray-200 mb-2"
                        ></div>
                        <div
                          class="h-2 w-10 bg-gray-200 mb-1 rounded-full"
                        ></div>
                        <div class="h-2 w-6 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div class="w-1/3 px-2">
                      <div class="p-3 rounded-lg bg-white shadow">
                        <div
                          class="w-6 h-6 rounded-full bg-gray-200 mb-2"
                        ></div>
                        <div
                          class="h-2 w-10 bg-gray-200 mb-1 rounded-full"
                        ></div>
                        <div class="h-2 w-6 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div class="w-1/3 px-2">
                      <div class="p-3 rounded-lg bg-white shadow">
                        <div
                          class="w-6 h-6 rounded-full bg-gray-200 mb-2"
                        ></div>
                        <div
                          class="h-2 w-10 bg-gray-200 mb-1 rounded-full"
                        ></div>
                        <div class="h-2 w-6 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <h2 class="text-xs text-gray-700 font-bold mb-1">
                    <span v-if="$store.state.lang == 'id'">{{
                      id.dashboard
                    }}</span>
                    <span v-if="$store.state.lang == 'en'">{{
                      en.dashboard
                    }}</span>
                  </h2>

                  <div
                    class="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3"
                  >
                    <div class="w-1/3">
                      <div class="flex">
                        <div
                          class="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0"
                        ></div>
                        <div>
                          <div
                            class="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                          ></div>
                          <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto"
                      >
                        <div class="p-1 rounded-full bg-green-200"></div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="h-2 w-10 bg-gray-100 rounded-full mx-auto"
                      ></div>
                    </div>
                  </div>

                  <div class="flex flex-wrap justify-between items-center py-3">
                    <div class="w-1/3">
                      <div class="flex">
                        <div
                          class="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0"
                        ></div>
                        <div>
                          <div
                            class="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                          ></div>
                          <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto"
                      >
                        <div class="p-1 rounded-full bg-orange-200"></div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="h-2 w-16 bg-gray-100 rounded-full mx-auto"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        class="fill-current text-white hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 240"
      >
        <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: {
        heading: 'Kontrol sepenuhnya Bisnis Anda saat bepergian',
        subheading: 'GRATIS COBA 1 BULAN',
        description:
          'Covers all the features you need to run a small or medium business. Exceptional accounting and bookkeeping solutions in the most demanding era.',
        button: 'Coba Gratis',
        service: 'Jasa',
        trading: 'Dagang',
        manufacture: 'Manufaktur',
        welcome: 'Selamat Datang di Website kami',
        dashboard: ' Papan Kendali',
      },
      en: {
        heading: 'Fully control your business <br> while on the go',
        subheading: 'FREE TRIAL 1 MONTH',
        description:
          'Covers all the features you need to run a small or medium business. Exceptional accounting and bookkeeping solutions in the most demanding era.',
        button: 'Try Free',
        service: 'Service',
        trading: 'Trading',
        manufacture: 'Manufacture',
        welcome: 'Welcome to Our Website',
        dashboard: ' Dashboard',
      },
    }
  },
}
</script>

<style></style>
