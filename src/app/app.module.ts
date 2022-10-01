import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThreeComponent } from './three/three.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThreeComponent,
    ConclusionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
