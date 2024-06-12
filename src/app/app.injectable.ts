import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private incomeSource = new BehaviorSubject<number>(0);
  currentIncome = this.incomeSource.asObservable();

  constructor() { }

  updateIncome(income: number) {
    this.incomeSource.next(income);
  }
}