import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuthierListComponent } from './luthier/luthier-list/luthier-list.component';


export const routes: Routes = [
  {
      path: '',
      redirectTo: '/luthier-list',
      pathMatch: 'full',
  },
  {
      path: 'luthier-list',
      component: LuthierListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
