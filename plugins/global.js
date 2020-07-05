import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  mobile: false,
  delay: 200,
  duration: 300,
  distance: '20px',
  easing: 'ease-in-out',
  origin: 'bottom',
  scale: 1,
})

Vue.component('v-select', vSelect)
