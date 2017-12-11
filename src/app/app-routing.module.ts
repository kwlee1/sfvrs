import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: SelectComponent },
    { path:'about', pathMatch: 'full', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
