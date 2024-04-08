<template>
    <div class="choose-us">
      <div class="container py-12">
        <h1 class="text-4xl font-extrabold tracking-tight text-white text-center">
          <!-- {{ $t('commitment.main-header') }} -->
          Why choose Us?
        </h1>
        <p class="text-gray-100 text-center text-sm mt-3">Some reasons why you should choose NEC as your trusted Educational Consultants!!!!</p>
        <hr class="my-[50px] w-2/12 mx-auto border-gray-300 border-[1px]" />
        <div class="grid lg:grid-cols-3 justify-center md:grid-cols-3 grdi-cols-1 gap-4">
          <div class="w-full p-6 bg-gray-100 shadow-sm" v-for="(item, i) in services" :key="i">
            <h6>
                {{ item }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import services from '@/api/choose_us'
  export default {
    data() {
      return {
        services
      }
    }
  }
  </script>
  
  <style>
  .choose-us {
    /* linear-gradient(90deg,#800020 8%,rgba(0,0,0,0) 94%),url(https://novenaconsult.ca/wp-content/uploads/2023/08/Students-scaled.jpg)!important */
    background-image: linear-gradient(-90deg, #000 50%, rgba(0, 0, 0, 0) 80%),
      url('@/assets/img/novena_what_we_do.jpg');
    /* line */
    background-size: cover;
    background-position: center;
  }
  
  @media (max-width: 990px) {
    .choose-us {
      background-position: left;
    }
  }
  </style>
  