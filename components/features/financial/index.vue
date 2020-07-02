<template>
  <section>
    <div
      class="container mx-auto flex px-5 py-10 mb-16 md:flex-row flex-col items-center"
    >
      <div class="lg:w-full max-w-xl md:w-1/2 w-1/2 pr-16">
        <img
          v-scroll-reveal="{ delay: 250 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/images/artificial_intelligence_two_color.svg"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-15"
      >
        <h1
          v-scroll-reveal="{ delay: 200 }"
          class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight"
        >
          Time to put your <br class="hidden lg:inline-block" />business out
          there
        </h1>
        <p
          v-scroll-reveal="{ delay: 250 }"
          class="mb-8 text-xl leading-relaxed"
        >
          Instantly market yourself with our peer to peer marketplace hub.
        </p>
        <div v-scroll-reveal="{ delay: 300 }" class="flex justify-center">
          <nuxt-link
            to="/web/features"
            class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Try Free
          </nuxt-link>
          <nuxt-link
            to="/web/videos/explanation2"
            class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
          >
            Show me how
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
