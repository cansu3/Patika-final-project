import { createI18n } from 'vue-i18n';

import * as en_messages from './locales/en/messages.json';
import * as tr_messages from './locales/tr/messages.json';

const locales = {
  en: {
    message: en_messages.default,
  },
 
  tr: {
    message: tr_messages.default,
  },
};

const language = (window.navigator.userLanguage || window.navigator.language).substring(0, 2);

console.log(language);

/* eslint-disable new-cap */
export default new createI18n({
  locale: language,
  messages: locales,
  fallbackLocale: 'en',
  globalInjection: true
});