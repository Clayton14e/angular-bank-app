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
    Amount ${transactionType}: ${this.value},
    Account Balance:  ${this.bankService.account.balance}`;

    // Add Object to Transaction History
  }
}
