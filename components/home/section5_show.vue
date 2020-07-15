<template>
  <section class="py-32">
    <div
      class="container mx-auto flex px-5 md:flex-row flex-col items-center justify-center"
    >
      <h1
        v-scroll-reveal="{ delay: 200 }"
        class="text-xl md:text-3xl lg:text-3xl font-bold text-dark text-center md:text-left lg:text-left"
      >
        <span v-if="$store.state.lang == 'en'">
          {{ en.heading }}
        </span>
        <span v-if="$store.state.lang == 'id'">
          {{ id.heading }}
        </span>
      </h1>
    </div>

    <div
      class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center justify-center"
    >
      <nuxt-link
        v-scroll-reveal="{ delay: 200 }"
        to="/features"
        class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded font-bold text-lg"
      >
        <span v-if="$store.state.lang == 'en'">
          {{ en.subheading }}
        </span>
        <span v-if="$store.state.lang == 'id'">
          {{ id.subheading }}
        </span>
      </nuxt-link>
    </div>

    <div
      class="container mx-auto flex px-5 py-10 mb-16 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-15"
      >
        <h1
          v-scroll-reveal="{ delay: 250 }"
          class="title-font sm:text-4xl text-3xl md:mb-4 lg:mb-4 font-bold text-dark leading-tight"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading2 }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading2 }}
          </span>
        </h1>
        <p
          v-scroll-reveal="{ delay: 300 }"
          class="md:mb-8 lg:mb-8 text-xl leading-relaxed text-secondary font-description"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.subheading2 }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.subheading2 }}
          </span>
        </p>
      </div>
      <div class="lg:w-full max-w-xl md:w-1/2 w-full md:pr-16 lg:pr-16">
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
          class="title-font sm:text-4xl text-3xl mb-4 font-bold text-dark leading-tight"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.heading3 }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.heading3 }}
          </span>
        </h1>
        <p
          v-scroll-reveal="{ delay: 450 }"
          class="md:mb-8 lg:mb-8 text-xl leading-relaxed text-secondary font-description"
        >
          <span v-if="$store.state.lang == 'en'">
            {{ en.subheading3 }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.subheading3 }}
          </span>
        </p>
      </div>
      <div class="lg:w-full max-w-xl md:w-1/2 w-full md:pr-16 lg:pr-16">
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
            class="title-font text-3xl font-bold text-dark mt-6 mb-6"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.heading4 }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.heading4 }}
            </span>
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
            class="title-font text-3xl font-bold text-dark mt-6 mb-6"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.heading5 }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.heading5 }}
            </span>
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
        to="/features"
        class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded font-bold text-lg"
      >
        <span v-if="$store.state.lang == 'en'">
          {{ en.tryfree }}
        </span>
        <span v-if="$store.state.lang == 'id'">
          {{ id.tryfree }}
        </span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      en: {
        heading:
          ' Login daily to the view of your financial position effortlessly ',
        subheading: 'Try yourself for FREE ',
        heading2: 'Profit',
        subheading2: 'What is my profit and loss as per today.',
        heading3: 'Cash',
        subheading3: 'What is my cash and cash equivalent position ',
        heading4: 'Who sould pay me.Who sould I pay ',
        subheading4: '',
        heading5: 'Where does all my money paid for ',
        subheading5: '',
        description: '',
        tryfree: 'Get Started',
        showme: '',
      },
      id: {
        heading:
          'Bersiaplah untuk disambut dengan laporan keuntungan anda setiap hari',
        subheading: 'Coba Gratis',
        heading2: 'Profit',
        subheading2: 'Berapa keuntungan saya hari ini',
        heading3: 'Cash',
        subheading3: 'Bagaimanakah posisi kas dan setara kas saya?',
        heading4:
          'Siapa yang harus membayar saya? Siapa yang perlu saya bayar?',
        subheading4: '',
        heading5: 'Kemana saja kah uang saya dibayarkan?',
        subheading5: '',
        description: '',
        tryfree: 'Get Started',
        showme: '',
      },
    }
  },
}
</script>

<style></style>
