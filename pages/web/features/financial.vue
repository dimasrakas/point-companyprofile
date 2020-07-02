<template>
  <section>
    <div
      class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center justify-center"
    >
      <h1 v-scroll-reveal="{ delay: 200 }" class="text-3xl font-bold">
        Login daily to the view of your financial position effortlessly
      </h1>
    </div>

    <div
      class="container mx-auto flex px-5 py-10 mb-16 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-15"
      >
        <h1
          v-scroll-reveal="{ delay: 250 }"
          class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight"
        >
          Profit
        </h1>
        <p
          v-scroll-reveal="{ delay: 300 }"
          class="mb-8 text-xl leading-relaxed"
        >
          What is my profit and loss as per today.
        </p>
      </div>
      <div class="lg:w-full max-w-xl md:w-1/2 w-1/2 pr-16">
        <img
          v-scroll-reveal="{ delay: 350 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/images/hero/hero-image.png"
        />
      </div>
    </div>

    <div
      class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-15"
      >
        <h1
          v-scroll-reveal="{ delay: 400 }"
          class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight"
        >
          Cash
        </h1>
        <p
          v-scroll-reveal="{ delay: 450 }"
          class="mb-8 text-xl leading-relaxed"
        >
          What is my cash and cash equivalent position
        </p>
      </div>
      <div class="lg:w-full max-w-xl md:w-1/2 w-1/2 pr-16">
        <img
          v-scroll-reveal="{ delay: 500 }"
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/images/hero/hero-images-dark3.png"
        />
      </div>
    </div>

    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <h2
            v-scroll-reveal="{ delay: 550 }"
            class="title-font text-3xl font-bold text-gray-900 mt-6 mb-6"
          >
            Who sould pay me.Who sould I pay
          </h2>
          <div
            v-scroll-reveal="{ delay: 600 }"
            class="rounded-lg shadow-2xl overflow-hidden"
          >
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/images/hero-image-2.png"
            />
          </div>
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <h2
            v-scroll-reveal="{ delay: 750 }"
            class="title-font text-3xl font-bold text-gray-900 mt-6 mb-6"
          >
            Where does all my money paid for
          </h2>
          <div
            v-scroll-reveal="{ delay: 800 }"
            class="rounded-lg shadow-2xl overflow-hidden"
          >
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/images/hero-image-1.png"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center justify-center"
    >
      <nuxt-link
        v-scroll-reveal="{ delay: 850 }"
        to="/web/features"
        class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
      >
        Get Started
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
