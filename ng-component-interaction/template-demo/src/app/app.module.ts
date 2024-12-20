import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BindingComponent } from './components/binding/binding.component';
import { SplitTwoWayBindingComponent } from './components/split-two-way-binding/split-two-way-binding.component';
import { GetterSetterComponent } from './components/getter-setter/getter-setter.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    SplitTwoWayBindingComponent,
    GetterSetterComponent,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
