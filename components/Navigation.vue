<template>
  <div
    :class="{
      'shadow-2xl': this.$route.name.includes('index'),
    }"
    class="fixed w-full bg-white border px-2 sm:px-2 md:px-10 lg:px-10 py-1 z-50 shadow-md"
  >
    <div
      class="md:max-full md:mx-auto md:flex md:items-center md:justify-between"
    >
      <div class="flex justify-between items-center">
        <nuxt-link
          to="/"
          class="inline-block py-2 text-dark text-2xl font-extrabold"
        >
          <img class="h-10" src="~/assets/icon/point-logo.png" alt="" />
        </nuxt-link>

        <!-- Navigation for Mobile -->
        <div class="inline-block cursor-pointer md:hidden" @click="show()">
          <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
          <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
          <div class="bg-gray-400 w-8" style="height: 2px;"></div>
        </div>

        <!-- Navigation for Mobile -->
        <modal
          name="navigation"
          shift-x="0"
          shift-y="0.15"
          width="100%"
          height="auto"
        >
          <div class="flex flex-wrap p-4">
            <a
              href="https://cloud.point.red/"
              class="cursor-pointer inline-block font-bold py-2 px-4 text-white bg-primary hover:bg-green-500 rounded-lg mr-3"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.login }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.login }}
              </span>
            </a>
            <div
              class="cursor-pointer inline-block font-bold py-2 px-4 text-white bg-primary hover:bg-green-500 rounded-lg mr-3"
              @click="routeLink('/signup')"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.signup }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.signup }}
              </span>
            </div>
            <a
              class="cursor-pointer inline-block font-bold py-2 px-4 text-dark border border-dark hover:bg-green-100 hover:text-dark rounded-lg"
              @click="$store.commit('changeLanguange')"
            >
              <span v-if="$store.state.lang == 'id'">
                Bahasa <i class="bx bx-globe"></i>
              </span>
              <span v-if="$store.state.lang == 'en'">
                English <i class="bx bx-globe"></i>
              </span>
            </a>
          </div>
          <div class="flex flex-col p-4 text-xl">
            <div
              :class="{
                'font-extrabold': this.$route.name.includes('index'),
              }"
              class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
              @click="routeLink('/')"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.home }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.home }}
              </span>
            </div>
            <div
              :class="{
                'font-extrabold': this.$route.name.includes('features'),
              }"
              class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
              @click="routeLink('/features')"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.features }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.features }}
              </span>
            </div>
            <div
              :class="{
                'font-extrabold': this.$route.name.includes('about'),
              }"
              class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
              @click="routeLink('/about')"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.about }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.about }}
              </span>
            </div>
            <div
              :class="{
                'font-extrabold': this.$route.name.includes('blog'),
              }"
              class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
              @click="routeLink('/blog')"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.blog }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.blog }}
              </span>
            </div>
            <div
              :class="{
                'font-extrabold': this.$route.name.includes('pricing'),
              }"
              class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
              @click="routeLink('/pricing')"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.pricing }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.pricing }}
              </span>
            </div>
            <div
              :class="{
                'font-extrabold': this.$route.name.includes('contact'),
              }"
              class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
              @click="routeLink('/contact')"
            >
              <span v-if="$store.state.lang == 'id'">
                {{ id.contact }}
              </span>
              <span v-if="$store.state.lang == 'en'">
                {{ en.contact }}
              </span>
            </div>
          </div>
        </modal>
      </div>

      <div>
        <div class="hidden md:block">
          <nuxt-link
            to="/"
            :class="{
              'font-extrabold': this.$route.name.includes('index'),
            }"
            class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.home }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.home }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/features"
            :class="{
              'font-extrabold': this.$route.name.includes('features'),
            }"
            class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.features }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.features }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/about"
            :class="{
              'font-extrabold': this.$route.name.includes('about'),
            }"
            class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.about }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.about }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/blog"
            :class="{
              'font-extrabold': this.$route.name.includes('blog'),
            }"
            class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.blog }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.blog }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/pricing"
            :class="{
              'font-extrabold': this.$route.name.includes('pricing'),
            }"
            class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.pricing }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.pricing }}
            </span>
          </nuxt-link>
          <nuxt-link
            to="/contact"
            :class="{
              'font-extrabold': this.$route.name.includes('contact'),
            }"
            class="inline-block py-1 md:py-4 text-dark mr-6 font-medium"
          >
            <span v-if="$store.state.lang == 'id'">
              {{ id.contact }}
            </span>
            <span v-if="$store.state.lang == 'en'">
              {{ en.contact }}
            </span>
          </nuxt-link>
        </div>
      </div>
      <div class="items-center hidden md:block">
        <a
          href="https://cloud.point.red/"
          class="inline-block py-1 md:py-4 font-medium text-dark hover:text-dark mr-3"
        >
          <span v-if="$store.state.lang == 'id'">
            {{ id.login }}
          </span>
          <span v-if="$store.state.lang == 'en'">
            {{ en.login }}
          </span>
        </a>
        <nuxt-link
          to="/signup"
          class="cursor-pointer inline-block font-bold py-2 px-4 text-white bg-primary hover:bg-green-500 rounded-lg mr-3"
        >
          <span v-if="$store.state.lang == 'id'">
            {{ id.signup }}
          </span>
          <span v-if="$store.state.lang == 'en'">
            {{ en.signup }}
          </span>
        </nuxt-link>
        <a
          class="cursor-pointer inline-block font-bold py-2 px-4 text-dark border border-dark hover:bg-green-100 hover:text-dark rounded-lg"
          @click="$store.commit('changeLanguange')"
        >
          <span v-if="$store.state.lang == 'id'">
            Bahasa <i class="bx bx-globe"></i>
          </span>
          <span v-if="$store.state.lang == 'en'">
            English <i class="bx bx-globe"></i>
          </span>
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
      en: {
        home: 'Home',
        features: 'Features',
        about: 'About Point',
        blog: 'Blog',
        pricing: 'Pricing',
        contact: 'Contact',
        login: 'Login',
        signup: 'Signup',
      },
      id: {
        home: 'Beranda',
        features: 'Fitur',
        about: 'Tentang Point',
        blog: 'Blog',
        pricing: 'Harga',
        contact: 'Kontak',
        login: 'Masuk',
        signup: 'Daftar',
      },
    }
  },

  methods: {
    show() {
      this.$modal.show('navigation')
    },
    hide() {
      this.$modal.hide('navigation')
    },
    routeLink(params) {
      this.$router.push({ path: params })
      this.hide()
    },
  },
}
</script>
