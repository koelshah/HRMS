import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Data } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
   name: string;
    password: any;
    repassword: any;
    email: any;
    ArrayData: Array<any> = [];
   id: number;
     hero: Data = {
        id: '',
        name: '',
        email: '',
        password: '',
        repassword: ''
      };
       constructor() {}
       ngOnInit() {
         console.log('kk');
       }
      onRegister()  {
        console.log('kajal');
        let id = 0;
        const  user = {id: 0, name: this.hero.name, email: this.hero.email, password: this.hero.password,
        repassword: this.hero.repassword};
        // this.ArrayData.push(user);
        // localStorage.setItem('arraydata', JSON.stringify(this.ArrayData));
       this.ArrayData = JSON.parse(localStorage.getItem('arraydata'));
     if (this.ArrayData.length === 0 || this.ArrayData === null) {
        this.ArrayData = [];
        id = 0;
        } else {
        id = this.ArrayData[this.ArrayData.length - 1].id;
        console.log(id);
        }
       id++;
       user.id = id ;
       console.log(user.id);
       this.ArrayData.push(user);
       localStorage.setItem('arraydata', JSON.stringify(this.ArrayData));
    }
}
