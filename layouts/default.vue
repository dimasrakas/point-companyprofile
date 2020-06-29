<template>
  <div class="antialiased">
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/pages/Navigation'
import Footer from '~/components/pages/Footer'

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>
