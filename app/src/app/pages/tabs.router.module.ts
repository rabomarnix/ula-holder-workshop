import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-creds',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./my-credentials/my-credentials.module').then(m => m.MyCredentialsModule)
          }
        ]
      },
      {
        path: 'scan-qr',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./scan-qr/scan-qr.module').then(m => m.ScanQrPageModule)
          }
        ]
      },
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./transactions/transactions.module').then(m => m.TransactionsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/my-creds',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/my-creds',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
