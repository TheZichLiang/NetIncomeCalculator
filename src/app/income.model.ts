export class Income {
    constructor(
      public grossIncome: number,
      public stateTax: number,
      public federalTax: number,
      public otherDeductions: number = 0
    ) {}
}