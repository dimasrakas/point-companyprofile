<template>
  <section class="py-20">
    <div
      class="container mx-auto flex px-5 py-10 mb-10 items-center justify-center flex-col"
    >
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl font-bold text-dark">
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading }}
          </span>
        </h1>
        <p class="mb-8 leading-relaxed text-secondary">
          <span v-if="$store.state.lang == 'en'">
            {{ en.subheading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.subheading }}
          </span>
        </p>

        <div class="flex items-center justify-center py-4">
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/6qys-562kp4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="flex justify-center mt-4">
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
        heading: '2 Birds 1 Stone',
        subheading: 'Market your business while doing business operations',
        description: '',
        tryfree: 'Get Started',
        showme: '',
      },
      id: {
        heading: 'Sambil Menyelam, Minum Air',
        subheading:
          'Promosikan bisnis anda dengan menjalankan operasional bisnis seperti biasa',
        description: '',
        tryfree: 'Mulai Sekarang',
        showme: '',
      },
    }
  },
}
</script>

<style></style>
