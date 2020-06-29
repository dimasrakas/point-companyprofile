<template>
  <div class="bg-gray-200 md:overflow-hidden">
    <div class="px-4 py-16 mt-5">
      <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
        <h1
          v-cloak
          v-scroll-reveal
          class="font-bold text-gray-800 text-xl sm:text-2xl md:text-5xl leading-tight mb-6"
        >
          Fully control your business while on the go
        </h1>

        <p
          v-cloak
          v-scroll-reveal="{ delay: 250 }"
          class="text-gray-600 md:text-xl md:px-18"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
        </p>

        <div
          v-cloak
          v-scroll-reveal="{ delay: 300 }"
          class="flex justify-center mt-10"
        >
          <button
            class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 font-bold rounded text-xl"
          >
            Try Try Free
          </button>
          <div
            class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 rounded text-xl"
          >
            for 1 month
          </div>
        </div>

        <div
          class="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"
        ></div>

        <div
          class="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"
        ></div>
      </div>
    </div>

    <svg
      class="fill-current bg-gray-200 text-white hidden md:block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 250"
    >
      <path
        fill-opacity="1"
        d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
