import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilteringPipe } from './pipes/filtering.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    TopBarComponent,
    FilterComponent,
    FilteringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FilteringPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
