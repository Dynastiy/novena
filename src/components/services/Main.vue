<template>
  <div class="container">
    <div class="flex flex-col gap-3">
      <!-- {{services}} -->
      <div
        class="w-full flex lg:flex-row md:flex-row flex-col"
        v-for="(item, idx) in services"
        :key="idx"
      >
        <!-- <div class="min-h-[400px] lg:w-6/12 md:w-6/12 w-full flex items-center justify-center">
          <img class="image" src="@/assets/img/mission.png" />
        </div> -->
        <div
          :class="`p-8 min-h-[100px] lg:w-8/12 mx-auto md:w-8/12 w-full flex justify-center gap-4 flex-col even:flex-row-reverse`"
          :style="{ 'background-color': item.bg_color }"
        >
          <h1 class="text-3xl font-extrabold tracking-tight text-white">
            {{ item.title }}
          </h1>
          <p class="text-[14px] w-full font-medium text-gray-100" v-html="item.desc"></p>
          <!-- <router-link :to="'/our-sevices?info='+(item.title).toLocaleLowerCase()"  class="text-gray-100 text-[12px] underline"
            >Read More &raquo;</router-link
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from '@/api/services'
export default {
  data() {
    return {
      services
    }
  }
}
</script>

<style>
.image {
  object-position: center;
  object-fit: contain;
  height: 250px;
}
</style>
