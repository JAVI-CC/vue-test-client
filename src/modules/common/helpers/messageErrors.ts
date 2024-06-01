import { i18n } from "src/boot/i18n";
import { computed } from "vue";

const messageErrorServer = computed<string>(() => i18n.global.t('Internal Server Error'));

export { messageErrorServer };
