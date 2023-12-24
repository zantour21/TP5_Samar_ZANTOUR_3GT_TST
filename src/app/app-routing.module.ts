import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ActionListComponent } from './action-list/action-list.component';
import { ActionComponent } from './action/action.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'actions', component: ActionListComponent },
  { path: 'add-action', component: ActionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }