<template>
  <footer class="text-gray-700 body-font">
    <div
      class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col"
    >
      <div
        class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10"
      >
        <a
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img
            class="h-20 w-20"
            src="~/assets/icon/point-logo-circle.png"
            alt=""
          />
          <span class="ml-3 text-xl">Point.RED</span>
        </a>
        <p class="mt-2 text-sm text-gray-500">
          <span v-if="$store.state.lang == 'id'">
            {{ id.headline }}
          </span>
          <span v-if="$store.state.lang == 'en'">
            {{ en.headline }}
          </span>
        </p>
      </div>
      <div
        class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left justify-center text-center order-first"
      >
        <div class="lg:w-1/3 md:w-1/2 w-1/2 px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.product }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.product }}
            </span>
          </h2>
          <nav class="list-none mb-10">
            <li>
              <nuxt-link
                to="/features"
                class="text-gray-600 hover:text-gray-800"
              >
                <span v-if="$store.state.lang == 'id'">
                  {{ id.features }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.features }}
                </span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/pricing"
                class="text-gray-600 hover:text-gray-800"
              >
                <span v-if="$store.state.lang == 'id'">
                  {{ id.pricing }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.pricing }}
                </span></nuxt-link
              >
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.developer }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.developer }}
                </span></a
              >
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.technology }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.technology }}
                </span></a
              >
            </li>
          </nav>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-1/2 px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.company }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.company }}
            </span>
          </h2>
          <nav class="list-none mb-10">
            <li>
              <nuxt-link to="/about" class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.about }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.about }}
                </span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/blog" class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.blog }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.blog }}
                </span></nuxt-link
              >
            </li>
            <li>
              <a
                href="https://github.com/point-red"
                class="text-gray-600 hover:text-gray-800"
              >
                <span v-if="$store.state.lang == 'id'">
                  {{ id.github }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.github }}
                </span></a
              >
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.becomepartner }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.becomepartner }}
                </span></a
              >
            </li>
          </nav>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-1/2 px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.support }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.support }}
            </span>
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.faq }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.faq }}
                </span></a
              >
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.helpcenter }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.helpcenter }}
                </span></a
              >
            </li>
            <li>
              <nuxt-link
                to="/contact"
                class="text-gray-600 hover:text-gray-800"
              >
                <span v-if="$store.state.lang == 'id'">
                  {{ id.contact }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.contact }}
                </span></nuxt-link
              >
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.privacy }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.privacy }}
                </span></a
              >
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">
                <span v-if="$store.state.lang == 'id'">
                  {{ id.term }}
                </span>
                <span v-if="$store.state.lang == 'en'">
                  {{ en.term }}
                </span></a
              >
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-gray-500 text-sm text-center sm:text-left">
          © 2020 Point.RED —
          <a
            href="#"
            rel="noopener noreferrer"
            class="text-gray-600 ml-1"
            target="_blank"
            >@ Point</a
          >
        </p>
        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
        >
          <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      en: {
        product: 'PRODUCT',
        features: 'Features',
        pricing: 'Pricing',
        developer: 'Developer',
        technology: 'Technology',
        //
        company: 'COMPANY',
        about: 'About',
        blog: 'Blog',
        github: 'Github',
        becomepartner: 'Become Partner',
        //
        support: 'SUPPORT',
        faq: 'FAQ',
        helpcenter: 'Help Center',
        contact: 'Contact',
        privacy: 'Privacy',
        term: 'Term',
        //
        headline:
          'Exceptional accounting and bookkeeping solutions in this most demanding era.',
      },
      id: {
        product: 'PRODUK',
        features: 'Fitur',
        pricing: 'Harga',
        developer: 'Pengembang',
        technology: 'Teknologi',
        //
        company: 'PERUSAHAAN',
        about: 'Tentang Kami',
        blog: 'Blog',
        github: 'Github',
        becomepartner: 'Menjadi Mitra',
        //
        support: 'DUKUNGAN',
        faq: 'Pertanyaan',
        helpcenter: 'Pusat Bantuan',
        contact: 'Kontak',
        privacy: 'Pribadi',
        term: 'Istilah',
        //
        headline:
          'Solusi akuntansi dan pembukuan yang luar biasa di era paling menuntut ini.',
      },
    }
  },
}
</script>

<style></style>
