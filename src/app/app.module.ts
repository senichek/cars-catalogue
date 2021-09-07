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
import { AddNewCarComponent } from './components/add-new-car/add-new-car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    TopBarComponent,
    FilterComponent,
    FilteringPipe,
    AddFavoriteComponent,
    FavoritesListComponent,
    AddNewCarComponent,
    AboutComponent,
    NewsComponent,
    LoginComponent,
    RegisterComponent
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
      { path: 'favorites', component: FavoritesListComponent },
      {path: 'about', component: AboutComponent},
      {path: 'news', component: NewsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]),
    NgbModule
  ],
  providers: [FilteringPipe, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}, CarsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
