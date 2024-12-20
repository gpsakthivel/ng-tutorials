import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        ChildComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
