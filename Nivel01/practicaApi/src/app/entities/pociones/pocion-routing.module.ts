import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocionlistComponent } from './pocionlist/pocionlist.component';
import { PociondetailComponent } from './pociondetail/pociondetail.component';

const routes: Routes = [
  {path:'pociones',component:PocionlistComponent,pathMatch:'full'},
  {path:'pocion/:id', component:PociondetailComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocionRoutingModule { }
