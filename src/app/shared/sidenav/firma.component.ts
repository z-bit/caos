import { Component, Input } from '@angular/core';

@Component({
    selector: 'firma',
    template: `<md-card *ngIf="firma.fa" style="border-radius: 5px 5px; margin: 3px;">
        <h3>{{firma.name}}</h3>
            {{firma.fa}} - {{firma.fi}} <strong>&nbsp;&nbsp;&nbsp;{{firma.client}}</strong>
    </md-card>`
})
export class FirmaComponent {
    @Input() firma;
}
