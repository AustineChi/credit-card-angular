import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { CreditCardModel } from './models/credit-card.interface';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'credit app payment';
  state: any;
  creditCard: CreditCardModel;
  error: any;
  loading: boolean


  constructor(private router: Router, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.state = this.store.select(store => store.creditCard);
    this.state.subscribe(data => {
      this.creditCard = data.creditCard;
      this.loading = data.loading$;
      this.error = data.error$

    });
  }

  navigate() {
    this.router.navigate(['/payment']);
  }

}

