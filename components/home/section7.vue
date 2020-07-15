<template>
  <section class="bg-green-600">
    <div class="pt-20 mt-2">
      <div class="bg-green-600 md:overflow-hidden">
        <div class="px-4 lg:py-20 md:py-4">
          <div class="md:max-w-6xl md:mx-auto">
            <div class="md:flex md:flex-wrap">
              <div
                v-if="$isMobile()"
                class="lg:max-w-lg lg:w-full md:w-1/2 flex justify-center items-center pb-8"
              >
                <img
                  v-scroll-reveal="{ delay: 300 }"
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="~/assets/illustration/responsive.svg"
                />
              </div>
              <div class="md:w-1/2 text-center md:text-left md:pt-16">
                <h1
                  class="font-bold text-white text-2xl md:text-5xl leading-tight mb-4"
                >
                  <span v-if="$store.state.lang == 'id'" v-html="id.heading">
                    {{ id.heading }}
                  </span>
                  <span v-if="$store.state.lang == 'en'">
                    {{ en.heading }}
                  </span>
                </h1>

                <p class="text-light font-description md:text-xl md:pr-48">
                  <span v-if="$store.state.lang == 'id'">
                    {{ id.description }}
                  </span>
                  <span v-if="$store.state.lang == 'en'">
                    {{ en.description }}
                  </span>
                </p>

                <nuxt-link
                  to="/features"
                  class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg shadow"
                >
                  <span v-if="$store.state.lang == 'id'">
                    {{ id.button }}
                  </span>
                  <span v-if="$store.state.lang == 'en'">
                    {{ en.button }}
                  </span>
                </nuxt-link>

                <nuxt-link
                  to="/show/responsive"
                  class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-dark bg-gray-200 hover:bg-gray-300 font-medium rounded-lg shadow"
                >
                  <span v-if="$store.state.lang == 'id'">
                    {{ id.subbutton }}
                  </span>
                  <span v-if="$store.state.lang == 'en'">
                    {{ en.subbutton }}
                  </span>
                </nuxt-link>
              </div>
              <div v-if="!$isMobile()" class="md:w-1/2 relative">
                <div class="hidden md:block">
                  <div
                    class="-ml-20 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                    style="transform: rotate(-8deg);"
                  >
                    <div class="flex justify-center">
                      <img
                        src="~/assets/icon/performance.svg"
                        width="80"
                        height="80"
                        alt=""
                      />
                    </div>

                    <div class="text-gray-800 text-center">
                      Pesonal Computer
                    </div>
                  </div>

                  <div
                    class="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                    style="transform: rotate(-8deg); z-index: 2;"
                  >
                    <div class="flex justify-center">
                      <img
                        src="~/assets/icon/phone-call.svg"
                        width="80"
                        height="80"
                        alt=""
                      />
                    </div>

                    <div class="text-gray-800 text-center">
                      Mobile / Smartphone
                    </div>
                  </div>

                  <div
                    class="ml-32 absolute left-0 bottom-0 w-48 bg-white rounded-lg shadow-lg px-10 py-8"
                    style="
                      transform: rotate(-8deg);
                      z-index: 2;
                      margin-bottom: -220px;
                    "
                  >
                    <div class="flex justify-center">
                      <img
                        src="~/assets/icon/chatting.svg"
                        width="80"
                        height="80"
                        alt=""
                      />
                    </div>

                    <div class="text-gray-800 text-center">
                      Notebook
                    </div>
                  </div>

                  <div
                    class="mt-10 w-full absolute right-0 top-0 flex rounded-lg overflow-hidden"
                    style="
                      transform: rotate(-8deg);
                      margin-right: -250px;
                      z-index: 1;
                    "
                  >
                    <div
                      v-scroll-reveal="{ delay: 200 }"
                      class="lg:w-6/6 md:w-6/6 w-6/6 object-cover object-center rounded bg-white shadow-lg"
                    >
                      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                      <lottie-player
                        src="https://assets5.lottiefiles.com/packages/lf20_zETGpb.json"
                        background="transparent"
                        speed="1"
                        style="width: 450px; height: 450px;"
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>

                  <div
                    class="w-full absolute left-0 bottom-0 ml-1"
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
                  <div
                    class="w-32 bg-gray-100 px-2 py-8"
                    style="height: 340px;"
                  >
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
                      Popular Payments
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
                      Popular Payments
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
                      class="flex flex-wrap justify-between items-center py-3"
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
                  </div>
                </div>

                <div
                  class="mr-3 md:hidden absolute right-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-10 py-6"
                  style="z-index: 2; margin-bottom: -380px;"
                >
                  <div
                    class="bg-green-500 mx-auto rounded-lg w-20 pt-3 mb-12 relative"
                  >
                    <div class="h-3 bg-white"></div>

                    <div class="text-right my-2">
                      <div
                        class="inline-flex w-3 h-3 rounded-full bg-white -mr-2"
                      ></div>
                      <div
                        class="inline-flex w-3 h-3 rounded-full bg-green-500 border-2 border-white mr-2"
                      ></div>
                    </div>

                    <div
                      class="-ml-4 -mb-6 absolute left-0 bottom-0 w-16 bg-green-700 mx-auto rounded-lg pb-2 pt-3"
                    >
                      <div class="h-2 bg-white mb-2"></div>
                      <div class="h-2 bg-white w-6 ml-auto rounded mr-2"></div>
                    </div>
                  </div>

                  <div class="text-gray-800 text-center text-sm">
                    Payment for <br />Internet
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
          <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      en: {
        heading: 'Easy switch between Web and Phone',
        subheading: 'No more confusion!',
        description:
          'You can access exactly the same features on your PC / Laptop and your Phone',
        button: 'Try Free',
        subbutton: 'Show me how',
      },
      id: {
        heading: 'Peralihan mudah dari Web ke Ponsel',
        subheading: 'Tidak perlu bingung! ',
        description:
          'Akses fitur yang sama antara layar PC/Laptop dengan layar Ponsel anda',
        button: 'Coba Gratis',
        subbutton: 'Selengkapnya',
      },
    }
  },
}
</script>

<style></style>
