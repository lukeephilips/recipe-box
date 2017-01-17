import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="center">Granny's Recipe Box</h1>
      <div *ngFor="let recipe of recipes" class=" recipe card">
        <div class="card-image">
          <img src={{recipe.image}}/>
          <span class="card-title">{{recipe.title}}</span>
        </div>
        <div class="card-content">
          <div class="col s6">
            <h4>Ingredients</h4>
            <ul>
              <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
            </ul>
          </div>
          <div class="col s6">
            <h4>Directions</h4>
            <ol>
              <li *ngFor="let direction of recipe.directions">{{direction}}</li>
            </ol>
          </div>
        </div>
      </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('toast', ['put bread in toaster','put butter on toast'], ['bread','butter'],'http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2013/06/Toast.jpg'),
    new Recipe('tea', ['boil water','put teabag in water'], ['teabag','water'],'http://kingofwallpapers.com/tea/tea-044.jpg'),
    new Recipe('orange slices', ['slice orange'], ['one orange'],'http://files.gamebanana.com/img/ico/sprays/4ff6e9ef24135.png'),
  ]
}

export class Recipe {

  constructor(public title: string, public directions: string[], public ingredients: string[], public image: string) { }
}
