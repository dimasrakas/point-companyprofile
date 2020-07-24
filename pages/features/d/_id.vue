<template>
  <section class="py-20">
    <!-- Modal Option -->
    <modal
      name="feature-modal"
      shift-x="0.98"
      shift-y="0.1"
      height="300px"
      width="400px"
      :adaptive="true"
    >
      <div class="flex flex-col px-4 py-4">
        <!-- Select for Header -->
        <h5 class="text-dark leading-none mb-1">
          <span v-if="$store.state.lang == 'en'">{{
            en.optionsubheading
          }}</span>
          <span v-if="$store.state.lang == 'id'">{{
            id.optionsubheading
          }}</span>
          :
        </h5>
        <div class="w-full mb-6 md:mb-0">
          <div class="relative">
            <select
              id="grid-state"
              v-model="header"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              @change="modalHeaderSelected()"
            >
              <option
                v-for="dataHeader in optionsHeader"
                :key="dataHeader.id"
                :value="dataHeader.id"
              >
                <span v-if="$store.state.lang == 'en'">{{
                  dataHeader.name_lang.en
                }}</span>
                <span v-if="$store.state.lang == 'id'">{{
                  dataHeader.name_lang.id
                }}</span>
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Select for SubHeader -->
        <h5 class="text-dark leading-none mt-5 mb-1">
          <span v-if="$store.state.lang == 'en'">{{ en.optiondetail }}</span>
          <span v-if="$store.state.lang == 'id'">{{ id.optiondetail }}</span> :
        </h5>
        <div class="w-full mb-6 md:mb-0">
          <div class="relative">
            <select
              id="grid-state"
              v-model="detail"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              @change="modalDetailSelected()"
            >
              <option
                v-for="dataDetail in optionsDetail"
                :key="dataDetail.id"
                :value="dataDetail.id"
              >
                <span v-if="$store.state.lang == 'en'">{{
                  dataDetail.name_lang.en
                }}</span>
                <span v-if="$store.state.lang == 'id'">{{
                  dataDetail.name_lang.id
                }}</span>
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </modal>

    <!-- Navigation -->
    <div class="container mx-auto px-2 flex items-center justify-end">
      <div class="flex flex-col justify-end">
        <div class="flex justify-end" @click="show()">
          <svg
            id="v-step-0"
            class="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Heading Sub Heading -->
    <div
      class="container mx-auto flex items-center justify-center flex-col mb-10"
    >
      <h1>{{ this.$route.name }}</h1>
      <h1
        class="title-font text-2xl sm:text-xl md:text-4xl lg:text-4xl font-header font-bold"
      >
        <span v-if="$store.state.lang == 'en'">{{ headerString.en }}</span>
        <span v-if="$store.state.lang == 'id'">{{ headerString.id }}</span>
      </h1>
      <h6
        class="text-sm sm:text-lg md:text-lg lg:text-lg leading-relaxed font-description text-center"
      >
        <span v-if="$store.state.lang == 'en'">{{ en.subheading }}</span>
        <span v-if="$store.state.lang == 'id'">{{ id.subheading }}</span>
      </h6>
    </div>

    <div v-if="loading" class="container mx-auto flex flex-wrap">
      <div
        v-for="data in 6"
        :key="data.id"
        class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
      >
        <div class="bg-white shadow-lg p-4">
          <vue-content-loading :width="300" :height="300">
            <rect y="0" rx="4" ry="4" width="300" height="100" />
            <rect y="120" rx="4" ry="4" width="300" height="20" />
            <rect y="150" rx="4" ry="4" width="180" height="20" />
          </vue-content-loading>
        </div>
      </div>
    </div>

    <div v-if="!loading" class="container px-5 mx-auto">
      <!-- Feature Sub Header -->
      <div
        v-if="showFeatureSubHeaders === true"
        class="flex flex-wrap -mx-4 -mb-10 text-center"
      >
        <div
          v-for="subheader in featureSubHeaders"
          :key="subheader.id"
          class="sm:w-1/2 mb-10 px-10 rounded-lg cursor-pointer"
          @click="detailSelected(subheader.id)"
        >
          <div
            class="border rounded-lg h-full w-full p-4 pop cursor-pointer hover:bg-green-500 hover:text-white"
          >
            <div class="rounded-lg h-48 overflow-hidden">
              <img
                alt="content"
                class="h-48 w-full"
                :src="
                  'https://private.server.dimasrakas.com/illustration/' +
                  subheader.image +
                  '.svg'
                "
              />
            </div>
            <h2 class="title-font text-3xl font-semibold mt-6 mb-3">
              <span v-if="$store.state.lang == 'en'">{{
                subheader.name_lang.en
              }}</span>
              <span v-if="$store.state.lang == 'id'">{{
                subheader.name_lang.id
              }}</span>
            </h2>
            <p class="leading-relaxed text-base">
              <span v-if="$store.state.lang == 'en'">
                {{ subheader.description_lang.en }}
              </span>
              <span v-if="$store.state.lang == 'id'">
                {{ subheader.description_lang.id }}
              </span>
            </p>
          </div>
        </div>
      </div>

      <!-- Feature Detail -->
      <div
        v-if="showFeatureDetails === true"
        class="flex flex-wrap -mx-4 text-center"
      >
        <div
          v-for="details in featureDetails"
          :key="details.id"
          class="sm:w-1/3 p-4"
        >
          <div
            class="border rounded-lg h-full w-full p-4 pop cursor-pointer hover:bg-green-500 hover:text-white"
            @click="actionLogin()"
          >
            <div class="rounded-lg h-48 overflow-hidden">
              <img
                alt="content"
                class="object-center h-full w-full"
                :src="
                  'https://private.server.dimasrakas.com/illustration/' +
                  details.image +
                  '.svg'
                "
              />
            </div>
            <h2 class="text-2xl font-semibold mt-6 mb-3 leading-tight">
              <span v-if="$store.state.lang == 'en'">
                {{ details.name_lang.en }}
              </span>
              <span v-if="$store.state.lang == 'id'">
                {{ details.name_lang.id }}
              </span>
            </h2>
            <p class="leading-relaxed text-base">
              <span v-if="$store.state.lang == 'en'">
                {{ details.description_lang.en }}
              </span>
              <span v-if="$store.state.lang == 'id'">
                {{ details.description_lang.id }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pop Up Tour -->
    <div v-if="$store.state.lang == 'id'">
      <v-tour name="myTour" :steps="stepsID" :options="myOptionsID"></v-tour>
    </div>

    <div v-if="$store.state.lang == 'en'">
      <v-tour name="myTour" :steps="stepsEN" :options="myOptionsEN"></v-tour>
    </div>
  </section>
</template>

<script>
import { VueContentLoading } from 'vue-content-loading'

export default {
  name: 'MyTour',
  components: {
    VueContentLoading,
  },
  data() {
    return {
      myOptionsID: {
        useKeyboardNavigation: false,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Tutup',
        },
      },
      stepsID: [
        {
          target: '#v-step-0', // We're using document.querySelector() under the hood
          content: `Anda dapat merubah pilihan anda dengan klik tombol ini`,
        },
      ],
      myOptionsEN: {
        useKeyboardNavigation: false,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Close',
        },
      },
      stepsEN: [
        {
          target: '#v-step-0', // We're using document.querySelector() under the hood
          content: `You can change your choice later by clicking this button`,
        },
      ],
      en: {
        heading: '',
        subheading: 'What do you currently need ?',
        description: '',
        tryfree: '',
        showme: '',
        option: 'Option',
        optionsubheading: 'You choose as your business',
        optiondetail: 'And you need to',
      },
      id: {
        heading: '',
        subheading: 'Apa yang anda perlukan?',
        description: '',
        tryfree: '',
        showme: '',
        option: 'Pilihan',
        optionsubheading: 'Anda memilih',
        optiondetail: 'Dan anda perlu',
      },
      header: '',
      headerString: {
        en: '',
        id: '',
      },
      detail: '',
      detailString: {
        en: '',
        id: '',
      },
      optionsHeader: [],
      optionsDetail: [],
      showFeatureSubHeaders: false,
      featureSubHeaders: [],
      showFeatureDetails: false,
      featureDetails: [],
      loading: true,
    }
  },

  mounted() {
    this.getHeader()
    this.getSubHeader()
    this.header = this.$route.params.id
    this.$tours.myTour.start()
  },

  methods: {
    actionLogin() {
      window.location = 'https://cloud.point.red'
    },
    show() {
      this.$modal.show('feature-modal')
    },
    hide() {
      this.$modal.hide('feature-modal')
    },

    // Select Data from Modals
    modalHeaderSelected() {
      this.detail = ''
      this.showFeatureDetails = false
      this.updateSubHeader()
      this.getHeaderOne()
    },
    modalDetailSelected() {
      this.showFeatureSubHeaders = false
      this.hide()
      this.updateDetail()
      this.getSubHeaderOne()
    },

    // Select Data
    headerSelected(value) {
      this.header = value
      this.detail = ''
      this.showFeatureDetails = false
      this.updateSubHeader()
      this.getHeaderOne()
    },
    detailSelected(value) {
      this.detail = value
      this.showFeatureSubHeaders = false
      this.hide()
      this.updateDetail()
      this.getSubHeaderOne()
    },

    // Get Data Header
    async getHeader() {
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/feature/header'
        )

        if (response.status === 200) {
          this.optionsHeader = response.data
          this.getHeaderOne()
        }
      } catch (e) {
        console.log(this.response.error)
      }
    },
    async getHeaderOne() {
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/feature/header/f/' +
            this.header
        )

        if (response.status === 200) {
          this.headerString.en = response.data.name_lang.en
          this.headerString.id = response.data.name_lang.id
        }
      } catch (e) {
        console.log(this.response.error)
      }
    },

    // Get Data Sub Header
    async getSubHeader() {
      this.loading = true
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/feature/header/' +
            this.$route.params.id
        )

        if (response.status === 200) {
          this.featureSubHeaders = response.data
          this.optionsDetail = response.data
          this.showFeatureSubHeaders = true
          this.loading = false
        }
      } catch (e) {
        // console.log(this.response.error)
        console.log('error')
      }
    },
    async getSubHeaderOne() {
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/feature/header/fsh/' +
            this.detail
        )

        if (response.status === 200) {
          this.headerString.en = response.data.name_lang.en
          this.headerString.id = response.data.name_lang.id
        }
      } catch (e) {
        console.log(this.response.error)
      }
    },
    async updateSubHeader() {
      this.loading = true

      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/feature/header/' +
            this.header
        )

        if (response.status === 200) {
          this.featureSubHeaders = response.data
          this.optionsDetail = response.data
          this.showFeatureSubHeaders = true
          this.loading = false
        }
      } catch (e) {
        console.log(this.response.error)
      }
    },

    async updateDetail() {
      this.loading = true

      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/feature/header/subheader/' +
            this.detail
        )

        if (response.status === 200) {
          this.featureDetails = response.data
          this.showFeatureSubHeaders = false
          this.showFeatureDetails = true
          this.loading = false
        }
      } catch (e) {
        // console.log(this.response.error)
        console.log('error')
      }
    },
  },
}
</script>

<style></style>
