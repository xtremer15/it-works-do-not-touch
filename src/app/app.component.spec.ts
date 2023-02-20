import { AnimationDriver } from '@angular/animations/browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCheckbox, MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ApiService } from './services/mock/api.service';
import { MatCheckboxHarness } from '@angular/material/checkbox/testing';
import { CategoriesService } from '@components/categories/services/categories.service';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { BehaviorSubject, filter } from 'rxjs';
import { MockActivatedRoute } from './utils/test/mocks/mockroute.componenet';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let event: MatCheckboxChange;
let debugEle: DebugElement;
let router: Router;


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatCheckboxModule
      ],
      declarations: [
        AppComponent,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    debugEle = fixture.debugElement;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe("filterCategory", () => {
    it("should navigate using the filters applied", fakeAsync(() => {
      const addFilter = true;
      let routerSpy = spyOn(router, 'navigate');
      component.filterCategory("In stock", addFilter);
      expect(component.filters.length).toBeGreaterThan(0);
      expect(routerSpy).toHaveBeenCalledWith(['categories', 'filters'], { queryParams: { filter: component.filters } })
    }))

    fit("should not navigate and should remove the filter", waitForAsync(() => {
      const removeFilter = false;
      component.filters = ["In stock"]
      let routerSpy = spyOn(router, 'navigate');
      component.filterCategory(component.filters[0], removeFilter);
      expect(component.filters.length).toEqual(0);
      expect(routerSpy).toHaveBeenCalledWith(['categories'])
    }))
  })
});
