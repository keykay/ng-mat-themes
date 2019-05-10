import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewExampleDialogComponent } from './components/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialogComponent,
    CardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  entryComponents: [
    DialogOverviewExampleDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
