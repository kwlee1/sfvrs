import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component'
import { ResultComponent } from './result/result.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: SelectComponent },
    { path: 'result', component: ResultComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
