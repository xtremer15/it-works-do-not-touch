import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from './components/categories/services/categories.service';
import { Filter } from './interfaces/fiter';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //TODO:De discutat proprietatea
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  constructor(private categorieSvc: CategoriesService, private router: Router, private route: ActivatedRoute) { }

  filterList: Partial<Filter[]> | undefined
  sideNavStatus: boolean | undefined;
  filters: string[];

  ngOnInit(): void {
    this.getFilterData()

  }

  ngAfterViewInit(): void {
    this.filters = [];
  }

  toggleSideBar(event: boolean) {
    this.sideNavStatus = event;
  }

  getFilterData() {
    this.categorieSvc.getFilterData().subscribe(resp => {
      this.filterList = resp
    })
  }

  filterCategory(filter: string, filterChecked: boolean): void {
    if (filterChecked) {
      if (!this.filters.includes(filter)) {
        this.filters.push(filter)
      }
    } else {
      if (this.filters.includes(filter)) {
        const indexToDelete = this.filters.indexOf(filter);
        this.filters.splice(indexToDelete, 1)
      }
    }
    if (this.filters.length > 0) {
      this.router.navigate(['categories', 'filters'], { queryParams: { filter: this.filters } })
    } else {
      this.router.navigate(['categories'])
    }
  }
}




