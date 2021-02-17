import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster';
import { Subject } from 'rxjs';
import * as CreditCardActions from './../actions/credit-card.actions';
import { AppState } from './../app.state';



@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss'],
})
export class CardPaymentComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();

  paymentForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      amount: [
        '',
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        Validators.min(1),
      ],
      ],
      cardHolder: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-z][A-Za-z -]*$')],
      ],
      cardNumber: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(20)]],
      expirationDate: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5)
        ],
      ],
      cvv: [
        '',
        [
          Validators.minLength(3),
          Validators.maxLength(3)
        ],
      ],
    });
  }
  get f() {
    return this.paymentForm.controls;
  }



  onSubmit() {
    this.submitted = true;
    const expirationDate = this.paymentForm.value.expirationDate;
    const formattedExpirationDate = String(`20${expirationDate.slice(3)}-${expirationDate.slice(0,2)}`)

    if((new Date() < new Date(formattedExpirationDate) )) {
      this.paymentForm.value.expirationDate =  formattedExpirationDate;
    }
    else {
      this.paymentForm.value.expirationDate = null;
      this.paymentForm.controls['expirationDate'].setErrors({'incorrect': true});
      return
    }

    if (this.paymentForm.invalid) {
      return;
    }
    this.store.dispatch(new CreditCardActions.SubmitCreditCard(this.paymentForm.value));
    this.onReset()

  
  }

  onReset() {
    this.submitted = false;
    this.paymentForm.reset();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
