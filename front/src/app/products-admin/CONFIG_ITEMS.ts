import { ControlType } from "app/shared/utils/crud-item-options/control-type.model";
import { CrudItemOptions } from "app/shared/utils/crud-item-options/crud-item-options.model";

const controlType = ControlType.AUTOCOMPLETE

const columnOptions ={
  default: true,
  sortable: true,
  filterable: true
}

export const CONFIG_ITEMS: CrudItemOptions[] = [
  {
    key:'code',
    label: 'Code',
    controlType,
    columnOptions
  },{
    key:'name',
    label: 'Name',
    controlType,
    columnOptions
  },{
    key:'description',
    label: 'Description',
    controlType,
    columnOptions
  },{
    key:'image',
    label: 'Image',
    controlType,
    columnOptions
  },{
    key:'price',
    label: 'Price',
    controlType,
    columnOptions
  },{
    key:'category',
    label: 'Category',
    controlType,
    columnOptions
  },{
    key:'quantity',
    label: 'Quantity',
    controlType,
    columnOptions
  },{
    key:'inventoryStatus',
    label: 'Inventory status',
    controlType,
    columnOptions
  },{
    key:'rating',
    label: 'Rating',
    controlType,
    columnOptions
  }
];