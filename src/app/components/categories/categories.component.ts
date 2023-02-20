import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Category } from '@interfaces/category';
import { CategoriesService } from './services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['../../app.component.scss', './categories.component.scss']
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  categories: Partial<Category[]> | undefined;

  constructor(private categoriesSvc: CategoriesService, private router: Router, private activeRoute: ActivatedRoute) { }

  // De discutat cum sa testez caseul asta
  ngAfterViewInit(): void {
    this.activeRoute.queryParamMap.subscribe((params) => {
      const queryParams = params.getAll("filter");
      queryParams.forEach(param => {
        // ToDO Improve: pot face disable la unele din cele 3 optiuni [ProductName,LowToHgih,HighTolow] in caz ca am selectat una din ele pentru ca nu pot sa am HighToLow + ProdcutName
        switch (param) {
          case "In Stock":
            return this.categoriesSvc.filterByProductIsInStock();
          case "Product name":
            return this.categoriesSvc.sortByProductName();
          case "Lowest to highest":
            return this.categoriesSvc.sortByPriceLowToHigh();
          case "Highest to lowest":
            return this.categoriesSvc.sortByPriceHighToLow();
        }
      })
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesSvc.getMockCategories().subscribe(
      item => { this.categories = item }
    )
  }

  nagivateToCategory(categoryID: number | undefined): void {
    this.router.navigate(['category', categoryID])
  }

}
