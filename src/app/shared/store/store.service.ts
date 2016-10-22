import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { IFirma, IUser, IAuftrag } from './interfaces';
import * as c from './constants';



@Injectable()
export class StoreService {
    public firma = <IFirma>{};
    public user = <IUser>{};
    public auftrag = <IAuftrag>{};

    public httpError: string;

    constructor (
        private http:Http,
        private store: Store<any>
    ) {}

    setFirma() {
        this.http.get('assets/app.config.json').map(res => res.json()).subscribe(
            data => {
                this.firma.apiUrl = data.apiUrl;
                this.http.get(this.firma.apiUrl + '/firma')
                    .map(res => res.json())
                    .subscribe(
                        data => {
                            // ohne error und db
                            this.firma.fa = data.fa;
                            this.firma.fi = data.fi;
                            this.firma.fils = data.fils;
                            this.firma.name = data.name;
                            this.firma.client = data.client;
                            this.store.select('firma');
                            this.store.dispatch({type: c.SET_FIRMA, payload: this.firma});
                        }
                    )
                ;
            }
        );

    }

    abmelden() {
        this.user = c.NO_USER;
        this.store.select('user');
        this.store.dispatch({type:c.LOGOUT});
    }

    setUserByPnr(pnr) {
        this.httpError = 'initial';
        const api = this.firma.apiUrl + '/login/' + this.firma.fa + '/' + pnr;
        this.http
            .get(api)
            .map((res) => {
                    return res.json();
            })
            .subscribe(
                data => {
                    //console.log(data);
                    // ohne fa, fi, clientIp, clientPc
                    this.user.error = data.error;
                    this.user.pnr = data.pnr;
                    this.user.bkz = data.bkz;
                    this.user.name = data.name;
                    this.user.abt = data.abt;
                    this.user.art = data.art;
                    this.user.pgr = data.pgr;
                    this.user.austritt = data.austritt;
                    this.user.berechtigung = data.berechtigung;
                    this.user.token = data.token;
                    this.store.select('user');
                    this.store.dispatch({type: c.LOGIN, payload: this.user});
                },
                err => {
                    const e = JSON.parse(err._body);
                    this.user = c.NO_USER;
                    this.user.error = e.error;
                    this.store.dispatch({type: c.LOGIN, payload: this.user});
                    // TODO error logging
                    console.log('TODO error logging: ', e.error, e.clientIp, e.clientPc);
                }
            )
        ;
    }

    setUserByLogin(login, pass) {

    }
}



