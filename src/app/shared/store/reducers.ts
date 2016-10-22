import { ActionReducer } from '@ngrx/store';
import { IFirma, IUser } from './interfaces';

import * as c from './constants';

export const firma: ActionReducer<IFirma> = (state: IFirma = <IFirma>{}, action) => {
    switch(action.type) {
        case c.SET_FIRMA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export const user: ActionReducer<IUser> = (state: IUser = <IUser>{}, action) => {
    switch(action.type) {
        case c.LOGIN:
            return Object.assign({}, state, action.payload);
        case c.LOGOUT:
            return Object.assign({}, state, c.NO_USER);
        default:
            return state;
    }
};
