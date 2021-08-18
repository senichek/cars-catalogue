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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddFavoriteComponent } from './components/add-favorite/add-favorite.component';
import { RouterModule } from '@angular/router';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    TopBarComponent,
    FilterComponent,
    FilteringPipe,
    AddFavoriteComponent,
    FavoritesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: CarsListComponent },
      { path: 'favorites', component: FavoritesListComponent }
    ])
  ],
  providers: [FilteringPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
