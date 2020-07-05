<template>
  <section>
    <div
      class="container mx-auto flex px-5 mb-10 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          v-scroll-reveal="{ delay: 200 }"
          class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight text-gray-900"
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
        <div class="flex justify-center">
          <nuxt-link
            v-scroll-reveal="{ delay: 300 }"
            to="/web/pointhub"
            class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 font-semibold rounded text-lg"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.button }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.button }}
            </span>
          </nuxt-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          v-scroll-reveal="{ delay: 250 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/illustration/code_development__two_color.svg"
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
        heading: 'Have existing software and dont want the hassle of moving ?',
        subheading:
          'Worry not, our software are 100% connectable with any other software',
        description: '',
        button: 'I want to know more',
        showme: '',
      },
      id: {
        heading: 'Sudah memakai software ERP dan malas untuk pindah?',
        subheading:
          'Jangan khawatir! Software kami dapat 100% terintergrasi dengan software apapun',
        description: '',
        button: 'Bagaimana caranya?',
        showme: '',
      },
    }
  },
}
</script>

<style></style>
