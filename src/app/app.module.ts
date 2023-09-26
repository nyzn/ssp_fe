import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HandOptionComponent } from './hand-option/hand-option.component';
import { ScoreBoxComponent } from './score-box/score-box.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { GameService } from 'src/shared/services/gameservice.service';
import { ReplayButtonComponent } from './replay-button/replay-button.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HandOptionComponent,
    ScoreBoxComponent,
    PlayAreaComponent,
    ReplayButtonComponent,
    HistoryListComponent,
    HistoryItemComponent,
    TabNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
