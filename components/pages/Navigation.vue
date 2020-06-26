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
            class="inline-block py-1 md:py-4 text-blue-500 mr-6 font-bold"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/web/features"
            class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6 font-medium"
            >Features</nuxt-link
          >

          <nuxt-link
            to="/web/about"
            class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6 font-medium"
            >About Point</nuxt-link
          >
          <nuxt-link
            to="/web/pricing"
            class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6 font-medium"
            >Pricing</nuxt-link
          >
          <nuxt-link
            to="/web/contact"
            class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6 font-medium"
            >Contact Us</nuxt-link
          >
        </div>
      </div>

      <div class="hidden md:block">
        <a
          href="#"
          class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
          >Indonesia</a
        >
        <a
          href="#"
          class="inline-block py-2 px-4 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Try Free trial
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
