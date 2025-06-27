import { Component, OnInit } from "@angular/core";
import { CardComponent } from "../Card/card.component";


@Component({
    selector: 'app-user-greet',
    standalone: false,       
    // imports: [CardComponent],
    templateUrl: './user-greet.component.html',
    styleUrls: ['./user-greet.component.scss'],
})
export class UserGreetComponent implements OnInit {
    userName:string='John'
    ngOnInit(): void {
        const user:string= localStorage.getItem('loggedInUser')||'';
        const parsedUser=JSON.parse(user);
        this.userName= parsedUser.email.split('@')[0];
    }
}
