import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayAreaComponent } from './play-area/play-area.component';
import { HistoryListComponent } from './history-list/history-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/play', pathMatch: 'full' },
  { path: 'play', component: PlayAreaComponent },
  { path: 'history', component: HistoryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
