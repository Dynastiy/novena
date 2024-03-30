<template>
  <div class="container">
    <div class="flex flex-col">
      <div class="w-full flex lg:flex-row md:flex-row flex-col">
        <div class="bg-neutral-1100 p-8 min-h-[400px] lg:w-6/12 md:w-6/12 w-full flex justify-center gap-4 flex-col">
          <h1 class="text-4xl font-extrabold tracking-tight text-white">
            {{ $t('mission.main-header') }}
          </h1>
          <p class="text-[15px]  w-full font-medium text-gray-300">
            <!-- {{ $t('mission.body') }} -->
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laboriosam maxime, expedita officiis beatae in quidem illo doloremque, velit nesciunt ipsam. Ipsam, obcaecati necessitatibus praesentium in facilis doloremque error id.
          </p>
        </div>
        <div class="min-h-[400px] lg:w-6/12 md:w-6/12 w-full flex items-center justify-center">
          <img class="image" src="@/assets/img/mission.png" />
        </div>
      </div>
      <div class="w-full flex lg:flex-row md:flex-row flex-col-reverse">
        <div class="min-h-[400px] lg:w-6/12 md:w-6/12 w-full flex items-center justify-center">
          <img class="image" src="@/assets/img/vision.png" />
        </div>
        <div class="bg-amber-600 p-8 min-h-[400px] lg:w-6/12 md:w-6/12 w-full flex justify-center gap-4 flex-col">
          <h1 class="text-4xl font-extrabold tracking-tight text-white">
            {{ $t('vision.header') }}
          </h1>
          <p class="text-[15px]  w-full font-medium text-gray-300">
            <!-- {{ $t('vision.body') }} -->
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor totam excepturi recusandae dolores animi illum est perferendis! Aspernatur, accusantium odio dolorum esse nulla repellendus consectetur distinctio facere magni ex quasi!
          </p>
        </div>
      </div>
      <div class="w-full flex lg:flex-row md:flex-row flex-col ">
        <div class="bg-secondary p-8 min-h-[400px] lg:w-6/12 md:w-6/12 w-full flex justify-center gap-4 flex-col">
          <h1 class="text-4xl font-extrabold tracking-tight text-white">
            {{ $t('values.header') }}
          </h1>
          <p class="text-[15px]  w-full font-medium text-gray-300">
            <!-- {{ $t('values.body') }} -->
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos recusandae laboriosam rerum ratione, omnis doloremque, doloribus nemo quia eligendi quo impedit! Corrupti sed dicta omnis nobis culpa laboriosam ipsum incidunt?
          </p>
        </div>
        <div class="min-h-[400px] lg:w-6/12 md:w-6/12 w-full flex items-center justify-center">
          <img class="image" src="@/assets/img/values.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.image {
  object-position: center;
  object-fit: contain;
  height: 250px;
}
</style>
