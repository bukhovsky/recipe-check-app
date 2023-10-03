import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCheckComponent } from './recipe-check/recipe-check/recipe-check.component';
import { AboutComponent } from './about/about/about.component';

const routes: Routes = [
  {path: '', component: RecipeCheckComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
