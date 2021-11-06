import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output  } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
@ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
@Output() IngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    console.log(this.nameInputRef.nativeElement.value);
    console.log( this.amountInputRef.nativeElement.value);
    
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value)
      this.IngredientAdded.emit(newIngredient);
  }

}
