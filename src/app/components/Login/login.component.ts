import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm!: FormGroup;
    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            this.router.navigate(['/home']);
            return;
        }
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        
        if (this.loginForm.valid) {
            const { email } = this.loginForm.value;
            localStorage.setItem('loggedInUser', JSON.stringify({ email }));
            this.router.navigate(['home']);
        }
    }
}