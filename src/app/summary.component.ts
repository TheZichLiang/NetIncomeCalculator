import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeService } from './app.injectable';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css'],
    standalone: true,
    imports: [CommonModule]
})

export class summaryComponent implements OnInit {
    netIncome: number = 0;
    financialStatus: string = "";

    constructor(private incomeService: IncomeService) {}

    ngOnInit(): void {
        this.incomeService.currentIncome.subscribe(income => {
            this.netIncome = income;
            this.updateFinancialStatus();
        });
    }

    updateFinancialStatus(): void {
        if (this.netIncome <= 0) {
            this.financialStatus = "Broke";
        } else if (this.netIncome > 0 && this.netIncome <= 1000) {
            this.financialStatus = "Stable";
        } else {
            this.financialStatus= "Well-off";
        }
    }
}