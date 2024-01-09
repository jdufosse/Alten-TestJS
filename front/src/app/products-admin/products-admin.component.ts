import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'app/products/product.model';
import { TableComponent } from 'app/shared/ui/table/table.component';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  @Input() public data: any[] = []
  @Input() public config: CrudItemOptions[] = []
  @Input() public readonly entity = Product
  @ViewChild('table') table: TableComponent<Product>;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {
      console.log(data);
      this.data = data

      if (this.data?.length) {
        this.config = Object.keys(this.data[0]).map(key => {
          return {
            key,
            label: key,
            controlType: ControlType.AUTOCOMPLETE,
            columnOptions: {
              default: true,
              sortable: true,
              filterable: true
            }
          }
        })
      }
    });
  }
}
