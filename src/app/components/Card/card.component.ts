import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-card',
    standalone: false,
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() backgroundColor: string = '#FFE6E6';

}
