import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
// import { Data } from '../data';
import { Data } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router) {}
    email: string;
    password: string;
    ArrayData: Array<any> = [];
    msg: string;
    ngOnInit() {}

    onLoggedin() {
        let i;
        localStorage.setItem('isLoggedin', 'true');
        this.ArrayData = JSON.parse(localStorage.getItem('arraydata'));
        for (i = 0; i < this.ArrayData.length; i++) {
            console.log(i);
            console.log(this.email);
            console.log(this.password);
        if (this.ArrayData[i].email === this.email && this.ArrayData[i].password === this.password) {
            const logInData = localStorage.setItem('logedIn', 'true');
            this.msg = 'successfully Log in';
            this.router.navigate(['/dashboard']);
            break;
        } else {
            console.log('login failed!');
            this.msg = 'please enter correct username and password!';
        }}
    }
}
