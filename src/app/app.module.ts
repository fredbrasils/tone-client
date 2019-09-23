import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LuthierComponent } from '@src/app/luthier/luthier.component';
import { LuthierListComponent } from '@src/app/luthier/luthier-list/luthier-list.component';
import { DefaultLayoutComponent } from '@src/app/admin/default-layout/default-layout.component';
import { DashboardComponent } from '@src/app/admin/views/dashboard/dashboard.component';
import { InstrumentComponent } from '@src/app/admin/views/instrument/instrument.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LuthierComponent,
    LuthierListComponent,
    DefaultLayoutComponent,
    DashboardComponent,
    InstrumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
