import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'app/products/product.model';
import { TableComponent } from 'app/shared/ui/table/table.component';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ProductsService } from './products.service';
import { SnackbarService } from 'app/shared/utils/snackbar/snackbar.service';
import { CONFIG_ITEMS } from './CONFIG_ITEMS';
import { combineLatestWith } from 'rxjs';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  @Input() public data: any[] = []
  @Input() public config: CrudItemOptions[] = CONFIG_ITEMS
  @Input() public readonly entity = Product
  @ViewChild('table') table: TableComponent<Product>;

  constructor(private productService: ProductsService,
    private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  saved(product: Product): void {
    const method = (this.table.creation)
      ? this.productService.add
      : this.productService.update

    method(product).subscribe({
      next: () => {
        this.loadProducts()
      },
      error: () => {
        this.snackbarService.displayError(`An error has occurred while ${(this.table.creation) ? 'adding' : 'updating'} a product`);
      }
    })
  }

  deleted(ids: number[]): void {
    if (ids?.length > 0) {
      let deletions = this.productService.delete(ids[0])

      for (let index = 1; index < ids.length; index++) {
        deletions = deletions.pipe(combineLatestWith(this.productService.delete(ids[index])))
      }

      deletions.subscribe({
        next: () => {
          this.loadProducts()
        },
        error: (error) => {
          console.error(error)
          this.snackbarService.displayError('An error has occurred while deleting products');
        }
      })
    }
  }

  private loadProducts(): void {
    this.productService.getAll().subscribe(
      {
        next: data => {
          console.log(data);
          this.data = data
        },
        error: () => {
          this.snackbarService.displayError('An error has occurred while getting products');
        }
      });
  }
}
