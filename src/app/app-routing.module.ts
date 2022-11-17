import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedComponent } from './shared/shared.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'


const routes: Routes = [
  { path: '', redirectTo: '/recipes' },
  { path: 'header', component: HeaderComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shared', component: SharedComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
