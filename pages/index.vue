<template>
  <div class="font-sans bg-white flex flex-col min-h-screen w-full">
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section5 />
    <Section6 />
    <Section7 />

    <div v-if="$store.state.lang == 'id'">
      <v-tour name="myTour" :steps="stepsID" :options="myOptionsID"></v-tour>
    </div>

    <div v-if="$store.state.lang == 'en'">
      <v-tour name="myTour" :steps="stepsEN" :options="myOptionsEN"></v-tour>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/home/hero'
import Section1 from '~/components/home/section1'
import Section2 from '~/components/home/section2'
import Section3 from '~/components/home/section3'
import Section5 from '~/components/home/section5'
import Section6 from '~/components/home/section6'
import Section7 from '~/components/home/section7'

export default {
  name: 'MyTour',
  components: {
    Hero,
    Section1,
    Section2,
    Section3,
    Section5,
    Section6,
    Section7,
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
          header: {
            title: 'Selamat Datang',
          },
          content: `Ide harian agar Anda tetap terinspirasi saat menjaga keselamatan`,
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
          header: {
            title: 'Welcome',
          },
          content: `Daily ideas to keep you inspired when given safety`,
        },
      ],
    }
  },
  mounted() {
    this.$tours.myTour.start()
  },
}
</script>
