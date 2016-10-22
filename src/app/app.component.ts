import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { StoreService } from './shared/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
    title = 'cAos';
    firma;
    user;

  constructor(
      router: Router,
      private storeService: StoreService,
      store: Store<any>
  ) {
      storeService.setFirma();
      this.firma = store.select('firma');
      this.user = store.select('user');

      this.firma.subscribe(
          data => {
              if (data.fa !== '') router.navigate(['/login']);
          }
      );

      this.user.subscribe(
          data => {
              if (data.error !== '') router.navigate(['/login']);
          }
      )
  }

  abmelden() {
      this.storeService.abmelden();
  }
}
