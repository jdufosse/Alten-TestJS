import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  private _jsonURL = 'assets/products.json'
  @Input() public items: any[] = []

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.items = data.data
     });
  }

  private getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
