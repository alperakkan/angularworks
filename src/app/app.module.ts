import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedComponent } from './shared/shared.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormComponent } from './form/form.component';
import { BodyComponent } from './body/body.component';


const appRoutes: Routes = [
  { path: '', component: HeaderComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    SharedComponent,
    ShoppingListComponent,
    FormComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
