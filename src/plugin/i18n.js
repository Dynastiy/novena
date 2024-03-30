// import Vue from "vue";
// import VueI18n from "vue-i18n";

import { createI18n } from 'vue-i18n'

// import translations
import french from '@/locales/french.json'
import english from '@/locales/english.json'
import spanish from '@/locales/spanish.json'
// import latin from "@/locales/latin.json";

// Vue.use(cr);

function loadLocaleMessages() {
  const messages = {
    french,
    english,
    spanish
  }
  return messages
}

function checkDefaultLanguage() {
  let matched = null
  let languages = Object.getOwnPropertyNames(loadLocaleMessages())
  languages.forEach((lang) => {
    if (lang === navigator.language) {
      matched = lang
    }
  })
  if (!matched) {
    languages.forEach((lang) => {
      let languagePartials = navigator.language.split('-')[0]
      if (lang === languagePartials) {
        matched = lang
      }
    })
  }
  if (!matched) {
    languages.forEach((lang) => {
      let languagePartials = navigator.language.split('-')[0]
      if (lang.split('-')[0] === languagePartials) {
        matched = lang
      }
    })
  }
  return matched
}

export const selectedLocale = checkDefaultLanguage() || import.meta.env.VUE_APP_I18N_LOCALE || 'english'

export const languages = Object.getOwnPropertyNames(loadLocaleMessages())

const i18n = createI18n({
  // export default new VueI18n({
  locale: selectedLocale,
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'english',
  messages: loadLocaleMessages()
})

export default i18n

// { french, english, spanish, latin }
