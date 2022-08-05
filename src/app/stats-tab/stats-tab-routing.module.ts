import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsTabPage } from './stats-tab.page';

const routes: Routes = [
  {
    path: '',
    component: StatsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsTabPageRoutingModule {}
