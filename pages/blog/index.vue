<template>
  <section class="text-gray-700 body-font">
    <!-- Skeleton Loader -->
    <div v-if="loading" class="container mx-auto flex flex-wrap py-24">
      <div
        v-for="data in 9"
        :key="data.id"
        class="w-full lg:1/3 xl:w-1/3 md:w-1/2 p-4"
      >
        <div class="bg-white shadow-lg p-4">
          <vue-content-loading :width="300" :height="300">
            <rect y="0" rx="4" ry="4" width="300" height="125" />
            <rect y="140" rx="4" ry="4" width="300" height="20" />
            <rect y="170" rx="4" ry="4" width="300" height="20" />
            <rect y="200" rx="4" ry="4" width="150" height="15" />
          </vue-content-loading>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-if="!loading" class="container px-5 pt-24 mx-auto">
      <div class="flex flex-row flex-wrap -mx-4">
        <nuxt-link
          v-for="data in article"
          :key="data.id"
          :to="{
            path: '/blog/d/',
            query: { p: data.slug, id: data.id },
          }"
          class="w-full sm:w-1/2 md:w-1/3 mb-4 p-4"
        >
          <div class="relative bg-white shadow-lg pop rounded-lg h-128">
            <picture class="block h-48 bg-green-500 border-b rounded-t-lg">
              <img
                class="object-cover rounded-t-lg w-full block h-48"
                :src="
                  'https://admin.point.dimasrakas.com/storage/' + data.image
                "
                alt=""
              />
            </picture>
            <div class="p-4">
              <h1 class="title-font text-xl font-medium text-gray-900">
                {{
                  data.title.length >= 35
                    ? data.title.substring(-0, 35) + '...'
                    : data.title
                }}
              </h1>
              <time
                class="block mb-3 text-sm text-gray-500"
                datetime="2019-01-01"
              >
                {{ data.created_at | moment('DD-MM-YYYY') }}
              </time>
              <p class="text-gray-600 mb-3">
                {{
                  data.small_description.length >= 118
                    ? data.small_description.substring(-0, 118) + '...'
                    : data.small_description
                }}
              </p>

              <div class="flex items-center flex-wrap">
                <a
                  class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  {{ $store.state.lang == 'en' ? en.readmore : id.readmore }}

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
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- Pagination -->
    <div class="container px-3 pb-24 pt-8 mx-auto">
      <vue-ads-pagination
        :total-items="12"
        :max-visible-pages="4"
        :items-per-page="6"
        :page="page"
        :loading="loading"
        @page-change="pageChange"
        @range-change="rangeChange"
      >
        <template slot-scope="props">
          <div class="vue-ads-pr-2 vue-ads-leading-loose">
            {{ $store.state.lang == 'en' ? en.content : id.content }}
            {{ props.start }}
            {{ $store.state.lang == 'en' ? en.to : id.to }}
            {{ props.end }}
            {{ $store.state.lang == 'en' ? en.from : id.from }}
            {{ props.total }}
          </div>
        </template>
        <template slot="buttons" slot-scope="props">
          <vue-ads-page-button
            v-for="(button, key) in props.buttons"
            :key="key"
            v-bind="button"
            @page-change="page = button.page"
          />
        </template>
      </vue-ads-pagination>
    </div>
  </section>
</template>

<script>
import { VueContentLoading } from 'vue-content-loading'

import '~/node_modules/@fortawesome/fontawesome-free/css/all.css'
import '~/node_modules/vue-ads-pagination/dist/vue-ads-pagination.css'

import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination'

export default {
  filters: {
    strippedContent(string) {
      return string.replace(/<\/?[^>]+>/gi, ' ')
    },
  },
  components: {
    VueContentLoading,
    VueAdsPagination,
    VueAdsPageButton,
  },
  data() {
    return {
      en: {
        content: 'Content',
        to: 'to',
        from: 'from',
        readmore: 'Read more',
      },
      id: {
        content: 'Konten',
        to: 'ke',
        from: 'dari',
        readmore: 'Baca selengkapnya',
      },
      article: [],
      loading: true,
      page: 0,
      totalitems: 0,
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      this.loading = true

      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/article?page=' +
            (this.page + 1)
        )

        if (response.status === 200) {
          this.article = response.data.data
          this.totalitems = response.data.per_page
          this.page = response.data.current_page - 1
          this.loading = false
          console.log(response.data)
        }
      } catch (e) {
        console.log(e.response.error)
      }
    },

    pageChange(page) {
      this.page = page
      this.getData()
    },

    rangeChange(start, end) {
      this.getData()
    },
  },
}
</script>

<style></style>
