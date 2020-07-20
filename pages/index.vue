<template>
  <div class="font-sans bg-white flex flex-col min-h-screen w-full">
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section5 />
    <Section6 />
    <Section7 />
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
  components: {
    Hero,
    Section1,
    Section2,
    Section3,
    Section5,
    Section6,
    Section7,
  },
}
</script>
