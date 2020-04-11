import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'show',
        component: DashboardPage,
        children: [
          {
            path: 'folder/Add',
            loadChildren: () => import('../../pages/add-event/add-event.module').then(m => m.AddEventPagePageModule),
            outlet: 'secondary'
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
