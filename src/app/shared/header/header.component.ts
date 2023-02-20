import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { concatMap, delay, distinctUntilChanged, interval, mergeMap, Observable, of, Subscription } from 'rxjs';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  toggle: boolean | undefined;
  currentColor: string;
  index: number | undefined = 0;
  allSubscription: Subscription
  @Output() isOpen = new EventEmitter<boolean>();

  constructor(private headerSvc: HeaderService) { }

  ngOnInit(): void {
   this.allSubscription = this.headerSvc.colors.subscribe(
      {
        next: index => this.currentColor = this.headerSvc.states.get(index)
      })
  }

  changeColor(): void {
    if (this.index >= 3) {
      this.index = 0;
    }
    this.headerSvc.colors.next(this.index)
    this.index++;
  }

  open() {
    // this.toggle = !this.toggle
    // this.isOpen.emit(this.toggle)
    if (this.toggle) {
      this.toggle = false
      this.isOpen.emit(this.toggle)

    } else {
      this.toggle = true
      this.isOpen.emit(this.toggle)
    }
  }

  ngOnDestroy(): void {
    this.allSubscription.unsubscribe()
  }

}
