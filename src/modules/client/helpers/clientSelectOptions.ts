import { i18n } from "src/boot/i18n";
import { ClientSelectOption } from "../interfaces";
import { computed } from "vue";

const clientSelectOptions = computed<ClientSelectOption[]>(() => [
  {
    label: i18n.global.t('Identifier'),
    value: 'id',
  },
  {
    label: i18n.global.t('Document type'),
    value: 'docType',
  },
  {
    label: i18n.global.t('Document number'),
    value: 'docNum',
  },
  {
    label: i18n.global.t('Email'),
    value: 'email',
  },
  {
    label: i18n.global.t('Client ID'),
    value: 'customerId',
  },
  {
    label: i18n.global.t('Name'),
    value: 'givenName',
  },
  {
    label: i18n.global.t('Family name 1'),
    value: 'familyName1',
  },
  {
    label: i18n.global.t('Phone'),
    value: 'phone',
  },
]);

export { clientSelectOptions };
