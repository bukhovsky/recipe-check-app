import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeCheckComponent } from './recipe-check/recipe-check/recipe-check.component';
import { InputAreaComponent } from './recipe-check/input-area/input-area.component';
import { ResultAreaComponent } from './recipe-check/result-area/result-area.component';
import { AboutComponent } from './about/about/about.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeCheckComponent,
    InputAreaComponent,
    ResultAreaComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
