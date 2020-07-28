<template>
  <section class="text-gray-700 body-font">
    <div
      v-if="articleDetail === ''"
      class="container mx-auto flex flex-col items-center justify-center h-screen w-screen"
    >
      <div class="pt-12">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_HTumD4.json"
          background="transparent"
          speed="1"
          style="width: 400px; height: 400px;"
          loop
          autoplay
        ></lottie-player>
      </div>
      <h1>{{ $store.state.lang == 'en' ? en.message : id.message }}</h1>
      <nuxt-link
        to="/"
        class="border-2 border-green-400 rounded-lg text-green-400 px-4 py-1"
      >
        {{ $store.state.lang == 'en' ? en.action : id.action }}
      </nuxt-link>
    </div>

    <div v-else class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
      <!-- Mobile -->
      <div
        v-if="$isMobile()"
        class="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10"
      >
        <div
          class="flex items-center justify-center mx-auto h-64 bg-green-400 rounded-md"
        >
          <img
            class="object-cover w-full h-64 rounded-md"
            :src="
              'http://admin.point.dimasrakas.com/storage/' + articleDetail.image
            "
            alt=""
          />
        </div>
      </div>

      <!-- Web -->
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-bold text-dark leading-none"
        >
          {{ articleDetail.title }}
        </h1>
        <div class="block mb-3 text-sm text-gray-500">
          {{ articleDetail.category }} |
          {{ articleDetail.created_at | moment('DD-MM-YYYY') }}
        </div>
        <div class="flex flex-wrap mb-3">
          <ShareNetwork
            network="whatsapp"
            :url="url"
            :title="articleDetail.title"
            :description="articleDetail.small_description"
          >
            <div class="flex flex-wrap mr-2 my-1">
              <div
                class="flex justify-center items-center bg-green-600 px-3 py-1 text-white font-medium cursor-pointer"
              >
                <i class="fab fa-whatsapp"></i>
              </div>
              <div
                class="bg-green-500 px-3 py-1 text-white font-medium cursor-pointer"
              >
                WhatsApp
              </div>
            </div>
          </ShareNetwork>

          <ShareNetwork
            network="twitter"
            :url="url"
            :title="articleDetail.title"
            :description="articleDetail.small_description"
            :quote="articleDetail.title"
            hashtags="pointerp,pinpoint"
            twitter-user="dimasrakas"
          >
            <div class="flex flex-wrap mr-2 my-1">
              <div
                class="flex justify-center items-center bg-blue-400 px-3 py-1 text-white font-medium cursor-pointer"
              >
                <i class="fab fa-twitter"></i>
              </div>
              <div
                class="bg-blue-300 px-3 py-1 text-white font-medium cursor-pointer"
              >
                Twitter
              </div>
            </div>
          </ShareNetwork>

          <ShareNetwork
            network="facebook"
            :url="url"
            :title="articleDetail.title"
            :description="articleDetail.small_description"
            :quote="articleDetail.title"
            hashtags="pointerp,pinpoint"
          >
            <div class="flex flex-wrap mr-2 my-1">
              <div
                class="flex justify-center items-center bg-blue-700 px-3 py-1 text-white font-medium cursor-pointer"
              >
                <i class="fab fa-facebook-f"></i>
              </div>
              <div
                class="bg-blue-600 px-3 py-1 text-white font-medium cursor-pointer"
              >
                Facebook
              </div>
            </div>
          </ShareNetwork>

          <ShareNetwork network="linkedin" :url="url">
            <div class="flex flex-wrap mr-2 my-1">
              <div
                class="flex justify-center items-center bg-blue-800 px-3 py-1 text-white font-medium cursor-pointer"
              >
                <i class="fab fa-linkedin-in"></i>
              </div>
              <div
                class="bg-blue-700 px-3 py-1 text-white font-medium cursor-pointer"
              >
                LinkedIn
              </div>
            </div>
          </ShareNetwork>
        </div>

        // eslint-disable-next-line vue/no-v-html
        <p v-html="articleDetail.html_content"></p>
      </div>
      <div v-if="!$isMobile()" class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <div
          class="flex items-center justify-center mx-auto h-64 bg-green-400 rounded-md"
        >
          <img
            class="object-cover w-full h-64 rounded-md"
            :src="
              'http://admin.point.dimasrakas.com/storage/' + articleDetail.image
            "
            alt=""
          />
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
        message: 'Page not found',
        action: 'Back to Home',
      },
      id: {
        message: 'Halaman tidak di temukan',
        action: 'Kembali ke Beranda',
      },
      articleDetail: '',
      url: '',
    }
  },

  mounted() {
    this.getData()
    this.url = document.URL
  },

  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/article/' +
            this.$route.query.id
        )

        if (response.status === 200) {
          this.articleDetail = response.data
          this.headers = response.headers
        }
      } catch (e) {}
    },
  },
}
</script>

<style></style>
