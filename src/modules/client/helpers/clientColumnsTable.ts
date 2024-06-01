import type { Client } from '../interfaces';

const clientColumnsTable = [
  {
    name: 'id',
    label: 'Identifier',
    align: 'left',
    field: (row: Client) => row.id,
  },
  {
    name: 'docType',
    label: 'Document type',
    align: 'left',
    field: (row: Client) => row.docType,
  },
  {
    name: 'docNum',
    label: 'Document number',
    align: 'left',
    field: (row: Client) => row.docNum,
  },
  {
    name: 'email',
    label: 'Email',
    align: 'left',
    field: (row: Client) => row.email,
  },
  {
    name: 'customerId',
    label: 'Client ID',
    align: 'left',
    field: (row: Client) => row.customerId,
  },
  {
    name: 'givenName',
    label: 'Name',
    align: 'left',
    field: (row: Client) => row.givenName,
  },
  {
    name: 'familyName1',
    label: 'Family name 1',
    align: 'left',
    field: (row: Client) => row.familyName1,
  },
  {
    name: 'phone',
    label: 'Phone',
    align: 'left',
    field: (row: Client) => row.phone,
  },
  {
    name: 'seeClientDetail',
    label: 'See client detail',
    align: 'center',
    field: (row: Client) => row.id,
  },
  {
    name: 'seeProducts',
    label: 'See products',
    align: 'center',
    field: (row: Client) => row.customerId,
  },
];

export  {clientColumnsTable}