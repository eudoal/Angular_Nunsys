import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocionListComponent } from './pocion-list/pocion-list.component';

const routes: Routes = [
  {path:'pociones', component: PocionListComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocionRoutingModule { }
