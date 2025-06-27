import { Component, Input } from "@angular/core";
@Component({
    selector: "app-badge",
    templateUrl: "./badge.component.html",
    styleUrls: ["./badge.component.scss"],
    standalone: false,
})
export class BadgeComponent {
    @Input() label: string = "Default Badge";
    @Input() textColor: string = "#000000";
    @Input() backgroundColor: string = "#ADD8E6";
    @Input() showDot: boolean = false;


}