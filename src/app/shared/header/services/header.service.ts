import { state } from '@angular/animations';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, from, fromEvent, interval, mergeMap, of, Subject, Subscription, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {




  constructor() { }



  states = new Map<number, string>([
    [0, "warn"],
    [1, "green"],
    [2, "primary"]
  ])

  colors = new BehaviorSubject<number>(this.states.keys().next().value)




}
 