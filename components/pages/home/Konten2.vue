<template>
  <div>
    <!-- Konten 2 -->
    <section>
      <div
        class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 200 }"
            class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight"
          >
            Control your business on the go and give yourself the
            <br class="hidden lg:inline-block" />holiday you deserve
          </h1>
          <p v-scroll-reveal="{ delay: 250 }" class="mb-8 leading-relaxed">
            Time to plan that holiday!
            <br />
            We got the royalty no.xxxxx for this feature .
          </p>
          <div v-scroll-reveal="{ delay: 300 }" class="flex justify-center">
            <button
              class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Try Free
            </button>
            <button
              class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Show me how
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            v-scroll-reveal="{ delay: 300 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="~/assets/images/report_analysis__two_color.svg"
          />
        </div>
      </div>
    </section>

    <!-- Konten 3 -->
    <section>
      <div
        class="container mx-auto flex px-5 py-10 mb-16 md:flex-row flex-col items-center"
      >
        <div class="lg:w-full max-w-xl md:w-1/2 w-1/2 pr-16">
          <img
            v-scroll-reveal="{ delay: 250 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="~/assets/images/artificial_intelligence_two_color.svg"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-15"
        >
          <h1
            v-scroll-reveal="{ delay: 200 }"
            class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight"
          >
            Time to put your <br class="hidden lg:inline-block" />business out
            there
          </h1>
          <p
            v-scroll-reveal="{ delay: 250 }"
            class="mb-8 text-xl leading-relaxed"
          >
            Instantly market yourself with our peer to peer marketplace hub.
          </p>
          <div v-scroll-reveal="{ delay: 300 }" class="flex justify-center">
            <button
              class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Try Free
            </button>
            <button
              class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Show me how
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Konten 4 dan 5 -->
    <section class="bg-light">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 px-4">
            <div
              v-scroll-reveal="{ delay: 200 }"
              class="rounded-lg shadow-2xl overflow-hidden"
            >
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="~/assets/images/hero-image-2.png"
              />
            </div>
            <h2
              v-scroll-reveal="{ delay: 250 }"
              class="title-font text-3xl font-bold text-gray-900 mt-6 mb-3"
            >
              Want your own personal assistant?
            </h2>
            <p
              v-scroll-reveal="{ delay: 300 }"
              class="leading-relaxed text-base"
            >
              VESA have you covered. <br />
              We got the royalty no. xxxxx for this feature
            </p>
            <button
              v-scroll-reveal="{ delay: 350 }"
              class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded"
            >
              Try Free
            </button>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div
              v-scroll-reveal="{ delay: 200 }"
              class="rounded-lg shadow-2xl overflow-hidden"
            >
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="~/assets/images/hero-image-1.png"
              />
            </div>
            <h2
              v-scroll-reveal="{ delay: 250 }"
              class="title-font text-3xl font-bold text-gray-900 mt-6 mb-3"
            >
              The fuel to keep your
            </h2>
            <p
              v-scroll-reveal="{ delay: 300 }"
              class="leading-relaxed text-base"
            >
              passion and your business works well is to be aware of your
              financial position EASILY And..... we go it covered.
            </p>
            <button
              v-scroll-reveal="{ delay: 350 }"
              class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Konten 6 -->
    <section>
      <div
        class="container mx-auto flex px-5 mt-24 mb-10 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 200 }"
            class="title-font sm:text-4xl text-3xl mb-4 font-bold leading-tight text-gray-900"
          >
            Have existing software and don't
            <br class="hidden lg:inline-block" />want the hassle of moving ?
          </h1>
          <p
            v-scroll-reveal="{ delay: 250 }"
            class="mb-8 text-xl leading-relaxed"
          >
            Worry not, our software are 100% connectable with any other
            software.
          </p>
          <div class="flex justify-center">
            <button
              v-scroll-reveal="{ delay: 300 }"
              class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              I want to know more
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            v-scroll-reveal="{ delay: 250 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="~/assets/images/web_development__two_color.svg"
          />
        </div>
      </div>
    </section>

    <!-- Konten 7 -->
    <section>
      <div
        class="container mx-auto flex px-5 mb-24 items-center justify-center flex-col"
      >
        <div
          v-scroll-reveal="{ delay: 200 }"
          class="lg:w-6/6 md:w-6/6 w-6/6 object-cover object-center rounded"
        >
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_zETGpb.json"
            background="transparent"
            speed="1"
            style="width: 450px; height: 450px;"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="text-center lg:w-2/3 -mt-4 w-full">
          <h1
            v-scroll-reveal="{ delay: 250 }"
            class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900"
          >
            Easy switch between web and phone
          </h1>
          <h1 v-scroll-reveal="{ delay: 300 }">No more confusion!</h1>
          <p class="mb-8 leading-relaxed">
            You can access exactly the same features on your PC / Laptop and
            your Phone.
          </p>
          <div v-scroll-reveal="{ delay: 350 }" class="flex justify-center">
            <button
              class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Try Free
            </button>
            <button
              class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Show me how
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
