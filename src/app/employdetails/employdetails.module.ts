import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from './../shared';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EmploydetailsRoutingModule } from '../employdetails/employdetails-routing.module';
import { EmploydetailsComponent } from './employdetails.component';


@NgModule({
  declarations: [EmploydetailsComponent],
  imports: [
    CommonModule, TranslateModule, FormsModule, EmploydetailsRoutingModule, NgbModule, PageHeaderModule]
})
export class EmploydetailsModule { }

