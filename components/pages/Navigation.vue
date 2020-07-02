<template>
  <div class="bg-gray-200 px-4 py-4">
    <div
      class="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
    >
      <div>
        <a href="#" class="inline-block py-2 text-gray-800 text-2xl font-bold"
          >POINT ERP.</a
        >
      </div>

      <div>
        <div class="hidden md:block">
          <nuxt-link
            to="/"
            :class="{
              'text-blue-700 font-bold': this.$route.name.includes('index'),
            }"
            class="inline-block py-1 md:py-4 text-gray-500 mr-6 font-medium"
            @click="activeTab = 1"
          >
            Beranda
          </nuxt-link>
          <nuxt-link
            to="/web/features"
            :class="{
              'text-blue-700 font-bold': this.$route.name.includes('features'),
            }"
            class="inline-block py-1 md:py-4 text-gray-500 mr-6 font-medium"
            @click="activeTab = 2"
            >Features</nuxt-link
          >

          <nuxt-link
            to="/web/about"
            :class="{
              'text-blue-700 font-bold': this.$route.name.includes('about'),
            }"
            class="inline-block py-1 md:py-4 text-gray-500 mr-6 font-medium"
            @click="activeTab = 3"
            >About Point</nuxt-link
          >

          <nuxt-link
            to="/web/articles"
            :class="{
              'text-blue-700 font-bold': this.$route.name.includes('articles'),
            }"
            class="inline-block py-1 md:py-4 text-gray-500 mr-6 font-medium"
            @click="activeTab = 4"
            >Articles</nuxt-link
          >
          <nuxt-link
            to="/web/pricing"
            :class="{
              'text-blue-700 font-bold': this.$route.name.includes('pricing'),
            }"
            class="inline-block py-1 md:py-4 text-gray-500 mr-6 font-medium"
            @click="activeTab = 1"
            >Pricing</nuxt-link
          >
          <nuxt-link
            to="/web/contact"
            :class="{
              'text-blue-700 font-bold': this.$route.name.includes('contact'),
            }"
            class="inline-block py-1 md:py-4 text-gray-500 mr-6 font-medium"
            @click="activeTab = 5"
            >Contact Us</nuxt-link
          >
        </div>
      </div>

      <div class="hidden md:block">
        <a
          href="#"
          class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
        >
          {{ id.lang }} {{ $store.state.lang }}
        </a>
        <a
          class="inline-block py-2 px-4 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg"
          @click="$store.commit('changeEN')"
        >
          Try Free trial
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: [],
      id: {
        lang: 'Indonesia',
      },
      en: {
        lang: 'English',
      },
    }
  },
}
</script>
