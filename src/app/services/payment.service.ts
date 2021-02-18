import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
} from '@angular/common/http';
import { delay } from 'rxjs/operators'
import { of } from 'rxjs';

import { CreditCardModel } from '../models/credit-card.interface'

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private card_url = 'http://localhost:3000/card';

  constructor(private http: HttpClient) { }

  makePayment(paymentData: CreditCardModel) {
    // return this.http.post(this.card_url, paymentData).pipe(delay(500))
    return of(new HttpResponse({ status: 200, body: paymentData  }));


  }
}
