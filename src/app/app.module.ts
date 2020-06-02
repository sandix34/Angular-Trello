import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './shared/modules/core.module';
import { LayoutModule } from './shared/modules/layout.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DragDirective } from './shared/directives/drag.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragDirective
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
