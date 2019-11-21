import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  constructor(public bankService: BankService) { }

  balanceCheck() {
    this.bankService.isHistory = this.bankService.isHistory === false ? true : false;
    this.bankService.transDetails = `Account balance:
    $${this.bankService.account.balance}`;
  }
}
