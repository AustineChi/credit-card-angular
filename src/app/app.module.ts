import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { PaymentService } from './services/payment.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { CommonModule } from '@angular/common';
import { FormatCardNumberDirective } from './directives/format-card-number.directive';
import { FormatExpirationDateDirective } from './directives/format-expiration-date.directive';

import { reducer } from './reducer/credit-card.reducer';
import { FormatAlpabetsDirective } from './directives/format-alpabets.directive';
import { EffectsModule } from '@ngrx/effects';
import { CreditCardEffects } from './effects/creditCard.effects';

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentComponent,
    FormatCardNumberDirective,
    FormatExpirationDateDirective,
    FormatAlpabetsDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToasterModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      creditCard: reducer
    }),
    EffectsModule.forRoot([CreditCardEffects]),
    HttpClientModule
  
  ],
  providers: [PaymentService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
