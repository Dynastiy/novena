<template>
  <div class="flex flex-col gap-8">
    <Hero />
    <MainContent />
  </div>
</template>

<script>
import MainContent from '@/components/services/Main.vue'
import Hero from '@/components/services/Hero.vue'
// import Location from '@/components/home/Location.vue'

export default {
  components: { MainContent,  Hero }
}
</script>

<style>

</style>