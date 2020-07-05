<template>
  <section>
    <div
      class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          v-scroll-reveal="{ delay: 200 }"
          class="text-dark sm:text-4xl text-3xl mb-2 font-bold leading-tight"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading }}
          </span>
        </h1>
        <h3 class="text-secondary leading-tight mb-4">
          <span v-if="$store.state.lang == 'en'">
            {{ en.subheading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.subheading }}
          </span>
        </h3>
        <p
          v-scroll-reveal="{ delay: 250 }"
          class="text-secondary mb-8 leading-relaxed"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.description }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.description }}
          </span>
        </p>
        <div v-scroll-reveal="{ delay: 300 }" class="flex justify-center">
          <nuxt-link
            to="/features"
            class="inline-flex text-white font-semibold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.tryfree }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.tryfree }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/show/control"
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
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          v-scroll-reveal="{ delay: 300 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/illustration/report_analysis_(1).svg"
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
        heading:
          'Control your business on the go and give yourself the holiday you deserve',
        subheading: 'Time to plan that holiday!',
        description: 'We got the royalty no.xxxxx for this feature',
        tryfree: 'Try Free',
        showme: 'Show me how',
      },
      id: {
        heading:
          'Tetap kontrol bisnis anda dengan mudah sambil menikmati liburan',
        subheading: 'Waktunya merencanakan liburan!',
        description: 'Get back your time',
        tryfree: 'Coba Gratis',
        showme: 'Selengkapnya',
      },
    }
  },
}
</script>

<style></style>
