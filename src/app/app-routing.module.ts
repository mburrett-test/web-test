import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';
import {StartComponent} from './components/start/start.component';

const routes: Routes = [
  {path: '', redirectTo: '/start-page', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
