<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-10 mx-auto">
      <div
        v-scroll-reveal="{ delay: 100 }"
        class="flex flex-wrap w-full mb-10 flex-col items-center text-center"
      >
        <h1 class="sm:text-3xl text-4xl font-bold title-font mb-2 text-dark">
          MAIN FEATURE
        </h1>
      </div>
      <div class="flex flex-wrap justify-center -m-4">
        <div v-scroll-reveal="{ delay: 150 }" class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <img src="~/assets/icon/payment.svg" alt="" />
            </div>
            <h2 class="text-2xl text-dark font-bold mb-2">
              <span v-if="$store.state.lang == 'id'">
                {{ id.heading1 }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.heading1 }}
              </span>
            </h2>
            <p
              class="leading-relaxed text-base text-secondary font-description"
            >
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
        <div v-scroll-reveal="{ delay: 200 }" class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <img src="~/assets/icon/calendar.svg" alt="" />
            </div>
            <h2 class="text-2xl text-dark font-bold mb-2">
              <span v-if="$store.state.lang == 'id'">
                {{ id.heading2 }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.heading2 }}
              </span>
            </h2>
            <p
              class="leading-relaxed text-base text-secondary font-description"
            >
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
        <div v-scroll-reveal="{ delay: 250 }" class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <img src="~/assets/icon/tax.svg" alt="" />
            </div>
            <h2 class="text-2xl text-dark font-bold mb-2">
              <span v-if="$store.state.lang == 'id'">
                {{ id.heading3 }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.heading3 }}
              </span>
            </h2>
            <p
              class="leading-relaxed text-base text-secondary font-description"
            >
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
        <div v-scroll-reveal="{ delay: 300 }" class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <img src="~/assets/icon/accounting.svg" alt="" />
            </div>
            <h2 class="text-2xl text-dark font-bold mb-2">
              <span v-if="$store.state.lang == 'id'">
                {{ id.heading4 }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.heading4 }}
              </span>
            </h2>
            <p
              class="leading-relaxed text-base text-secondary font-description"
            >
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
        <div v-scroll-reveal="{ delay: 350 }" class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <img src="~/assets/icon/marketing.svg" alt="" />
            </div>
            <h2 class="text-2xl text-dark font-bold mb-2">
              <span v-if="$store.state.lang == 'id'">
                {{ id.heading5 }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.heading5 }}
              </span>
            </h2>
            <p
              class="leading-relaxed text-base text-secondary font-description"
            >
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <nuxt-link
          v-scroll-reveal="{ delay: 350 }"
          to="/features"
          class="font-bold mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Try Free
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      en: {
        title: 'Main Featured',
        heading1: 'Get paid faster',
        heading2: 'Get back your time',
        heading3: 'Better tax control',
        heading4: 'Get hold of your accounting',
        heading5: 'Report in 1 click',
      },
      id: {
        title: 'Fitur Utama',
        heading1: 'Peroleh pembayaran secara cepat',
        heading2: 'Persingkat waktu anda',
        heading3: 'Kontrol perpajakan anda dengan lebih baik',
        heading4: 'Get hold of your accounting',
        heading5: 'Terima laporan akunting hanya dengan 1 tombol',
      },
    }
  },
}
</script>

<style></style>
