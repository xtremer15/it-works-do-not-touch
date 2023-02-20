import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BASE_URL, CATEGORIES_PAYLOAD } from '@constants/constants';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let url = "https:/www.ceva.ro"
  let mockPayload = [
    {
      "id": 21,
      "categoryName": "casda"
    },
    {
      "id": 22,
      "categoryName": "sdfsf"
    },
    {
      "id": 23,
      "categoryName": "dfgdg"
    },
    {
      "id": 24,
      "categoryName": "asdad"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("get", () => {
    it("should make a get request and return the payload", waitForAsync(() => {
      service.get(url, mockPayload).subscribe((data) => {
        expect(data).toEqual(mockPayload)
      })
    }))

    it("should make a get request and return an empty array", waitForAsync(() => {
      service.get(url, "").subscribe((data) => {
        expect(data.length).toEqual(0)
      })
    }))

  })


  describe("post", () => {
    it("it should make a post request and create a resoruce then return the data", waitForAsync(() => {
      service.post(url, mockPayload).subscribe(data => {
        expect(data).toContain({
          "id": 21,
          "categoryName": "casda"
        })
        expect(data.length).toBeGreaterThan(0)
        expect(data).toEqual(mockPayload)
      })
    }))
  })


  describe("put", () => {

    it("it should make a put request to update a resource", waitForAsync(() => {
      // Will make a test to check for a resoruce to be updated
    }))
  })

  describe("delete", () => {

    it("it should make a delete request", waitForAsync(() => {
      service.delete(url, mockPayload).subscribe(data=>{
        expect(data).toBeTruthy()
        expect(data).toEqual([])
      })
    }))
  })



});
