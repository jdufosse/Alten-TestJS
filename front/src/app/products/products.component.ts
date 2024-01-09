import { Component, Input } from '@angular/core';
import { ProductsService } from 'app/products-admin/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() public items: any[] = []

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {
      console.log(data);
      this.items = data
    });
  }
}
