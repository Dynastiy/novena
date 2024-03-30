<template>
  <div>
    <AppHeader :menu="menu" />
    <div class="pb-6">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/navigation/Footer.vue'
import AppHeader from '@/components/navigation/Header.vue'
export default {
  components: {
    AppFooter,
    AppHeader
  },
  data() {
    return {
      menu: [
        {
          title: 'home',
          icon: 'fluent:home-20-filled',
          url: '/home'
        },
        {
          title: 'about us',
          icon: 'mdi:about',
          url: '/about'
        },
        {
          title: 'our services',
          icon: 'mdi:about',
          url: '/our-services'
        },
        {
          title: 'contact us',
          icon: 'mdi:about',
          url: '/contact-us'
        }
      ]
    }
  }
}
</script>

<style></style>
