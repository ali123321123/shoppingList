import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes:Recipe[] = [
  new Recipe('A Test recipe','This is simply a test',
  'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=700,636'),
  new Recipe('An other Test recipe','This is simply a test',
  'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2240,c_limit/0621-Sheet-Pan-Gnocchi.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }
  onrecipeSelected(recipe:Recipe){
    console.log(recipe)
this.recipeWasSelected.emit(recipe);
  }
}
