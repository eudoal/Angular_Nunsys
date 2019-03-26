import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocionListComponent } from './pocion-list/pocion-list.component';
import { PocionDetailComponent } from './pocion-detail/pocion-detail.component';

const routes: Routes = [
  {path:'pociones', component: PocionListComponent, pathMatch:'full'},
  {path:'pocion/:id', component: PocionDetailComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocionRoutingModule { }
