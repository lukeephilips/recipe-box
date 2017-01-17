import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="center">Granny's Recipe Box</h1>
      <div *ngFor="let recipe of recipes" class="recipe card s6">
        <div class="card-image">
          <img (click)="viewRecipe(recipe)" src={{recipe.image}}/>
          <span class="card-title blue-text darken-4 center" >{{recipe.title}}</span>
        </div>
        <div class="card-content" *ngIf="selectedRecipe === recipe">
          <label for="edit-title">edit title</label>
          <input [(ngModel)]="recipe.title" id="edit-title">
            <div class="row">
              <div class="col s6">
                <h4>Ingredients</h4>
                <button (click)='addIngredient(recipe)'>Add Ingredient</button>
                <ul>
                  <li *ngFor="let ingredient of recipe.ingredients" (click)="editIngredient(ingredient)">{{ingredient.name}}</li>
                </ul>
                <div class="edit card s6" *ngIf="selectedIngredient">
                  <input [(ngModel)]="selectedIngredient.name">
                  <button (click)="closeIngredient()">Done</button>
                </div>
              </div>
            <div class="col s6">
              <h4>Directions</h4>
              <ol>
                <li *ngFor="let direction of recipe.directions">{{direction}}</li>
              </ol>
            </div>
          </div>
          <button (click)="closeRecipe()">Done</button>
        </div>
      </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('toast', ['put bread in toaster','put butter on toast'], [new Ingredient('bread'),new Ingredient('butter')],'http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2013/06/Toast.jpg'),
    new Recipe('tea', ['boil water','put teabag in water'], [new Ingredient('teabag'), new Ingredient ('water')],'http://kingofwallpapers.com/tea/tea-044.jpg'),
    new Recipe('orange slices', ['slice orange'], [new Ingredient('one orange')],'http://files.gamebanana.com/img/ico/sprays/4ff6e9ef24135.png'),
  ];

  selectedRecipe = null;
  selectedIngredient = null;

  viewRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  };
  closeRecipe(){
    this.selectedRecipe = null;
  };

  editIngredient(clickedIngredient){
    console.log(clickedIngredient);
    this.selectedIngredient = clickedIngredient;
  };
  closeIngredient(){
    this.selectedIngredient = null;
  };
  addIngredient(currentRecipe: Recipe) {
    console.log(currentRecipe)
    var newIngredient: string = prompt();
    currentRecipe.ingredients.push(new Ingredient(newIngredient));
  }
}

export class Recipe {

  constructor(public title: string, public directions: string[], public ingredients: Ingredient[], public image: string) { }
}
export class Ingredient {
  constructor(public name: string){}
}
