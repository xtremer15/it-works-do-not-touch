import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories.component';
import { CategoryComponent } from '../category/category.component';

const routes: Routes = [
  { path: "", component: CategoriesComponent },
  { path: "filters", component: CategoriesComponent },
  { path: ":id", component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingRoutingModule { }
