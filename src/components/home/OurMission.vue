<template>
  <div class="our-mission">
    <div class="container py-12">
      <h1 class="text-4xl font-extrabold tracking-tight text-center">
        <!-- {{ $t('commitment.main-header') }} -->
        What we do
      </h1>
      <hr class="my-[50px] w-2/12 mx-auto border-gray-700 border-[1px]" />
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grdi-cols-1 gap-4">
        <div class="w-full p-6 bg-gray-100 shadow-sm" v-for="i in 7" :key="i">
          <span class="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center">
            <Icon class="text-[30px] text-neutral-100" icon="ic:baseline-health-and-safety" />
          </span>
          <h5 class="mb-2 text-[20px] mt-2 font-semibold tracking-tight text-gray-900">
            <!-- {{ $t('commitment.header1') }} -->
            Header
          </h5>
          <p class="mb-3 font-normal text-gray-600 text-sm font-regular">
            <!-- {{ $t('commitment.body1') }} -->
            content
          </p>
        </div>

        <!-- <div class="w-full p-6 bg-gray-100 shadow-sm">
          <span
            class="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center"
          >
            <Icon class="text-[30px] text-neutral-1100" icon="streamline:gender-equality-solid" />
          </span>
          <h5 class="mb-2 text-[20px] mt-2 font-semibold tracking-tight text-gray-900">
            {{ $t('commitment.header2') }}
          </h5>
          <p class="mb-3 font-normal text-gray-600  text-sm font-regular">
            {{ $t('commitment.body2') }}
          </p>
        </div>

        <div class="w-full p-6 bg-gray-100 shadow-sm">
          <span
            class="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center"
          >
            <Icon class="text-[30px] text-neutral-1100" icon="game-icons:achievement" />
          </span>
          <h5 class="mb-2 text-[20px] mt-2 font-semibold tracking-tight text-gray-900">
            {{ $t('commitment.header3') }}
          </h5>
          <p class="mb-3 font-normal text-gray-600  text-sm font-regular">
            {{ $t('commitment.body3') }}
          </p>
        </div>

        <div class="w-full p-6 bg-gray-100 shadow-sm">
          <span
            class="w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center"
          >
            <Icon class="text-[30px] text-neutral-1100" icon="streamline:collaborations-idea-solid" />
          </span>
          <h5 class="mb-2 text-[20px] mt-2 font-semibold tracking-tight text-gray-900">
            {{ $t('commitment.header4') }}
          </h5>
          <p class="mb-3 font-normal text-gray-600  text-sm font-regular">
            {{ $t('commitment.body4') }}
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.our-mission {
  /* linear-gradient(90deg,#800020 8%,rgba(0,0,0,0) 94%),url(https://novenaconsult.ca/wp-content/uploads/2023/08/Students-scaled.jpg)!important */
  background-image:linear-gradient(90deg, #000 20%,rgba(0,0,0,0) 80%), url('@/assets/img/novena_what_we_do.jpg');
  /* line */
  background-size: cover;
  background-position: center;
}

@media (max-width: 990px) {
  .our-mission {
    background-position: left;
  }
}
</style>
