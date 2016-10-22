import { ActionReducer } from '@ngrx/store';

export interface UserInterface {
    apiUrl: string;         //passt nirgenwo sonst
    fa: string;             //'20'
    fi: string;             //'01'
    fils: string[]          //['01', '02', '03', '04', '05']
    firma: string;          //'Schmolck EM PKW'
    client: string;         //'EDV07'
    logged_in: boolean;     //true
    pgr: string;            //'182'
    bkz: string;            //'SGZ'
    pnr: string;            //'1152'
    name: string;           //'Zoppelt, G\u00fcnther'
    abt: string;            //'EDV'
    art: string;            //'1'
    austritt: string;       //'' oder '01-01-2016'
    berechtigung: string;   //'NO' oder 'IT', 'SB', 'BH', 'VK'
    token: number;          //33
}

export const SET_FIRMA = 'SET_FIRMA';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const NO_USER = {
    logged_in: false, pgr: '', bkz: '', pnr: '', name: '',
    abt: '', art: '', austritt: '', berechtigung: '', token: ''
};

export const user: ActionReducer<UserInterface> = (state: {}, action) => {
    switch(action.type) {
        case SET_FIRMA:
            return Object.assign({}, state, action.payload);
        case LOGIN:
            return Object.assign({}, state, action.payload);
        case LOGOUT:
            return Object.assign({}, state, NO_USER);
        default:
            return state;
    }
};

