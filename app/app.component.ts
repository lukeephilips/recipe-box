import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Granny's Recipe Box</h1>

    <h2>{{testRecipe.title}}</h2>
    <p>{{testRecipe.directions}}</p>
    <p>{{testRecipe.ingredients}}</p>

  </div>
  `
})

export class AppComponent {
  testRecipe = new Recipe('toast', 'put bread in toaster', ['a','b']);
}

export class Recipe {
  title: string;
  directions: string;
  ingredients: string[];

  constructor(titleP: string, directionsP: string, ingredientsP: string[]) {
    this.title = titleP;
    this.directions = directionsP;
    this.ingredients = ingredientsP;
  }

}
