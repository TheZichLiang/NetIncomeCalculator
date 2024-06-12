import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appComponent } from './app.component';
import { incomeComponent } from './income.component';
import { summaryComponent } from './summary.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
      appComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule
    ],
    providers: [],
    bootstrap: [appComponent]
  })
  export class AppModule {}
  