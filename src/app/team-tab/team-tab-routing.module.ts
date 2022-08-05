import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamTabPage } from './team-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TeamTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamTabPageRoutingModule {}
