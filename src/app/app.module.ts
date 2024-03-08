import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router'
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmListComponent } from './pages/films/film-list/film-list.component';
import { FilmEditComponent } from './pages/films/film-edit/film-edit.component';
import { FilmItemComponent } from './pages/films/film-list/film-item/film-item.component';

import { ProductsComponent } from './pages/products/products.component';
import { ProductEditComponent } from './pages/products/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmEditComponent,
    FilmItemComponent,
    ProductsComponent,
    ProductEditComponent,
    NavbarComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterOutlet,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
