<template>
  <section class="py-20">
    <div
      class="container mx-auto flex py-10 items-center justify-center flex-col"
    >
      <div class="text-center lg:w-2/3 w-full">
        <h1
          v-scroll-reveal="{ delay: 250 }"
          class="title-font sm:text-4xl text-4xl font-bold text-gray-900"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading }}
          </span>
        </h1>
        <p v-scroll-reveal="{ delay: 300 }" class="text-lg leading-relaxed">
          <span v-if="$store.state.lang == 'en'">
            {{ en.subheading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.subheading }}
          </span>
        </p>
      </div>
    </div>

    <div v-if="loading" class="container mx-auto flex flex-wrap">
      <div v-for="data in 3" :key="data.id" class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white shadow-lg p-4">
          <vue-content-loading :width="300" :height="300">
            <rect y="0" rx="4" ry="4" width="300" height="100" />
            <rect y="120" rx="4" ry="4" width="300" height="20" />
            <rect y="150" rx="4" ry="4" width="300" height="20" />
            <rect y="180" rx="4" ry="4" width="150" height="15" />
          </vue-content-loading>
        </div>
      </div>
    </div>

    <div v-if="!loading" class="container mb-48 mx-auto">
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <nuxt-link
          v-for="data in featureHeaders"
          :key="data.id"
          :to="{ name: 'features-d-id___it', params: { id: data.id } }"
          class="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-center pop"
        >
          <div class="">
            <img
              v-scroll-reveal="{ delay: 350 }"
              alt="content"
              class="h-48 w-full mb-4"
              :src="
                'http://private.server.dimasrakas.com/illustration/' +
                data.image
              "
            />
          </div>
          <h2
            v-scroll-reveal="{ delay: 350 }"
            class="text-3xl font-bold title-font text-gray-900 text-center"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ data.name_lang.en }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ data.name_lang.id }}
            </span>
          </h2>
          <p
            v-scroll-reveal="{ delay: 400 }"
            class="text-base leading-relaxed mt-2 text-center"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ data.description_lang.en }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ data.description_lang.id }}
            </span>
          </p>
        </nuxt-link>
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
      en: {
        heading: 'Tell us your business',
        subheading:
          'To get started, tell us a bit about you and what you need. Well show you how Point ERP best suits your needs.',
        description: '',
        tryfree: '',
        showme: '',
      },
      id: {
        heading: 'Apa bisnis anda?',
        subheading:
          'Beri kami sedikit info tentang anda dan yang anda perlukan. Kami akan menunjukkan bagaimana Point ERP memenuhi kebutuhan anda',
        description: '',
        tryfree: '',
        showme: '',
      },
      featureHeaders: [],
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
          'https://admin.point.dimasrakas.com/api/v1/feature/header'
        )

        if (response.status === 200) {
          this.featureHeaders = response.data
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
