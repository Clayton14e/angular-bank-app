import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  value = 0;
  transDetails = '';
  trans = this.bankService.account.transactions;
  constructor(public bankService: BankService) { }

  withdraw() {
    // Withdraw money from Bank Service account balance
    this.bankService.account.balance -= this.value;
    this.transactionDetails('Withdrawn');
  }
  deposit() {
    this.bankService.account.balance += this.value;
    this.transactionDetails('Deposited');
  }
  transactionDetails(transactionType) {
    // Display Transaction Details
    this.transDetails =
    `Transaction Successful!
    Amount ${transactionType}: $${this.value}
    Account Balance:  $${this.bankService.account.balance}`;

    // Add Object to Transaction History
    this.bankService.account.transactions.push({date: '11-18-2019',
    type: `${transactionType}`,
    amount: `${this.value}`,
    currency: 'usd'});
  }
  transactionHistory() {
    this.transDetails = `Recent Transactions: `;
    for (let i = this.trans.length - 1; i >= 0; i--) {
      this.transDetails +=
      `
      ${this.bankService.account.transactions[i].date} ${this.trans[i].type}
      $${this.trans[i].amount} ${this.trans[i].currency}
      `;
    }
  }
  balanceCheck() {
    this.transDetails = `Account balance:
    $${this.bankService.account.balance}`;
  }
}
