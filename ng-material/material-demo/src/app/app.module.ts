import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { IconComponent } from './components/icon/icon.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypographyComponent,
    ProgressSpinnerComponent,
    IconComponent,
    BadgeComponent,
    ButtonToggleComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
