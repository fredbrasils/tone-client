import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LuthierComponent } from '@src/app/luthier/luthier.component';
import { LuthierListComponent } from '@src/app/luthier/luthier-list/luthier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LuthierComponent,
    LuthierListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
