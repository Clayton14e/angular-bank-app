import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor() { }
  isHistory = false;
  value = 0;
  transDetails = '';


  account: any = {
    fname: 'Clayton',
    lname: 'Fortini',
    age: 25,
    address: {
      street: '1234 street st',
      city: 'San Diego',
      state: 'CA',
      zip: 92065,
      country: 'USA'
    },
    balance: 100.01,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };

trans = this.account.transactions;

// Methods
// Withdraw Function
withdraw() {
  // Withdraw money from Bank Service account balance
  if (this.isHistory) {
    this.isHistory = false;
  }
  this.account.balance -= this.value;
  this.transactionDetails('withdrawal');
}
// Deposit Function
deposit() {
  if (this.isHistory) {
    this.isHistory = false;
  }
  this.account.balance += this.value;
  this.transactionDetails('deposit');
}
// Transaction Details Function
transactionDetails(transactionType) {
  // Display Transaction Details
  this.transDetails =
  `Transaction Successful!
  Amount ${transactionType}: $${this.value}
  Account Balance:  $${this.account.balance}`;

  // Add Object to Transaction History
  this.account.transactions.push({date: '11-18-2019',
  type: `${transactionType}`,
  amount: `${this.value}`,
  currency: 'usd'});
}
  // Toggle Transaction History
transactionHistory() {

    this.isHistory = this.isHistory === false ? true : false;
  }
}

