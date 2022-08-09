import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardTabPage } from './dashboard-tab.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardTabPageRoutingModule {}
