import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaderboardTabPageRoutingModule } from './leaderboard-tab-routing.module';

import { LeaderboardTabPage } from './leaderboard-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaderboardTabPageRoutingModule
  ],
  declarations: [LeaderboardTabPage]
})
export class LeaderboardTabPageModule {}
