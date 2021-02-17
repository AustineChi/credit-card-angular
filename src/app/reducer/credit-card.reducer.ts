import { Action } from '@ngrx/store'
// import { CreditCardModel } from '../models/credit-card.interface'
import * as CreditCardActions from '../actions/credit-card.actions'
import { AppState } from '../app.state';

const currentDate = new Date();

const initialState: AppState = {
    creditCard: {
        cardNumber: '',
        cardHolder: '',
        expirationDate: currentDate,
        cvv: '',
        amount: 0,
    },
    loading: false,
    error: undefined
}

export function reducer(state: AppState[] = [initialState], action: CreditCardActions.Actions) {

    switch (action.type) {

        case CreditCardActions.SUBMIT_CREDIT_CARD:
            return {
                ...state,
                loading: true
            }
        case CreditCardActions.SUBMIT_CREDIT_CARD_SUCCESS:
            return {
                ...state,
                creditCard: action.payload,
                loading: false

            }
        case CreditCardActions.SUBMIT_CREDIT_CARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
              };
        default:
            return state;
    }
}