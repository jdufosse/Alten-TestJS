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

  public getAll(): Observable<any> {
    return this.http.get(this._backURL);
  }

  public getOne(productId : number): Observable<any> {
    return this.http.get(this._backURL);
  }

  public add(product: Product): Observable<any> {
    return this.http.post(this._backURL, product);
  }
  
  public update(product: Product): Observable<any> {
    return this.http.patch(`${this._backURL}/${product.id}`, product);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(`${this._backURL}/${id}`);
  }
}
