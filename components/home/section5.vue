<template>
  <section>
    <div
      class="container mx-auto flex px-5 mt-24 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          v-scroll-reveal="{ delay: 250 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/illustration/profile_analysis__two_color.svg"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          v-scroll-reveal="{ delay: 200 }"
          class="sm:text-4xl text-3xl mb-4 font-bold leading-tight text-dark text-right"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading }}
          </span>
        </h1>
        <p
          v-scroll-reveal="{ delay: 250 }"
          class="mb-8 text-xl leading-relaxed font-description text-secondary"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.subheading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.subheading }}
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
              {{ en.tryfree }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.tryfree }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/show/financial"
            class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.showme }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.showme }}
            </span>
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
      en: {
        heading:
          'The fuel to keep your passion and your business works well is to be aware of your financial position EASILY',
        subheading: 'And..... we go it covered',
        description: '',
        tryfree: 'Try Free',
        showme: 'I want to know more ',
      },
      id: {
        heading:
          'Rahasia kesuksesan bisnis anda adalah dengan mengetahui laporan keuangan anda dengan mudah',
        subheading: 'Cek laporan keuangan anda sekarang dengan Point!',
        description: '',
        tryfree: 'Coba Gratis',
        showme: 'Selengkapnya',
      },
    }
  },
}
</script>

<style></style>
