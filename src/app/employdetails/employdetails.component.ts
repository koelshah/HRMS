import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employdetails',
  templateUrl: './employdetails.component.html',
  styleUrls: ['./employdetails.component.css']
})
export class EmploydetailsComponent implements OnInit {
  id: number;
  Eid: number;
  Ename: string;
  Eemail: string;
  Emnumber: string;
  Edob: number;
  Ebg: string;
  Ejdate: any;
  Ephoto: string;
  Eworktype: string;
  model: any;
  Egender: any;

employeArray: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }
  onClickbtn()  {
    console.log('kajal');
    let id = 0;
    const  employe = {id: 0, Eid: this.Eid, Ename: this.Ename, Eemail: this.Eemail, Emnumber: this.Emnumber,
      Edob: this.Edob, model: this.model, Egender: this.Egender, Ephoto : this.Ephoto, Ebg: this.Ebg,
       Ejdate: this.Ejdate , Eworktype: this.Eworktype };
     if ((localStorage.getItem('employeArray')) === null) {
    this.employeArray = [];
    id = 0;
   } else {
        this.employeArray = JSON.parse(localStorage.getItem('employeArray'));
         id = this.employeArray[this.employeArray.length - 1].id;
      }
      id++ ;
      employe.id = id ;
      this.employeArray.push(employe);
      localStorage.setItem('employeArray', JSON.stringify(this.employeArray));
}
}
