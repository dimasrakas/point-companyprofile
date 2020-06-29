<template>
  <div
    v-scroll-reveal="{ delay: 350 }"
    class="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block"
    style="margin-top: -320px; border-radius: 20px;"
  >
    <div
      class="h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10"
      style="z-index: -1;"
    ></div>

    <div
      class="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12"
      style="z-index: -1;"
    ></div>

    <div class="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
    <div class="flex" style="height: 550px;">
      <div class="w-32 bg-gray-200 p-6 overflow-hidden rounded-bl-lg">
        <div class="text-center mb-10">
          <div class="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"></div>
          <div class="h-2 rounded-full bg-blue-800"></div>
        </div>

        <div class="text-center mb-10">
          <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
          <div class="h-2 rounded-full bg-gray-300"></div>
        </div>

        <div class="text-center mb-10">
          <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
          <div class="h-2 rounded-full bg-gray-300"></div>
        </div>

        <div class="text-center">
          <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
          <div class="h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div class="flex-1 py-6 px-8">
        <div class="flex flex-wrap -mx-4">
          <div class="w-2/3 px-4">
            <div class="flex flex-wrap -mx-4 mb-10">
              <div class="w-1/4 px-4">
                <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                  <div
                    class="w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto"
                  ></div>
                  <div class="h-2 rounded-full bg-gray-200"></div>
                </div>
              </div>
              <div class="w-1/4 px-4">
                <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                  <div
                    class="w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto"
                  ></div>
                  <div class="h-2 rounded-full bg-gray-200"></div>
                </div>
              </div>
              <div class="w-1/4 px-4">
                <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                  <div
                    class="w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto"
                  ></div>
                  <div class="h-2 rounded-full bg-gray-200"></div>
                </div>
              </div>
              <div class="w-1/4 px-4">
                <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                  <div
                    class="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"
                  ></div>
                  <div class="h-2 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div class="h-32 percentage mb-10 pt-2">
              <div class="h-4 bg-gray-200 w-64 mb-4 block"></div>
              <div class="h-4 bg-gray-200 w-32 mb-4 block"></div>
              <div class="h-4 bg-gray-200 w-40 mb-4 block"></div>
              <div class="h-4 bg-gray-200 w-20 mb-4 block"></div>
            </div>

            <div class="w-full flex flex-wrap mb-6">
              <div class="w-1/2">
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                    <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="w-1/2">
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                    <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full flex flex-wrap">
              <div class="w-1/2">
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                    <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="w-1/2">
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                    <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 px-4">
            <div class="rounded-lg shadow-lg p-6">
              <div class="block w-12 h-2 rounded-full bg-gray-200 mb-6"></div>

              <svg
                height="150"
                width="150"
                viewBox="0 0 20 20"
                class="mx-auto mb-12"
              >
                <circle r="10" cx="10" cy="10" fill="#4299e1" />
                <circle
                  r="5"
                  cx="10"
                  cy="10"
                  fill="transparent"
                  stroke="#2b6cb0"
                  stroke-width="10"
                  stroke-dasharray="11 31.4"
                  transform="rotate(-90) translate(-20)"
                />
              </svg>

              <div class="flex flex-wrap -mx-2 mb-10">
                <div class="w-1/3 px-2">
                  <div class="block h-2 rounded-full bg-gray-200"></div>
                </div>
                <div class="w-1/3 px-2">
                  <div class="block h-2 rounded-full bg-gray-200"></div>
                </div>
                <div class="w-1/3 px-2">
                  <div class="block h-2 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div class="flex justify-between my-10">
              <div>
                <div class="h-2 w-10 bg-gray-300 rounded-full mb-2"></div>
                <div class="h-2 w-16 bg-gray-300 rounded-full mb-2"></div>
                <div class="h-2 w-8 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <div
                  class="ml-auto h-2 w-5 bg-gray-300 rounded-full mb-2"
                ></div>
                <div
                  class="ml-auto h-2 w-6 bg-gray-300 rounded-full mb-2"
                ></div>
                <div class="ml-auto h-2 w-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            <div class="text-right flex justify-end">
              <div class="rounded-lg h-8 w-20 px-4 bg-gray-200 mr-2"></div>
              <div class="rounded-lg h-8 w-20 px-4 bg-green-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
