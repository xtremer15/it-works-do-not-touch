
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '@interfaces/product';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products$: Partial<Product[]> | undefined
  //TODO: de facut debugging de ce nu se paseaza din parinte index-ul
  categoryId: string | null = this.route.snapshot.paramMap.get('id') 

  constructor(private categoriesSvc: CategoriesService, private route:ActivatedRoute) { 
    // this.products$ = this.categoriesSvc.getMockCategories();
  }

  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts(): void {   
    this.categoriesSvc.getMockProducts(this.categoryId).subscribe(
      product => {
        this.products$ = product
      }
    )
   
  }
}
