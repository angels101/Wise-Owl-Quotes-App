import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {ListComponent} from './list/list.component'



const routes: Routes = [
  { path: 'nav', component: NavComponent},
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
