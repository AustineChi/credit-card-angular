import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PaymentService } from '../services/payment.service';
import { SubmitCreditCard, SubmitCreditCardFailureAction, SubmitCreditCardSuccessAction } from '../actions/credit-card.actions';
import * as CreditCardActions from '../actions/credit-card.actions'



@Injectable()
export class CreditCardEffects {

  @Effect() creditCard$ = this.actions$
    .pipe(
      ofType<SubmitCreditCard>(CreditCardActions.SUBMIT_CREDIT_CARD),
      mergeMap(
        (data) => this.paymentService.makePayment(data.payload)
          .pipe(
            map(() => new SubmitCreditCardSuccessAction(data.payload)),
            catchError(error => of(new SubmitCreditCardFailureAction(error)))
          )
      )
    )
  constructor(private actions$: Actions, private paymentService: PaymentService) { }

}