import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  public saveBook(book:any,categoryId:number):Observable<any>{
    return this.http.post<any>(environment.adminURL+`save/${categoryId}/book`,book);
  }

  public saveCategory(category:any):Observable<any>{
    return this.http.post<any>(environment.adminURL+'save/category',category);
  }
}
