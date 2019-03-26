import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RazalistComponent } from './razalist/razalist.component';
import { RazadetailComponent } from './razadetail/razadetail.component';

const routes: Routes = [
  {path:'razas',component:RazalistComponent, pathMatch:'full'},
  {path:'razas/:id',component:RazadetailComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RazasRoutingModule { }
