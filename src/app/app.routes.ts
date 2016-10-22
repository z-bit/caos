import { Routes } from '@angular/router';

import { CaosComponent } from './caos.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path: '',
        component: CaosComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
];
