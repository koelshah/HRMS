import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployelistComponent } from './employelist.component';

const routes: Routes = [{path: '', component: EmployelistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployelistRoutingModule { }
