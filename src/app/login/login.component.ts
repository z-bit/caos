import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { StoreService } from '../shared/store/store.service';

import {MdInput} from "@angular2-material/input";

@Component({
    selector: 'login',
    styles: [
        '.round {border-radius: 10px 10px; margin: 15px; float: left;}',
        'div {background-color: lightgoldenrodyellow; height: 100%; padding: 15px;}',
        'button {float: right;}',
        '.error {color: red;}'
    ],
    template: `<div>
        <br>
        <h1>Bitte zuerst anmelden ...</h1>    
            
        <md-card class="round">
            <md-card-title>... mit Personalnummer</md-card-title>
            <md-card-subtitle>ausreichend f&uuml;r die meisten Anwendungszwecke</md-card-subtitle>
            <md-card-content>
                <md-input #pnrInput 
                    placeholder="Personalnummer"
                    (keyup.enter)="pnr()"> </md-input> [Enter]
                    <p class="error">{{pnrError}}</p>
            </md-card-content>
           
        </md-card> 
            
        <md-card class="round">
            <md-card-title>... oder Care-Login</md-card-title>
            <md-card-subtitle>notwendung, um besondere Berechtigungen zu erhalten</md-card-subtitle>
            <md-card-content>
                <md-input #loginInput 
                    placeholder="Care-Login"></md-input>
                <md-input #passInput 
                    placeholder="Care-Passwort"
                    (keyup.enter)="login()"></md-input> [Enter]
                    <p class="error">{{loginError}}</p>
            </md-card-content>
        </md-card>
      
       
    </div>`
})
export class LoginComponent implements OnInit{
    @ViewChild('pnrInput') pnrInput: MdInput;
    @ViewChild('loginInput') loginInput: MdInput;
    @ViewChild('passInput') passInput: MdInput;


    public apiUrl;
    pnrError: string = 'pnrError';
    loginError: string = 'loginError';
    user;

    constructor(
        private storeService: StoreService,
        private router: Router,
        store: Store<any>
    ) {
        this.user = store.select('user');
    }

    ngOnInit(){
        this.pnrInput.focus();
    }

    pnr() {
        const pnr = this.pnrInput.value;
        this.pnrInput.value = '';
        this.storeService.setUserByPnr(pnr);
        this.user.subscribe(user => {
            if (user.error!='') {
                this.pnrError = user.error;
            } else {
                this.router.navigate(['/']);
            }
        });
    }

    login() {
        const login = this.loginInput.value;
        this.loginInput.value = '';
        const pass = this.passInput.value;
        this.passInput.value = '';
        this.storeService.setUserByLogin(login, pass);
    }
}
