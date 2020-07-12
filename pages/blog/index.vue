<template>
  <section class="text-gray-700 body-font">
    <!-- Skeleton Loader -->
    <div v-if="loading" class="container mx-auto flex flex-wrap py-24">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <vue-content-loading :width="300" :height="300">
          <circle cx="30" cy="30" r="30" />
          <rect y="70" rx="4" ry="4" width="150" height="10" />
          <rect y="90" rx="4" ry="4" width="300" height="20" />
          <rect y="125" rx="4" ry="4" width="150" height="15" />
        </vue-content-loading>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <vue-content-loading :width="300" :height="300">
          <circle cx="30" cy="30" r="30" />
          <rect y="70" rx="4" ry="4" width="150" height="10" />
          <rect y="90" rx="4" ry="4" width="300" height="20" />
          <rect y="125" rx="4" ry="4" width="150" height="15" />
        </vue-content-loading>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <vue-content-loading :width="300" :height="300">
          <circle cx="30" cy="30" r="30" />
          <rect y="70" rx="4" ry="4" width="150" height="10" />
          <rect y="90" rx="4" ry="4" width="300" height="20" />
          <rect y="125" rx="4" ry="4" width="150" height="15" />
        </vue-content-loading>
      </div>
    </div>

    <div v-if="!loading" class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="data in article" :key="data.id" class="p-4 md:w-1/3">
          <nuxt-link
            :to="{ name: 'blog-id___it', params: { id: data.id } }"
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden pop"
          >
            <div
              class="flex items-center justify-center mx-auto h-48 bg-green-400 rounded-md"
            >
              <h1 class="uppercase font-bold text-white text-4xl">
                #{{ (data.category.substring(-0, 10)) }}
              </h1>
            </div>
            <div class="p-6">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
              >
                {{ data.category }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ data.title }}
              </h1>
              <p class="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <div class="flex items-center flex-wrap">
                <a
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >Read More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span
                  class="text-gray-600 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Now
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VueContentLoading } from 'vue-content-loading'

export default {
  components: {
    VueContentLoading,
  },
  data() {
    return {
      article: [],
      loading: true,
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/article'
        )

        if (response.status === 200) {
          this.article = response.data.data
          this.loading = false
        }
      } catch (e) {
        console.log(this.response.error)
      }
    },
  },
}
</script>

<style></style>
