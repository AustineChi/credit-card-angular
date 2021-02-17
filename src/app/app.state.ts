import { CreditCardModel } from './models/credit-card.interface';

export interface AppState {
    creditCard: CreditCardModel,
    loading: boolean,
    error: Error
}