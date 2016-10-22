import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './shared';
import { StoreModule } from '@ngrx/store';
import { firma, user } from './shared/store/reducers';

import { StoreService } from './shared/store/store.service';

import { CaosComponent } from './caos.component';
import { UserComponent } from './shared/sidenav/user.component';
import { FirmaComponent } from './shared/sidenav/firma.component';
import { LoginComponent } from './login/login.component';



import { AppComponent } from './app.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
      AppComponent,
      FirmaComponent,
      UserComponent,
      LoginComponent,
      CaosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({ firma, user}),
    RouterModule.forRoot(routes)
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
