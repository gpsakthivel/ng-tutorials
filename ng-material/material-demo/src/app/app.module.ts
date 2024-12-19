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
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CardsComponent } from './components/cards/cards.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxRadioButtonComponent } from './components/checkbox-radio-button/checkbox-radio-button.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {CustomSnackbarComponent, SnackbarComponent} from './components/snackbar/snackbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DialogExampleComponent } from './components/dialog/dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypographyComponent,
    ProgressSpinnerComponent,
    IconComponent,
    BadgeComponent,
    ButtonToggleComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxRadioButtonComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackbarComponent,
    DialogComponent,
    DataTableComponent,
    VirtualScrollingComponent,
    DialogExampleComponent
  ],
  entryComponents: [CustomSnackbarComponent, DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
