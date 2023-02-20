import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, CATEGORIES_PAYLOAD, FILTER_DATA_PAYLOAD, PRODUCTS_PAYLOAD } from '@constants/constants';
import { Category } from '@interfaces/category';
import { Filter } from '@interfaces/fiter';
import { Product } from '@interfaces/product';
import { ApiService } from '../../../services/mock/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private mock: ApiService) { }


  private TEMP_URL = BASE_URL
  private TEMP_PAYLOAD = CATEGORIES_PAYLOAD;
  private TEMP_PRODUCTS_PAYLOAD = PRODUCTS_PAYLOAD
  private TEMP_FILTER_DATA = FILTER_DATA_PAYLOAD

  getMockCategories() {
    return this.mock.get(this.TEMP_URL, this.TEMP_PAYLOAD);
  }

  getFilterData(): Observable<Filter[]> {
    return this.mock.get(this.TEMP_URL, this.TEMP_FILTER_DATA)
  }

  getMockProducts(categoryId: string | null) {
    //Hardcodat pana fixez pasarea de categoryIndex
    const FILTERED_CATEGORIES = this.searchProductsBasedOnIndex(categoryId);
    return this.mock.get(this.TEMP_URL, FILTERED_CATEGORIES)
  }

  private searchProductsBasedOnIndex(index: any) {
    return this.TEMP_PRODUCTS_PAYLOAD[index]
  }


  sortByPriceHighToLow() {
    this.TEMP_PAYLOAD.sort(this.compare("-id"));
  }


  sortByPriceLowToHigh() {
    this.TEMP_PAYLOAD.sort(this.compare("id"));
  }

  filterByProductIsInStock() {
    console.log("sorted by product presence in stock");
  }

  sortByProductName() {

    this.TEMP_PAYLOAD.sort(this.compare("categoryName"));
  }

  compare(property) {
    let sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return (firstEle, secondEle) => {
      if (sortOrder === -1) {
        return secondEle[property].toString().localeCompare(firstEle[property].toString());
      } else {
        return firstEle[property].toString().localeCompare(secondEle[property].toString());
      }
    }
  }

}
