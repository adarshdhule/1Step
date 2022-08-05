import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsTabPageRoutingModule } from './stats-tab-routing.module';

import { StatsTabPage } from './stats-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsTabPageRoutingModule
  ],
  declarations: [StatsTabPage]
})
export class StatsTabPageModule {}
