import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  constructor(public navCtrl: NavController) {
  }

  NewRecipe(){
    this.navCtrl.push('EditRecipePage', {mode:'New'});
  }

  // openRecipe(){
  //   this.navCtrl.push('RecipePage');
  // }

  // goToShoppingList(){
  //  this.navCtrl.parent.select(0);
  // } 
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RecipeListPage');
  // }

}
