<template>
  <section class="text-gray-700 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-bold text-dark leading-none"
        >
          {{ articleDetail.title }}
        </h1>
        <p v-html="articleDetail.html_content"></p>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <div
          class="flex items-center justify-center mx-auto h-48 bg-green-400 rounded-md"
        >
          <h1 class="uppercase font-bold text-white text-4xl">
            #{{ (articleDetail.category) }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articleDetail: '',
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      try {
        const response = await this.$axios.get(
          'https://admin.point.dimasrakas.com/api/v1/article/' +
            this.$route.params.id
        )

        if (response.status === 200) {
          this.articleDetail = response.data
          console.log(this.articleDetail)
        }
      } catch (e) {
        console.log(this.response.error)
      }
    },
  },
}
</script>

<style></style>
