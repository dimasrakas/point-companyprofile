<template>
  <section class="py-20">
    <div class="container mx-auto flex items-center justify-center flex-col">
      <h1>Pengaturan</h1>
      <form class="w-full max-w-xl">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              You choose
            </label>
          </div>
          <div class="md:w-2/3">
            <v-select
              :options="optionsHeader"
              @input="headerSelected"
            ></v-select>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              You choose
            </label>
          </div>
          <div class="md:w-2/3">
            <v-select
              :options="optionsDetail"
              @input="detailSelected"
            ></v-select>
          </div>
        </div>
      </form>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div v-if="header === 'Services'">
        <h1>Ini halamn services</h1>
      </div>
      <div v-if="header === 'Trading'">
        <h1>Ini halamn Trading</h1>
      </div>
      <div v-if="header === 'Manufacture'">
        <h1>Ini halamn Manufacture</h1>
      </div>

      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/images/hero-image-dark.png"
            />
          </div>
          <h2 class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3">
            Creating Invoice
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/images/hero-image-1.png"
            />
          </div>
          <h2 class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3">
            Start Bookkeping
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/images/features-tabs-image.png"
            />
          </div>
          <h2 class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3">
            Easily Read Reports
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="~/assets/images/hero-image-2.png"
            />
          </div>
          <h2 class="title-font text-3xl font-semibold text-gray-900 mt-6 mb-3">
            Not Sure Yet
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4 text-center justify-center py-4 mb-10">
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_printing_invoices_5r4r.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I need to create an invoice now
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_wallet_aym5.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I need to track my expenses now
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_Data_points_ubvs.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I'd like to import my bank transactions
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_finance_0bdk.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I have ending balances input
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
        <div class="sm:w-1/3 mb-10 px-4 py-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <img
              alt="content"
              class="object-center h-full w-full"
              src="~/assets/images/illustration/undraw_decide_3iwx.svg"
            />
          </div>
          <h2
            class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3 leading-tight"
          >
            I'm just testing things through in Point
          </h2>
          <p class="leading-relaxed text-base">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      header: '',
      detail: '',
      optionsHeader: ['Services', 'Trading', 'Manufacture'],
      optionsDetail: ['1', '2', '3', '4', '5'],
    }
  },

  methods: {
    headerSelected(value) {
      this.header = value
    },
    detailSelected(value) {
      this.detail = value
    },
  },
}
</script>

<style></style>
