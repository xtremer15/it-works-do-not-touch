"use strict";(self.webpackChunkit_works_do_not_touch=self.webpackChunkit_works_do_not_touch||[]).push([[420],{8420:(P,l,i)=>{i.r(l),i.d(l,{CategoryRoutingModule:()=>O});var s=i(9808),g=i(0),t=i(5e3),u=i(731),c=i(9224),d=i(773);function C(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"mat-card",3),t.NdJ("click",function(){const p=t.CHM(o).$implicit;return t.oxw(2).nagivateToCategory(null==p?null:p.id)}),t.TgZ(1,"mat-card-header"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-content"),t._uU(6,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, maxime quia animi sed voluptatem reprehenderit distinctio quos dolorem laborum blanditiis assumenda eaque vero dicta atque tempora eligendi fuga exercitationem! Repellat. Exercitationem dolorum provident voluptatibus soluta atque perspiciatis quis alias id maxime nihil nesciunt recusandae in, repellat laudantium nobis temporibus architecto harum, sint obcaecati ad fuga vero praesentium. Excepturi, beatae repudiandae? "),t.qZA(),t.qZA()}if(2&e){const o=n.$implicit;t.xp6(2),t.Oqu(null==o?null:o.id),t.xp6(2),t.Oqu(null==o?null:o.categoryName)}}function f(e,n){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,C,7,2,"mat-card",2),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.categories)}}function h(e,n){1&e&&t._UZ(0,"mat-spinner",4)}let m=(()=>{class e{constructor(o,a,r){this.categoriesSvc=o,this.router=a,this.activeRoute=r}ngAfterViewInit(){this.activeRoute.queryParamMap.subscribe(o=>{o.getAll("filter").forEach(r=>{switch(r){case"In Stock":return this.categoriesSvc.filterByProductIsInStock();case"Product name":return this.categoriesSvc.sortByProductName();case"Lowest to highest":return this.categoriesSvc.sortByPriceLowToHigh();case"Highest to lowest":return this.categoriesSvc.sortByPriceHighToLow()}})})}ngOnInit(){this.getCategories()}getCategories(){this.categoriesSvc.getMockCategories().subscribe(o=>{this.categories=o})}nagivateToCategory(o){this.router.navigate(["category",o])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.G),t.Y36(g.F0),t.Y36(g.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-categories"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],["class","categories",3,"click",4,"ngFor","ngForOf"],[1,"categories",3,"click"],["id","loading-spinner"]],template:function(o,a){if(1&o&&(t.YNc(0,f,2,1,"div",0),t.YNc(1,h,1,0,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(2);t.Q6J("ngIf",a.categories)("ngIfElse",r)}},directives:[s.O5,s.sg,c.a8,c.dk,c.n5,c.dn,d.$g],styles:["mat-card[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;margin-left:5px;width:200px;height:260px;overflow:auto}mat-sidenav-container[_ngcontent-%COMP%]{height:calc(100% - 128px)}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{box-shadow:3px 0 6px #0000003d;width:200px;padding-top:10px}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{padding-left:10px}","mat-card[_ngcontent-%COMP%]{background-color:#fafa}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{word-break:break-all}#loading-spinner[_ngcontent-%COMP%]{display:block;margin:auto}"]}),e})();function _(e,n){if(1&e&&(t.TgZ(0,"mat-card"),t.TgZ(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-content"),t._uU(4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, id."),t.qZA(),t.qZA()),2&e){const o=n.$implicit;t.xp6(2),t.Oqu(null==o?null:o.productName)}}function y(e,n){if(1&e&&(t.TgZ(0,"section"),t.YNc(1,_,5,1,"mat-card",2),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.products$)}}function v(e,n){1&e&&t._UZ(0,"mat-spinner",3)}const x=[{path:"",component:m},{path:"filters",component:m},{path:":id",component:(()=>{class e{constructor(o,a){this.categoriesSvc=o,this.route=a,this.categoryId=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.getProducts()}getProducts(){this.categoriesSvc.getMockProducts(this.categoryId).subscribe(o=>{this.products$=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.G),t.Y36(g.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-category"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngFor","ngForOf"],["id","loading-spinner"]],template:function(o,a){if(1&o&&(t.YNc(0,y,2,1,"section",0),t.YNc(1,v,1,0,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(2);t.Q6J("ngIf",a.products$)("ngIfElse",r)}},directives:[s.O5,s.sg,c.a8,c.n5,c.dn,d.$g],styles:["mat-card[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;width:180px;height:200px;margin-top:5px;margin-left:10px;overflow:auto;background-color:#faebd7}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{word-break:break-all}#loading-spinner[_ngcontent-%COMP%]{display:block;margin:auto}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(x)],g.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,M]]}),e})()}}]);