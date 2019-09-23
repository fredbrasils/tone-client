import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuthierListComponent } from './luthier/luthier-list/luthier-list.component';
import { LuthierComponent } from './luthier/luthier.component';
import { DefaultLayoutComponent } from './admin/default-layout/default-layout.component';
import { InstrumentComponent } from './admin/views/instrument/instrument.component';
import { DashboardComponent } from './admin/views/dashboard/dashboard.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'admin',
      pathMatch: 'full',
  },
  {
      path: 'luthier-list',
      component: LuthierListComponent,
  },
  {
    path: 'luthier-detail/:id',
    component: LuthierComponent,
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    children: [
      { path: "", redirectTo: "instrument", pathMatch: "full" },
      { path: "instrument", component: InstrumentComponent },
      { path: "feature", component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
