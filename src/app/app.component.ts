import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCardModel } from './models/credit-card.interface';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'credit app payment';
  creditCard: Observable<CreditCardModel>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>



  constructor(private router: Router, private store: Store<AppState>) {



  }


  ngOnInit() {
    this.creditCard = this.store.select(store => store.creditCard);
    this.loading$ = this.store.select(store => store.loading);
    this.error$ = this.store.select(store => store.error);
  }


  navigate() {
    this.router.navigate(['/payment']);
  }
}
