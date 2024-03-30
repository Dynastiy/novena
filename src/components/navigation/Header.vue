<template>
  <div class="bg-gray-100 sticky top-0 shadow-sm">
    <div class="container">
      <div class="flex justify-between items-center py-6">
        <span role="button" @click="$router.push('/')">
          <img src="@/assets/img/brandLogo.svg" class="w-36" alt="" />
          <!-- <img src="@/assets/img/brandIcon.svg" class="w-8 lg:hidden md:hidden block" alt="" /> -->
        </span>

        <span class="lg:hidden md:hidden block" role="button" @click="visible = !visible">
          <Icon icon="material-symbols:menu" class="text-[40px]" />
        </span>

        <div class="hidden md:flex lg:flex gap-4 items-center">
          <ul class="flex gap-4 items-center">
            <li v-for="(item, idx) in menu" :key="idx">
              <router-link :to="item.url" class="block uppercase text-sm font-medium">
                <!-- <span class="md:hidden lg:hidden block text-[24px]">
                  <Icon :icon="item.icon" />
                </span> -->
                <span class="">{{ item.title }}</span>
              </router-link>
            </li>
          </ul>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link flex items-center gap-2 text-dark">
              <span class="flex items-center">
                <country-flag :country="selected_flag" size="medium" />
                <span class="hidden md:block lg:block">{{
                  $t('selected_language', { language: selected_language })
                }}</span>
              </span>
              <Icon icon="radix-icons:caret-down" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  class="capitalize text-[15px] flex items-center gap-2"
                  v-for="(lang, i) in languageArray"
                  :key="`lang${i}`"
                  :value="lang"
                >
                  <country-flag :country="getCode(lang)" size="small" />
                  <span
                    :role="lang === selected ? '' : 'button'"
                    :class="{ 'text-secondary': lang === selected }"
                    @click="changeLang(lang)"
                    >{{ $t(lang) }}</span
                  >
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <!-- <div>
            <button
            class="uppercase text-sm tracking-wide bg-primary text-gray-900 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            <router-link to="/request-a-quote" class="font-bold">
              {{ $t('nav.btn-text') }}
            </router-link>
          </button>
          </div> -->
        </div>
      </div>
    </div>

    <Sidebar v-model:visible="visible" header="" position="top" class="h-fit">
      <ul class="flex flex-col gap-4">
        <li v-for="(item, idx) in menu" :key="idx">
          <router-link :to="item.url" class="flex gap-3 uppercase text-sm font-medium">
            <span class="text-[24px]">
              <Icon :icon="item.icon" />
            </span>
            <span class="">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import { languages } from '@/plugin/i18n'
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      languageArray: languages,
      languagesMap: {
        english: 'english',
        french: 'french',
        spanish: 'spanish'
      },
      shortCodes: {
        english: 'US',
        french: 'FR',
        spanish: 'ES'
      },
      visible: false
    }
  },

  methods: {
    changeLang(value) {
      this.$store.dispatch('home/changeLocale', value)
      this.$i18n.locale = this.$store.state.home.locale
    },

    getCode(value) {
      if (value === 'english') {
        return 'US'
      }
      if (value === 'french') {
        return 'FR'
      }
      if (value === 'spanish') {
        return 'ES'
      }
    }
  },

  computed: {
    lang: {
      get: function () {
        return this.$store.state.home.locale
      },
      set: function (newLocale) {
        this.$store.dispatch('home/changeLocale', newLocale)
      }
    },
    selected_language() {
      return this.$t(this.languagesMap[this.lang])
    },
    selected() {
      return this.lang
    },
    selected_flag() {
      return this.shortCodes[this.lang]
    }
  },
  created() {
    this.$i18n.locale = this.$store.state.home.locale
  }
}
</script>

<style>
.router-link-exact-active span {
  color: var(---secondary);
  font-weight: 600 !important;
}

.normal-flag[data-v-60be6971] {
  margin: 0 !important;
}
</style>
