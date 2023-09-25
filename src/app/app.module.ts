import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HandOptionComponent } from './hand-option/hand-option.component';
import { ScoreBoxComponent } from './score-box/score-box.component';
import { PlayAreaComponent } from './play-area/play-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HandOptionComponent,
    ScoreBoxComponent,
    PlayAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
