import Home from '@/pages/index.vue'
import About from '@/pages/about.vue'
import Contact from '@/pages/contact.vue'
import Services from '@/pages/services.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      layout: 'Default'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      layout: 'Default'
    }
  },
  {
    path: '/our-services',
    name: 'services',
    component: Services,
    meta: {
      layout: 'Default'
    } 
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: Contact,
    meta: {
      layout: 'Default'
    }
  }
]

export default routes
