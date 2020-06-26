<template>
  <div class="font-sans bg-white flex flex-col min-h-screen w-full">
    <Hero />
    <Hero2 />
    <Hero3 />
    <Konten1 />
    <Konten2 />
  </div>
</template>

<script>
import Hero from '~/components/pages/home/Hero'
import Hero2 from '~/components/pages/home/Hero2'
import Hero3 from '~/components/pages/home/Hero3'
import Konten1 from '~/components/pages/home/Konten1'
import Konten2 from '~/components/pages/home/Konten2'

export default {
  components: {
    Hero,
    Hero2,
    Hero3,
    Konten1,
    Konten2,
  },
}
</script>
