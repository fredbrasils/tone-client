import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { LuthierComponent } from '@src/app/luthier/luthier.component';
import { LuthierListComponent } from '@src/app/luthier/luthier-list/luthier-list.component';

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
  {
    path: 'luthier-detail/:id',
    component: LuthierComponent,
  }
];


@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
