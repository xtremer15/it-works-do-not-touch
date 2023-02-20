import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let items = [
    {
     
      char: "B"
    },
    {
      char: "A"
    },
    {
      char: "C"
    }
  ]

  let sortedItems = [
    {
     
      char: "A"
    },
    {
      
      char: "B"
    },
    {
    
      char: "C"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(CategoriesService);
  });

  describe("getMockCategories", () => {
    it("should call the method", waitForAsync(() => {
      spyOn(service, 'getMockCategories');
      service.getMockCategories();
      expect(service.getMockCategories).toHaveBeenCalled()
    }))
  })

  describe("getMockProducts", () => {
    it("should retrive products based on the index", waitForAsync(() => {
      spyOn(service, 'getMockProducts');
      service.getMockProducts("2");
      expect(service.getMockProducts).toHaveBeenCalledWith("2")
    }))
  })

  describe("sortByFunctions", () => {
    it("should sort the products from high to low", () => {
      spyOn(service, "sortByPriceHighToLow")
      service.sortByPriceHighToLow();
      expect(service.sortByPriceHighToLow).toHaveBeenCalled();
    })

    it("should sort the products from low to high", () => {
      spyOn(service, "sortByPriceLowToHigh")
      service.sortByPriceLowToHigh();
      expect(service.sortByPriceLowToHigh).toHaveBeenCalled();
    })
  })

  describe("compare", () => {
    it("should sort the items in ascending order", () => {
      items.sort(service.compare("char"))
      expect(items).toEqual(sortedItems)
    })
  })
});
