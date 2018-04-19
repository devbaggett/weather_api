import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
	{ path: 'sanjose', component: SanjoseComponent},
	{ path: 'seattle', component: SeattleComponent},
	{ path: '', pathMatch: 'full', redirectTo: '/sanjose' },
  	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
