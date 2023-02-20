import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, of } from 'rxjs';
import { MockActivatedRoute } from 'app/utils/test/mocks/mockroute.componenet';


describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let mockedCategories: MockActivatedRoute;
  let fixture: ComponentFixture<CategoriesComponent>;
  let activeRoute: ActivatedRoute
  let debugEle: DebugElement;
  let router: Router;
  let param = new BehaviorSubject({ queryParameters: { filter: ["In stock", "Product Name", "Lowest to Highest", "Highest to Lowest"] } })
  let params = new BehaviorSubject("In stock")
  let service: CategoriesService


  const mockedRoute = {
    path: "category",
    filters: ["In stock", "Product Name", "Lowest to Highest", "Highest to Lowest"]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      //TODO : Diferenta dintre a injecta folosind TestBedul vs a  adauga la imports
      providers: [CategoriesService,
        {
          provide: activeRoute, useValue: params
        }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    activeRoute = TestBed.inject(ActivatedRoute)
    service = TestBed.inject(CategoriesService);
    debugEle = fixture.debugElement;
    fixture.detectChanges();
  });


  describe("navigateToCategory", () => {

    it("should navigate to a different route", waitForAsync(() => {
      // Arrange
      // Act
      let routerSpy = spyOn(router, "navigate")
      component.nagivateToCategory(2)
      //Assert 
      expect(routerSpy).toHaveBeenCalledTimes(1)
      expect(routerSpy).toHaveBeenCalledWith(["category", 2]);
    }))

  })

  describe("ngOnInit", () => {
    it("should check that categories are initialized", waitForAsync(() => {

      spyOn(component, 'getCategories')
      //De discutat faptul ca neavand return value atunci nu pot folosi metoda
      // componentSpy.and.returnValue(mockCategories)
      component.ngOnInit();
      expect(component.getCategories).toHaveBeenCalled()
    }))


    describe("getCategories", () => {
      it("should updated the categories", waitForAsync(() => {
        const mockCategories =
          [{
            "id": 4,
            "categoryName": "Cars"
          },
          {
            "id": 2,
            "categoryName": "Games"
          }]


        spyOn(service, 'getMockCategories').and.returnValue(of(mockCategories))
        component.getCategories()
        expect(JSON.stringify(component.categories)).toEqual(JSON.stringify(mockCategories))
      }))
    })


  })

  describe("ngAfterViewInit", () => {
    it("should check that filterByProductIsInStock was called", waitForAsync(() => {
      component.ngAfterViewInit()
      let paramsSpy = spyOn(activeRoute.queryParamMap,'subscribe');

      let paramsSpy = spyOn(activeRoute,'queryParamMap');
      spyOn(service, 'sortByProductName').and.callThrough()
      // spyOn(service, 'sortByProductName').and.callThrough()
      // spyOn(service, 'sortByPriceLowToHigh').and.callThrough()
      // spyOn(service, 'sortByPriceHighToLow').and.callThrough()
      activeRoute.queryParamMap.subscribe((parameters) => {
        const queryParamters = parameters.getAll("filter")
        console.log("aici ceva test queryParams", queryParamters)
        queryParamters.forEach((paramter) => {
          console.log("aici parametru", paramter)
          switch (paramter) {
            case "Product Name":
              return service.sortByProductName();
          }
        })
        expect(service.sortByProductName).toHaveBeenCalled();
      })

      // if (mockedRoute.filters.includes(inStock)) {
      //   service.filterByProductIsInStock();
      // }
      // mockFilters.forEach((filter) => {
      //   switch (filter) {
      //     case "In stock":
      //       return service.filterByProductIsInStock();
      //     case "Product Name":
      //       return service.sortByProductName();
      //     case "Lowest to Highest":
      //       return service.sortByPriceLowToHigh();
      //     case "Highest to Lowest":
      //       return service.sortByPriceHighToLow();
      //     default:
      //       return "no value"
      //   }
      // })

      // expect(service.sortByProductName).toHaveBeenCalled();
      // expect(service.sortByPriceLowToHigh).toHaveBeenCalled();
      // expect(service.sortByPriceHighToLow).toHaveBeenCalled();
    }))
  })
});
