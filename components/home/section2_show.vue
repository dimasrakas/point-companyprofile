<template>
  <section class="text-gray-700 body-font py-20">
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <iframe
        v-if="$isMobile()"
        width="360"
        height="215"
        :src="'https://www.youtube.com/embed/' + video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        v-if="!$isMobile()"
        width="660"
        height="415"
        :src="'https://www.youtube.com/embed/' + video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="text-center lg:w-2/3 w-full">
        <p class="mb-8 text-2xl text-dark leading-thight mt-5">
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading }}
          </span>
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex text-white font-semibold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.tryfree }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.tryfree }}
            </span>
          </button>
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
          'With just one click, you can do it everywhere, on your phone, tablet, laptop and PC ',
        subheading: '',
        description: '',
        tryfree: 'Try Free',
        showme: '',
      },
      id: {
        heading:
          'Hanya dengan satu klik, anda dapat melakukannya dimana saja; di HP, tablet maupun PC.',
        subheading: '',
        description: '',
        tryfree: 'Coba Gratis',
        showme: '',
      },
      video: '',
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/video/1'
        )

        if (response.status === 200) {
          this.video = response.data.url
        }
      } catch (e) {}
    },
  },
}
</script>

<style></style>
