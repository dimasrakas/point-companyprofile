<template>
  <section class="bg-gray-100">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <div
            v-scroll-reveal="{ delay: 200 }"
            class="rounded-lg h-64 overflow-hidden"
          >
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/illustration/green2.png"
            />
          </div>
          <h2
            v-scroll-reveal="{ delay: 250 }"
            class="text-3xl font-bold text-dark mt-6 mb-3 leading-none"
          >
            <span v-if="$store.state.lang == 'en'" v-html="en.heading1">
              {{ en.heading1 }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.heading1 }}
            </span>
          </h2>
          <p class="leading-relaxed text-lg text-secondary">
            <span v-if="$store.state.lang == 'en'">
              {{ en.subheading1 }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.subheading1 }}
            </span>
          </p>
          <div
            v-scroll-reveal="{ delay: 300 }"
            class="flex justify-center mt-6 py-2"
          >
            <nuxt-link
              to="/features"
              class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded font-semibold text-lg"
            >
              <span v-if="$store.state.lang == 'en'">
                {{ en.tryfree1 }}
              </span>
              <span v-if="$store.state.lang == 'id'">
                {{ id.tryfree1 }}
              </span>
            </nuxt-link>
            <nuxt-link
              to="/show/time"
              class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              <span v-if="$store.state.lang == 'en'">
                {{ en.showme1 }}
              </span>
              <span v-if="$store.state.lang == 'id'">
                {{ id.showme1 }}
              </span>
            </nuxt-link>
          </div>
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div
            v-scroll-reveal="{ delay: 200 }"
            class="rounded-lg h-64 overflow-hidden"
          >
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/illustration/vesa.png"
            />
          </div>
          <h2
            v-scroll-reveal="{ delay: 250 }"
            class="text-3xl font-bold text-dark mt-6 mb-3 leading-none"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.heading2 }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.heading2 }}
            </span>
          </h2>
          <p
            v-scroll-reveal="{ delay: 300 }"
            class="leading-relaxed text-lg text-secondary"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.subheading2 }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.subheading2 }}
            </span>
          </p>
          <div
            v-scroll-reveal="{ delay: 350 }"
            class="flex justify-center mt-6 py-2"
          >
            <nuxt-link
              to="/features"
              class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 font-semibold rounded text-lg"
            >
              <span v-if="$store.state.lang == 'en'">
                {{ en.tryfree2 }}
              </span>
              <span v-if="$store.state.lang == 'id'">
                {{ id.tryfree2 }}
              </span>
            </nuxt-link>
            <nuxt-link
              to="/show/vesa"
              class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              <span v-if="$store.state.lang == 'en'">
                {{ en.showme2 }}
              </span>
              <span v-if="$store.state.lang == 'id'">
                {{ id.showme2 }}
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      en: {
        heading1:
          'Time to put your business <br class="hidden lg:inline-block" /> out there',
        subheading1:
          'Instantly market yourself with our peer to peer marketplace hub',
        tryfree1: 'Try Free',
        showme1: 'Show me how',
        heading2: 'Want your own personal assistant? VESA have you covered',
        subheading2: 'We got the royalty no. xxxxx for this feature',
        tryfree2: 'Try Free',
        showme2: 'Show me how',
      },
      id: {
        heading1: 'Waktunya untuk memperluas jaringan bisnis anda',
        subheading1:
          'Promosikan bisnis anda secara instan dengan fitur marketplace hub dari Point',
        tryfree1: 'Coba Gratis',
        showme1: 'Selengkapnya',
        heading2: 'Ingin Asisten Pribadi? VESA adalah jawabannya',
        subheading2: 'Kami terdaftar dalam hak cipta *****',
        tryfree2: 'Coba Gratis',
        showme2: 'Selengkapnya',
      },
    }
  },
}
</script>

<style></style>
