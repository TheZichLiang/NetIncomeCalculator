import { Component } from '@angular/core';
import { Income } from './income.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncomeService } from './app.injectable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class incomeComponent {

  constructor(private router: Router, private incomeService: IncomeService) {}

  incomeModel = new Income(0,0,0,0);
  netIncome = 0;

  calculateAndSaveIncome() {
    this.getNetIncome();
    this.incomeService.updateIncome(this.netIncome);
  }

  getNetIncome() {
    this.netIncome = this.incomeModel.grossIncome - 
                      (this.incomeModel.grossIncome * this.incomeModel.federalTax / 100) - 
                      (this.incomeModel.grossIncome * this.incomeModel.stateTax / 100) - 
                      this.incomeModel.otherDeductions;
  }
}
