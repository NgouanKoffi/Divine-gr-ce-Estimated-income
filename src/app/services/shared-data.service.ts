// src/app/services/shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private _estimatedRevenue = new BehaviorSubject<number>(0);
  estimatedRevenue$ = this._estimatedRevenue.asObservable();

  get estimatedRevenue(): number {
    return this._estimatedRevenue.value;
  }

  set estimatedRevenue(value: number) {
    this._estimatedRevenue.next(value);
  }
}
