import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'dashboard',
        children:[
          {
            path:'',
            loadChildren:()=> import('../dashboard-tab/dashboard-tab.module').then(m=>m.DashboardTabPageModule)
          }
        ]
      },
      {
        path:'stats',
        children:[
          {
            path:'',
            loadChildren:()=> import('../stats-tab/stats-tab.module').then(m=>m.StatsTabPageModule)
          }
        ]
      },
      {
        path:'team',
        children:[
          {
            path:'',
            loadChildren:()=> import('../team-tab/team-tab.module').then(m=>m.TeamTabPageModule)
          }
        ]
      },
      {
        path:'leaderboard',
        children:[
          {
            path:'',
            loadChildren:()=> import('../leaderboard-tab/leaderboard-tab.module').then(m=>m.LeaderboardTabPageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren:()=> import('../profile-tab/profile-tab.module').then(m=>m.ProfileTabPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'/tabs/dashboard',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
