<template>
  <section class="bg-gray-100">
    <div
      class="container mx-auto flex px-5 mt-24 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          v-scroll-reveal="{ delay: 250 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/illustration/green2.png"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          v-scroll-reveal="{ delay: 200 }"
          class="sm:text-4xl text-3xl mb-4 font-bold leading-tight text-dark text-right"
        >
          <span v-if="$store.state.lang == 'en'" v-html="en.heading1">
            {{ en.heading1 }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading1 }}
          </span>
        </h1>
        <p
          v-scroll-reveal="{ delay: 250 }"
          class="mb-8 text-xl leading-relaxed font-description text-secondary"
        >
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
            to="/show/financial"
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
    </div>

    <div
      class="container mx-auto flex px-5 mt-24 mb-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          v-scroll-reveal="{ delay: 200 }"
          class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight text-gray-900"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading2 }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading2 }}
          </span>
        </h1>
        <p
          v-scroll-reveal="{ delay: 250 }"
          class="mb-8 text-xl leading-relaxed font-description text-secondary"
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
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          v-scroll-reveal="{ delay: 250 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/illustration/vesa.png"
        />
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
