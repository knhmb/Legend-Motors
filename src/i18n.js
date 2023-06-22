import { createI18n } from "vue-i18n";

import en from "@/locale/en.json";

const messages = {
  "en-US": en,
};

const i18n = createI18n({
  locale: "en-US",
  fallbackLocale: "zh",
  messages,
});

export default i18n;
