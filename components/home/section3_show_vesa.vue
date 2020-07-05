<template>
  <section class="py-20">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center text-dark"
      >
        <h1 class="sm:text-5xl text-5xl mb-4 font-bold">
          VESA
        </h1>
        <p class="py-4 text-2xl font-description">
          <span v-if="$store.state.lang == 'en'" v-html="en.heading">
            {{ en.heading }}
          </span>
          <span v-if="$store.state.lang == 'id'" v-html="id.heading">
            {{ id.heading }}
          </span>
        </p>
        <p class="py-4 text-2xl font-bold font-description">
          <span v-if="$store.state.lang == 'en'">
            {{ en.subheading }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.subheading }}
          </span>
        </p>
        <p class="py-4 text-2xl font-base font-description">
          <span v-if="$store.state.lang == 'en'">
            {{ en.description }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.description }}
          </span>
        </p>
        <p class="py-4 text-2xl font-base font-description">
          <span v-if="$store.state.lang == 'en'">
            {{ en.description2 }}
          </span>
          <span v-if="$store.state.lang == 'id'">
            {{ id.description2 }}
          </span>
        </p>
        <div class="flex justify-center">
          <nuxt-link
            to="/features"
            class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded font-semibold text-lg"
          >
            <span v-if="$store.state.lang == 'en'">
              {{ en.tryfree }}
            </span>
            <span v-if="$store.state.lang == 'id'">
              {{ id.tryfree }}
            </span>
          </nuxt-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="~/assets/images/user_group_two_color.svg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      en: {
        heading:
          'Hello! My name is VESA and I am your new virtual assistant. I am here to help you managing your business. ',
        subheading:
          'Do you have to be reminded of that customer repayment due date? Invoice payment date? Your loyal customers birthday? ',
        description: 'Dont worry! You have me to remind you ',
        description2: 'Type in your message in the box to say Hi',
        tryfree: 'Try Free',
        showme: '',
      },
      id: {
        heading:
          'Halo! Nama saya VESA dan saya adalah asisten pribadi virtual anda. Saya akan membantu mengatur bisnis anda.',
        subheading:
          'Apakah anda perlu mengingat batas tanggal pelunasan pelanggan? batas akhir pembayaran tagihan? ulang tahun pelanggan? ',
        description:
          'Jangan khawatir! Saya disini akan membantu mengingatkan anda.',
        description2: 'Ketik pesan anda disamping untuk berkenalan dengan saya',
        tryfree: 'Coba Gratis',
        showme: '',
      },
    }
  },
}
</script>

<style></style>
