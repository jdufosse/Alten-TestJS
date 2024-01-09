import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/products/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _backURL = 'http://localhost:3000/products'

  constructor(private http: HttpClient) {}

  public getAllProduct(): Observable<any> {
    return this.http.get(this._backURL);
  }

  // public getOneProduct(productId : number): Observable<Product> {
  //   return this.http.get(this._jsonURL);
  // }

  // public getJSON(): Observable<Product> {
  //   return this.http.get(this._jsonURL);
  // }
  // public getJSON(): Observable<Product> {
  //   return this.http.get(this._jsonURL);
  // }

}
