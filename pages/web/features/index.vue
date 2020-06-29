<template>
  <div>
    <section class="text-gray-700 body-font">
      <div
        class="container mx-auto flex py-5 mb-20 items-center justify-center flex-col"
      >
        <img
          v-scroll-reveal="{ delay: 200 }"
          class="lg:w-3/6 md:w-3/6 w-5/6 mb-2 object-cover object-center rounded"
          alt="hero"
          src="~/assets/images/online_presentation_two_color.svg"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1
            v-scroll-reveal="{ delay: 250 }"
            class="title-font sm:text-4xl text-4xl font-bold text-gray-900"
          >
            Tell us your business
          </h1>
          <p
            v-scroll-reveal="{ delay: 300 }"
            class="mb-8 text-lg leading-relaxed"
          >
            To get started, tell us a bit about you and what you need. We'll
            show you how Point ERP best suits your needs.
          </p>
        </div>
      </div>
    </section>
    <section class="text-gray-700 body-font">
      <div class="container py-5 mb-48 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <nuxt-link
            to="/web/features/service"
            class="p-4 md:w-1/3 sm:mb-0 mb-6"
          >
            <div class="rounded-lg overflow-hidden">
              <img
                v-scroll-reveal="{ delay: 350 }"
                alt="content"
                class="shadow-lg h-full w-full"
                src="~/assets/images/features-split-top-03 (3).png"
              />
            </div>
            <h2
              v-scroll-reveal="{ delay: 350 }"
              class="text-3xl font-bold title-font text-gray-900 mt-5"
            >
              SERVICE
            </h2>
            <p
              v-scroll-reveal="{ delay: 400 }"
              class="text-base leading-relaxed mt-2"
            >
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </nuxt-link>
          <nuxt-link
            to="/web/features/trading"
            class="p-4 md:w-1/3 sm:mb-0 mb-6"
          >
            <div class="rounded-lg overflow-hidden">
              <img
                v-scroll-reveal="{ delay: 450 }"
                alt="content"
                class="shadow-lg h-full w-full"
                src="~/assets/images/features-split-top-02 (3).png"
              />
            </div>
            <h2
              v-scroll-reveal="{ delay: 500 }"
              class="text-3xl font-bold title-font text-gray-900 mt-5"
            >
              TRADING
            </h2>
            <p
              v-scroll-reveal="{ delay: 550 }"
              class="text-base leading-relaxed mt-2"
            >
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </nuxt-link>
          <nuxt-link
            to="/web/features/manufacture"
            class="p-4 md:w-1/3 sm:mb-0 mb-6"
          >
            <div class="rounded-lg overflow-hidden">
              <img
                v-scroll-reveal="{ delay: 650 }"
                alt="content"
                class="shadow-lg h-full w-full"
                src="~/assets/images/features-split-top-02 (3).png"
              />
            </div>
            <h2
              v-scroll-reveal="{ delay: 700 }"
              class="text-3xl font-bold title-font text-gray-900 mt-5"
            >
              MANUFACTURE
            </h2>
            <p
              v-scroll-reveal="{ delay: 750 }"
              class="text-base leading-relaxed mt-2"
            >
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
