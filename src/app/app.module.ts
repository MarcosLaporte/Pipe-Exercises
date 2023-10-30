import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { LongTextPipe } from './pipes/long-text.pipe';
import { CharMaskPipe } from './pipes/char-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TimePassedPipe,
    LongTextPipe,
    CharMaskPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
