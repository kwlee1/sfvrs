import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SelectComponent } from './select/select.component';
import { ResultComponent } from './result/result.component';
import { CharserviceService } from './charservice.service'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SelectComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CharserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
