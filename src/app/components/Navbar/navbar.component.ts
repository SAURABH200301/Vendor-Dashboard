import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(private router: Router){}
    public NavItemsAbove = [
        {
            name: 'Home',
            icon: '<i class="bi bi-house"></i>',
            route: '/',
            active: true,
        },
        {
            name: 'Statstics',
            icon: '<i class="bi bi-file-earmark-bar-graph"></i>',
            route: '/statistics',
            active: false,
        },
        {
            name: 'Stack',
            icon: '<i class="bi bi-stack"></i>',
            route: '/stacks',
            active: false,
        },
        {
            name: 'Checkboxes',
            icon: '<i class="bi bi-ui-checks-grid"></i>',
            route: '/checkboxes',
            active: false,
        },
        {
            name: 'Charts',
            icon: '<i class="bi bi-pie-chart"></i>',
            route: '/charts',
            active: false,
        },
        {
            name: 'people',
            icon: '<i class="bi bi-people-fill"></i>',
            route: '/people',
            active: false,
        },
    ];

    public NavItemsBelow = [
        {
            name: 'Settings',
            icon: '<i class="bi bi-gear"></i>',
            route: '/settings',
            active: false,
        },
    ];
    logoutUser=()=>{
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['/login']);
    }
}
