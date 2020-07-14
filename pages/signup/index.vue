<template>
  <section>
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-3/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="font-heading font-bold text-4xl text-dark">
          Beta Registration
        </h1>
        <img
          class="mt-6"
          src="~/assets/illustration/authentication.svg"
          width="450"
          alt
        />
      </div>
      <div
        class="lg:w-3/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Form Registration
        </h2>

        <div class="flex flex-wrap -mx-2">
          <div class="w-1/2 px-2">
            <p class="text-gray-600">First name</p>
            <input
              v-model="form.firstname"
              class="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div class="w-1/2 px-2">
            <p class="text-gray-600">Last Name</p>
            <input
              v-model="form.lastname"
              class="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
              placeholder="Last Name"
              type="text"
            />
          </div>
        </div>

        <div class="flex flex-wrap">
          <p class="text-gray-600">Username</p>
          <input
            v-model="form.username"
            class="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
            placeholder="Username"
            type="text"
          />
        </div>

        <div class="flex flex-wrap mt-4">
          <p class="text-gray-600">Email</p>
          <input
            v-mode="form.email"
            class="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
            placeholder="Email"
            type="email"
          />
        </div>

        <div class="flex flex-wrap -mx-2">
          <div class="w-1/2 px-2">
            <p class="text-gray-600">Password</p>
            <input
              v-model="form.password"
              class="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
              placeholder="Password"
              type="password"
            />
          </div>
          <div class="w-1/2 px-2">
            <p class="text-gray-600">Password Confirmation</p>
            <input
              v-model="form.password_confirmation"
              class="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
              placeholder="Password Confirmation"
              type="password"
            />
            <p
              v-if="form.password != form.password_confirmation"
              class="text-red-600 font-semibold text-sm leading-none"
            >
              ** Pastikan ponfirmasi password sama
            </p>
          </div>
        </div>

        <label class="flex justify-start items-start py-2 mb-2">
          <div
            class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
          >
            <input v-model="agree" type="checkbox" class="opacity-0 absolute" />
            <svg
              class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </div>
          <div class="select-none">I agree to Terms of Service</div>
        </label>

        <style>
          input:checked + svg {
            display: block;
          }
        </style>

        <button
          v-if="agree"
          class="text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
          @click="show()"
        >
          Sign Up
        </button>

        <button
          v-if="!agree"
          class="text-dark bg-gray-400 border-0 py-2 px-8 rounded text-lg"
          disabled
        >
          Sign Up
        </button>

        <p class="text-xs text-gray-500 mt-3">
          This site is protected by reCAPTCHA and the Google
          <a
            class="text-primary font-semibold"
            href="https://policies.google.com/privacy"
            >Privacy Policy</a
          >
          and
          <a
            class="text-primary font-semibold"
            href="https://policies.google.com/terms"
            >Terms of Service</a
          >
          apply.
        </p>
      </div>
    </div>

    <modal
      name="registration-modal"
      shift-x="0.5"
      shift-y="0.5"
      height="80%"
      :adaptive="true"
    >
      <div class="flex flex-col justify-center items-center h-full">
        <img
          src="~/assets/illustration/email.svg"
          width="400"
          height="400"
          alt=""
        />
        <h1 class="text-dark">Registration Success</h1>
        <p class="text-dark">
          Please check your email to verify your email address
        </p>

        <button
          class="bg-green-500 hover:bg-green-600 py-2 px-8 font-semibold text-xl rounded-lg text-white my-5"
          @click="actionLogin()"
        >
          Sign In
        </button>
      </div>
    </modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        email: '',
      },
      agree: false,
    }
  },

  methods: {
    actionLogin() {
      window.location = 'https://cloud.point.red/auth/'
    },
    show() {
      this.$modal.show('registration-modal')
      this.form = ''
    },
    hide() {
      this.$modal.hide('registration-modal')
    },
    async storeRegister() {
      try {
        const response = await this.$axios.post(
          'end point pendaftaran ? ' + this.form
        )

        if (response.status === 200) {
          this.form = ''
        }
      } catch (e) {
        console.log(e.response.error)
      }
    },
  },
}
</script>

<style></style>
