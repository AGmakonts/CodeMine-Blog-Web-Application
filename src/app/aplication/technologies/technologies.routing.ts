import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from "localize-router";
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  { path:'technologies', children:[
    { path: '', redirectTo: "/offer", pathMatch:"full" },
    { path: 'angular', component:AngularComponent}
  ]}
];

@NgModule({
  imports: [
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
