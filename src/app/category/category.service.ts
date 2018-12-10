import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Category } from "./category";
import { Http, Response } from "@angular/http";
@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private http:Http, @Inject('apiUrl') private apiUrl) {}

  url:string=this.apiUrl+"/categories";

  getCategories():Observable<Category[]> {
    return  this.http.get(this.url)
      .pipe(map(response => response.json()));
  }
}
