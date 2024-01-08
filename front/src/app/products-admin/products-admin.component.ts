import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  private _jsonURL = 'assets/products.json'
  @Input() public data: any[] = []
  @Input() public config: CrudItemOptions[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.data = data.data

      if(this.data?.length){
        this.config = Object.keys(this.data[0]).map(key => {
          return {
            key,
            label : key,
            controlType : ControlType.AUTOCOMPLETE,
            columnOptions : {
              default : true,
              sortable : true,
              filterable : true
            }
          }
        })
      }
     });
  }

  private getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
