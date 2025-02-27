import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module.tns';
import { AppComponent } from '@src/app/app.component';
import { LuthierComponent } from '@src/app/luthier/luthier.component';
import { LuthierListComponent } from '@src/app/luthier/luthier-list/luthier-list.component';
import { DefaultLayoutComponent } from '@src/app/admin/default-layout/default-layout.component';
import { DashboardComponent } from '@src/app/admin/views/dashboard/dashboard.component';
import { InstrumentComponent } from '@src/app/admin/views/instrument/instrument.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    LuthierComponent,
    LuthierListComponent,
    DefaultLayoutComponent,
    DashboardComponent,
    InstrumentComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
