import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Component({
    selector: 'caos',
    styles:['img.center {display: block; margin: 0 auto;}'],
    template: `<div>
         <img class="center" src="../assets/caos_plainA.png">
    </div>`
})
export class CaosComponent {
    user;
    constructor(store: Store<any>, private router: Router){
        this.user = store.select('user');
    }

    ngOnInit() {
        this.user.subscribe(
            user => {
                if (user.pnr === '') this.router.navigate(['/login']);
            }
        );
    }
}
