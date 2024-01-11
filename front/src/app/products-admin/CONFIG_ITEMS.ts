import { ControlType } from "app/shared/utils/crud-item-options/control-type.model";
import { CrudItemOptions } from "app/shared/utils/crud-item-options/crud-item-options.model";

const controlType = ControlType.INPUT
const type = 'text'

const columnOptions ={
  default: true,
  sortable: true,
  filterable: true,
}

export const CONFIG_ITEMS: CrudItemOptions[] = [
  {
    key:'id',
    label: 'Id',
    controlType,
    type,
    columnOptions: {...columnOptions, hidden:true},
    controlOptions:{
      hideOnCreate: true,
      hideOnUpdate: true
    }
  },{
    key:'code',
    label: 'Code',
    controlType,
    type,
    columnOptions,
  },{
    key:'name',
    label: 'Name',
    controlType,
    type,
    columnOptions
  },{
    key:'description',
    label: 'Description',
    controlType,
    type,
    columnOptions
  },{
    key:'image',
    label: 'Image',
    controlType,
    type,
    columnOptions
  },{
    key:'price',
    label: 'Price',
    controlType,
    type,
    columnOptions
  },{
    key:'category',
    label: 'Category',
    controlType,
    type,
    columnOptions
  },{
    key:'quantity',
    label: 'Quantity',
    controlType,
    type,
    columnOptions
  },{
    key:'inventoryStatus',
    label: 'Inventory status',
    controlType,
    type,
    columnOptions
  },{
    key:'rating',
    label: 'Rating',
    controlType,
    type,
    columnOptions
  }
];