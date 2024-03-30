<template>
  <div class="flex flex-col gap-8">
    <Hero />
    
    <Commitment />
    <OurMission />
    <!-- <Location /> -->
    <ContactUs />
  </div>
</template>

<script>
import Commitment from "@/components/home/Commitment.vue"
import OurMission from '@/components/home/OurMission.vue'
import ContactUs from '@/components/home/ContactUs.vue'
import Hero from '@/components/home/Hero.vue'
// import Location from '@/components/home/Location.vue'

export default {
  components: { Commitment, 
    OurMission, 
    ContactUs, 
    Hero }
}
</script>

<style>

</style>