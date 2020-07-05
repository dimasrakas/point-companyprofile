<template>
  <section class="text-gray-700 body-font">
    <div
      class="container mx-auto flex px-5 py-10 mb-10 items-center justify-center flex-col"
    >
      <div class="text-center lg:w-2/3 w-full">
        <div class="flex items-center justify-center py-4">
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/RMb0k8E7ry0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="flex justify-center mt-4">
          <nuxt-link
            to="/features"
            class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 font-bold rounded text-lg"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.button }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.button }}
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
        heading: '',
        subheading: '',
        description: '',
        button: 'Get Started',
        subbutton: '',
      },
      id: {
        heading: '',
        subheading: '',
        description: '',
        button: 'Coba Gratis',
        subbutton: '',
      },
    }
  },
}
</script>

<style></style>
