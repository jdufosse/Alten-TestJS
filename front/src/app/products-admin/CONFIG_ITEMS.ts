import { ColumnOptions } from "app/shared/utils/crud-item-options/column-options.model";
import { ControlType } from "app/shared/utils/crud-item-options/control-type.model";
import { CrudItemOptions } from "app/shared/utils/crud-item-options/crud-item-options.model";
import { ProductInformation } from "./PRODUCT_ITEMS";
import { SelectItem } from "primeng/api";

const controlType = ControlType.INPUT
const type = 'text'

const columnOptions: ColumnOptions = {
  default: true,
  sortable: true,
  filterable: true,
}

const categories: SelectItem[] = ProductInformation.categories.map(category => ({ value: category, label: category }))
const stockStatus: SelectItem[] = ProductInformation.inventoryStatus.map(status => ({ value: status, label: status }))


export const CONFIG_ITEMS: CrudItemOptions[] = [
  {
    key: 'id',
    label: 'Id',
    controlType,
    type,
    columnOptions: { ...columnOptions, hidden: true },
    controlOptions: {
      hideOnCreate: true,
      hideOnUpdate: true
    }
  }, {
    key: 'code',
    label: 'Code',
    controlType,
    type,
    columnOptions,
  }, {
    key: 'name',
    label: 'Name',
    controlType,
    type,
    columnOptions
  }, {
    key: 'description',
    label: 'Description',
    controlType,
    type,
    columnOptions
  }, {
    key: 'image',
    label: 'Image',
    controlType,
    type,
    columnOptions
  }, {
    key: 'price',
    label: 'Price',
    controlType,
    type,
    columnOptions
  }, {
    key: 'category',
    label: 'Category',
    controlType: ControlType.SELECT,
    type,
    columnOptions,
    options: categories
  }, {
    key: 'quantity',
    label: 'Quantity',
    controlType,
    type,
    columnOptions
  }, {
    key: 'inventoryStatus',
    label: 'Inventory status',
    controlType: ControlType.SELECT,
    type,
    columnOptions,
    options: stockStatus,
  }, {
    key: 'rating',
    label: 'Rating',
    controlType,
    type,
    columnOptions
  }
];