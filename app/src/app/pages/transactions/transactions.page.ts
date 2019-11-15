import { Component } from '@angular/core';
import { UlaService } from '../../../service/ula.service';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage {

  constructor(private ulaService: UlaService) {
  }

  ionViewWillEnter() {
    // Send a message to the ULA with the type 'get-transactions'
    // The callback will send you an array of transactions (received and/or shared credentials) in the 'body' property
    // (https://github.com/rabobank-blockchain/universal-ledger-agent/blob/master/src/model/transaction.ts)
  }
}
