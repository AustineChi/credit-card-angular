import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { CreditCardModel } from '../models/credit-card.interface'

export const SUBMIT_CREDIT_CARD = '[CREDIT_CARD] Submit'
export const SUBMIT_CREDIT_CARD_SUCCESS = '[CREDIT_CARD] Submit success'
export const SUBMIT_CREDIT_CARD_FAILURE = '[CREDIT_CARD] Submit failure'

export class SubmitCreditCard implements Action {
    readonly type = SUBMIT_CREDIT_CARD

    constructor(public payload: CreditCardModel) { }
}
export class SubmitCreditCardSuccessAction implements Action {
    readonly type = SUBMIT_CREDIT_CARD_SUCCESS

    constructor(public payload: CreditCardModel) { }
}
export class SubmitCreditCardFailureAction implements Action {
    readonly type = SUBMIT_CREDIT_CARD_FAILURE

    constructor(public payload: Error) { }
}

export type Actions = SubmitCreditCard | SubmitCreditCardSuccessAction | SubmitCreditCardFailureAction