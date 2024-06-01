import type { ProductTableColumns } from '../interfaces';

interface ProductColumns {
  key: ProductTableColumns
  label: string;
}

const productColumnsTable: ProductColumns[] = [
  {
    key: 'id',
    label: 'Identifier',
  },
  {
    key: 'productName',
    label: 'Product name',
  },
  {
    key: 'mbSpeed',
    label: 'MB Speed',
  },
  {
    key: 'gbData',
    label: 'GB Data',
  },
  {
    key: 'productTypeName',
    label: 'Product type name',
  },
  {
    key: 'terminalNumbering',
    label: 'Terminal numbering',
  },
  {
    key: 'soldAt',
    label: 'Sold At',
  },
  {
    key: 'customerId',
    label: 'Customer ID',
  },
];

export { productColumnsTable };
