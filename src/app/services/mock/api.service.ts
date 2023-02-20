import { Category } from './../../interfaces/category';
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(url: any, payload: any) {
    return this.getMockData(payload)
  }

  
  put(url: any, payload: Category) {
    return this.getMockData(payload)
  }

  post(url: any, payload: any) {
    return this.getMockData(payload)
  }

  delete(url: any, payload: any) {
    return of([])
  }

  private getMockData(payload: any) {
    if (payload) {
      return of(payload).pipe(delay(3500))
    } else {
      return of([]).pipe(delay(3500))
    }
  }

  //Pentru folosinta in viitor
  // getCategories(url:string){
  //   this.http.get(url);
  // }

  // postCategories(url:string,payload:Partial<Category>){
  //   this.http.post(url,payload);
  // }

  // putCategories(url:string,payload:Partial<Category>){
  //   this.http.put(url,payload);
  // }

  // deleteCategory(url:string){
  //   this.http.delete(url);
  // }

}
