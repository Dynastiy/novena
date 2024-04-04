<template>
  <div class="">
    <div class="bg-gray-100 text-gray-100 py-12">
      <div class="container">
        <div
          class="px-8 grid gap-4 grid-cols-1 md:px-12 lg:px-16 xl:px-32 py-8 mx-auto bg-white text-gray-900 rounded-lg shadow-sm"
        >
          <h2 class="text-2xl lg:text-4xl font-bold leading-tight">
            <!-- {{ $t('contact.header') }} -->
            Please leave a review
          </h2>
          <div class="">
            <span class="uppercase text-sm block text-gray-600 font-bold">RAting</span>
            <div>
                <Rating v-model="value" :cancel="false" />
            </div>
          </div>
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Title of your review</span>
            <input
              class="w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          
          <div class="">
            <span class="uppercase text-sm text-gray-600 font-bold">Your review</span>
            <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="">
            <span class="uppercase text-sm block text-gray-600 font-bold">Name</span>
            <input
              class="w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="">
            <span class="uppercase text-sm block text-gray-600 font-bold">Email</span>
            <input
              class="w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              <!-- {{ $t('contact.send') }} -->
              Submit your review
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value: 0
        }
    }
}
</script>

<style></style>
