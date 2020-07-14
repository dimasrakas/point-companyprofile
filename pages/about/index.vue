<template>
  <section class="py-20">
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          v-scroll-reveal="{ delay: 250 }"
          class="title-font sm:text-4xl text-4xl font-bold text-dark"
        >
          <span v-if="$store.state.lang == 'en'">{{ en.heading }}</span>
          <span v-if="$store.state.lang == 'id'">{{ id.heading }}</span>
        </h1>
        <p
          v-scroll-reveal="{ delay: 300 }"
          class="lg:w-2/3 mx-auto leading-relaxed text-lg font-subheading"
        >
          <span v-if="$store.state.lang == 'en'">{{ en.subheading }}</span>
          <span v-if="$store.state.lang == 'id'">{{ id.subheading }}</span>
        </p>
      </div>
      <div class="flex flex-wrap">
        <div
          v-scroll-reveal="{ delay: 350 }"
          class="flex flex-col justify-center xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 text-center"
        >
          <h2
            class="text-xl sm:text-xl text-dark font-bold font-heading leading-none mb-2"
          >
            Point Core
          </h2>
          <p class="leading-relaxed text-secondary font-description mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            class="mt-6 w-64"
            src="~/assets/illustration/point-core.svg"
            alt
          />
        </div>

        <div
          v-scroll-reveal="{ delay: 400 }"
          class="flex flex-col justify-center xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 text-center border-l-2 border-gray-200"
        >
          <h2
            class="text-xl sm:text-xl text-dark font-bold font-heading leading-none mb-2"
          >
            Point Hub
          </h2>
          <p class="leading-relaxed text-secondary font-description mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            class="mt-6 w-64"
            src="~/assets/illustration/point-hub.svg"
            alt
          />
        </div>

        <div
          v-scroll-reveal="{ delay: 450 }"
          class="flex flex-col justify-center xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 text-center border-l-2 border-gray-200"
        >
          <h2
            class="text-xl sm:text-xl text-dark font-bold font-heading leading-none mb-2"
          >
            Point Connect
          </h2>
          <p class="leading-relaxed text-secondary font-description mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            class="mt-6 w-64"
            src="~/assets/illustration/point-connect.svg"
            alt
          />
        </div>
      </div>
      <nuxt-link
        v-scroll-reveal="{ delay: 500 }"
        to="/features"
        class="flex mx-auto w-64 mt-16 text-white justify-center bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        <span v-if="$store.state.lang == 'en'">{{ en.button }}</span>
        <span v-if="$store.state.lang == 'id'">{{ id.button }}</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      en: {
        heading: 'Your Lifes Work, Powered By Our Lifes Work',
        subheading:
          'Unique and powerful suire of software to run your entire business, brought to you by a company with the long term vision to transform the way you work',
        description: '',
        button: 'Register Now Free',
      },
      id: {
        heading: 'Your Lifes Work, Powered By Our Lifes Work',
        subheading:
          'Unique and powerful suire of software to run your entire business, brought to you by a company with the long term vision to transform the way you work',
        description: '',
        button: 'Register Now Free',
      },
    }
  },
}
</script>

<style></style>
