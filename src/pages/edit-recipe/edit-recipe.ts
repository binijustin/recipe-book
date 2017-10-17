import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {
  mode = 'New';
  diff = ['Easy','Medium', 'Hard'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mode = this.navParams.get('mode');
  }





}
