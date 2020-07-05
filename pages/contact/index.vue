<template>
  <section class="text-gray-700 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
      <div
        v-scroll-reveal.reset="{ delay: 200 }"
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      >
        <iframe
          class="absolute inset-0"
          style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.598938585585!2d112.73280921498834!3d-7.28638917363671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbeb3c3ac31d%3A0xad129b26097bed7e!2sJl.%20Musi%20No.21%2C%20DR.%20Soetomo%2C%20Kec.%20Tegalsari%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060264!5e0!3m2!1sid!2sid!4v1593957304624!5m2!1sid!2sid"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
        <div class="bg-white relative flex flex-wrap py-6">
          <div class="lg:w-1/2 px-6">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm"
            >
              ADDRESS
            </h2>
            <p class="leading-relaxed">
              Point. Jalan. Musi Nomer 21, Kota Surabaya, Indonesia
            </p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm"
            >
              EMAIL
            </h2>
            <a class="text-green-500 leading-relaxed">pointred017@gmail.com</a>
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4"
            >
              PHONE
            </h2>
            <p class="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div
        v-scroll-reveal.reset="{ delay: 250 }"
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 class="text-dark text-4xl mb-1 font-bold">
          CONTACT US
        </h2>
        <p class="leading-relaxed mb-5 text-secondary">
          Point Jl. Musi 21, Surabaya email : Pointred017@gmail.com
        </p>
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
          placeholder="Name"
          type="text"
        />
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
          placeholder="Email"
          type="email"
        />
        <textarea
          class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-green-500 text-base px-4 py-2 mb-4 resize-none"
          placeholder="Message"
        ></textarea>
        <button
          class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Button
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
