import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileformComponent } from './profileform/profileform.component';

const routes: Routes = [{path:"" ,component:ProfileformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const
RoutingComponent = [ProfileformComponent];