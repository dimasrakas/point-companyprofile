<template>
  <div class="font-sans bg-white flex flex-col min-h-screen w-full">
    <Heros />
    <Contents />
  </div>
</template>

<script>
import Heros from '~/components/heros'
import Contents from '~/components/contents'

export default {
  components: {
    Heros,
    Contents,
  },
}
</script>
