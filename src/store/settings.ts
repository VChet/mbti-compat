import { createGlobalState, useLocalStorage } from "@vueuse/core";
import { useRegisterSW } from "virtual:pwa-register/vue";
import { i18n } from "@/plugins/i18n";

type LocaleCode = "en" | "ru";
interface SettingsStore {
  locale: LocaleCode
}

const LOCALES: Record<LocaleCode, { locale: string, label: string }> = {
  en: { locale: "en_US", label: "English" },
  ru: { locale: "ru_RU", label: "Русский" }
};

export const useSettingsStore = createGlobalState(() => {
  const settings = useLocalStorage<SettingsStore>("settings", {
    locale: "en"
  }, { mergeDefaults: true });

  const { needRefresh, updateServiceWorker } = useRegisterSW({ immediate: true });

  function initLocale(): void {
    i18n.global.locale.value = settings.value.locale;
  }

  function changeLocale(): void {
    const locales: readonly LocaleCode[] = ["en", "ru"];
    const index = locales.indexOf(settings.value.locale);
    const nextIndex = (index + 1) % locales.length;

    const localeCode = locales[nextIndex];
    settings.value.locale = localeCode;
    i18n.global.locale.value = localeCode;
  }

  return {
    LOCALES,
    settings,
    initLocale,
    changeLocale,
    needRefresh,
    updateServiceWorker
  };
});
