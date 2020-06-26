/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
        serif: ['Source Serif Pro'],
        mono: ['Source Code Pro'],
        display: ['Signifika', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        header: ['Signifika', 'sans-serif'],
      },
      colors: {
        dark: '#172b4d',
        primary: '#0052CC',
        secondary: '#253858',
        light: '#f4f5f7',
        light2: '#F4F5F9',
        blues: '#006ee5',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
