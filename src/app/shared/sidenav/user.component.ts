import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'user',
    styles: ['button {float: right;}'],
    template: `<md-card *ngIf="user.berechtigung" style="border-radius: 5px 5px; margin: 3px;">
        <h3>{{user.name}}</h3>
        Berechtigung: <strong>{{user.berechtigung}}</strong>
        <button md-raised-button (click)="logout()">Abmelden</button>
    </md-card>`
})
export class UserComponent {
    @Input() user;
    @Output() abmelden = new EventEmitter();

    logout() {
        this.abmelden.emit();
    }
}
