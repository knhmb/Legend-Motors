import { createI18n } from "vue-i18n";

import en from "@/locale/en.json";
import zh from "@/locale/zh.json";

const messages = {
  "en-US": en,
  "zh-Hant-HK": zh,
};

const i18n = createI18n({
  locale: "en-US",
  fallbackLocale: "zh-Hant-HK",
  messages,
});

export default i18n;
