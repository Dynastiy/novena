<template>
  <div class="flex flex-col">
    <Hero />
    
    <Commitment />
    <OurMission />
    <!-- <Location /> -->
    <why-us />
    <Review />
  </div>
</template>

<script>
import Commitment from "@/components/home/Commitment.vue"
import OurMission from '@/components/home/OurMission.vue'
import Review from '@/components/home/Review.vue'
import Hero from '@/components/home/Hero.vue'
import WhyUs from '@/components/home/WhyUs.vue'
// import Location from '@/components/home/Location.vue'

export default {
  components: { Commitment, 
    OurMission, 
    Review, 
    Hero,
    WhyUs }
}
</script>

<style>

</style>