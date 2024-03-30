<template>
  <div>
    <section class="container">
      
      <div
        class="flex flex-col gap-4"
      >
        <h1 class="text-4xl font-extrabold tracking-tight text-primary">
          <!-- {{ $t('mission.main-header') }} -->
          About Us
        </h1>
        <p class="text-[15px]  font-medium text-gray-500">
          <!-- {{ $t('mission.body') }} -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique dolores molestias. Tempore, est eum. Maiores accusamus dolores, deserunt magni, est accusantium laboriosam delectus sapiente dolor, repellat nemo. Voluptatum, accusamus!
        </p>
         <div class="flex flex-col gap-4 sm:flex-row  sm:gap-0">
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 w-fit text-base font-medium text-center text-white rounded-lg bg-secondary hover:bg-primary focus:ring-4 focus:ring-secondary dark:focus:ring-secondary"
        >
          Learn More
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
