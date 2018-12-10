import { Injectable, Inject } from "@angular/core";
import { Product } from "./product";
import { Http, Response } from "@angular/http";
import {map} from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: Http, @Inject('apiUrl') private apiUrl ) {}

  getProducts(seoUrl:string): Observable<Product[]> {
    if(seoUrl) {
      return this.http.get(this.apiUrl + '/products/'+seoUrl)
        .pipe(map(response => response.json()));
    }else {
      return this.http.get(this.apiUrl + '/products')
        .pipe(map(response => response.json()));
    }
    
  }
}
