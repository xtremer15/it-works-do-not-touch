import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "categories", loadChildren: () => import("./components/categories/category-routing/category-routing.module").then(result => result.CategoryRoutingModule)
  },
  {
    path: "category", loadChildren: () => import('./components/categories/category-routing/category-routing.module').then(result => result.CategoryRoutingModule)
  },
  {
    path: "", pathMatch: "full", redirectTo: "categories"
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
