import { Router } from "@angular/router";
import { CategoriesService } from "@components/categories/services/categories.service";

export class MockActivatedRoute {

    constructor(private categoriesSvc: CategoriesService, private router: Router) { }


    navigateAndSortByInStockProducts() {
        this.router.navigate(['categories', 'filters'], { queryParams: { filter: "In stock" } })
        return this.categoriesSvc.filterByProductIsInStock();
    }

}
