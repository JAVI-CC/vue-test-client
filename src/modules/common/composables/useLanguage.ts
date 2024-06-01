import { LocalStorage, useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import type { Languages } from '../interfaces/language';

export const useLanguage = () => {
  const $q = useQuasar();
  const { locale } = useI18n({ useScope: 'global' });
  const langList = import.meta.glob('/node_modules/quasar/lang/*.js');

  const onUpdateLanguage = (setLang: Languages): void => {
    LocalStorage.set('language', setLang);

    // dynamic import, so loading on demand only
    langList[`/node_modules/quasar/lang/${setLang}.js`]().then((lang) => {
      $q.lang.set(lang.default);
      locale.value = setLang;
    });
  };

  return {
    // Properties

    // Methods
    onUpdateLanguage,
  };
};
