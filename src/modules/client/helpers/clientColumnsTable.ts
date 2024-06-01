import { i18n } from 'src/boot/i18n';
import type { Client } from '../interfaces';
import { computed } from 'vue';

const clientColumnsTable = computed(() => [
  {
    name: 'id',
    label: i18n.global.t('Identifier'),
    align: 'left',
    field: (row: Client) => row.id,
  },
  {
    name: 'docType',
    label: i18n.global.t('Document type'),
    align: 'left',
    field: (row: Client) => row.docType,
  },
  {
    name: 'docNum',
    label: i18n.global.t('Document number'),
    align: 'left',
    field: (row: Client) => row.docNum,
  },
  {
    name: 'email',
    label: i18n.global.t('Email'),
    align: 'left',
    field: (row: Client) => row.email,
  },
  {
    name: 'customerId',
    label: i18n.global.t('Client ID'),
    align: 'left',
    field: (row: Client) => row.customerId,
  },
  {
    name: 'givenName',
    label: i18n.global.t('Name'),
    align: 'left',
    field: (row: Client) => row.givenName,
  },
  {
    name: 'familyName1',
    label: i18n.global.t('Family name 1'),
    align: 'left',
    field: (row: Client) => row.familyName1,
  },
  {
    name: 'phone',
    label: i18n.global.t('Phone'),
    align: 'left',
    field: (row: Client) => row.phone,
  },
  {
    name: 'seeClientDetail',
    label: i18n.global.t('See client detail'),
    align: 'center',
    field: (row: Client) => row.id,
  },
  {
    name: 'seeProducts',
    label: i18n.global.t('See products'),
    align: 'center',
    field: (row: Client) => row.customerId,
  },
]);

export { clientColumnsTable };
