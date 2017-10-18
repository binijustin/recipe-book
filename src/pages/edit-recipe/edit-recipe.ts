import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  ngOnInit(): void {
    this.initializeForm();
  }
  mode = 'New';
  diff = ['Easy', 'Medium', 'Hard'];

  recipeForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public acSht: ActionSheetController,
    public alrtCtrl: AlertController,
    public toastCtrl: ToastController) {
    this.mode = this.navParams.get('mode');
  }



  private initializeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingredients': new FormArray([])
    });
  }


  OnSubmit() {
    console.log(this.recipeForm);
  }

  OpenActionSheet() {
    const actionSheet = this.acSht.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.CreateNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all ingredients',
          role: 'destructive',
          handler: () => {
            const fArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
            const len = fArray.length;
            if (len > 0) {
              for (let i = len - 1; i >= 0; i--) {
                fArray.removeAt(i);
              }

              const toast= this.toastCtrl.create({
                message:'All ingredients were deleted',
                duration:3000,
                position:'bottom'
              });
              toast.present();
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cance;'
        }
      ]
    })

    actionSheet.present();
  }

  private CreateNewIngredientAlert() {
    return this.alrtCtrl.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if (data.name.trim() == '' || data.name == null) {
              const toast= this.toastCtrl.create({
                message:'Please enter a valid value',
                duration:3000,
                position:'bottom'
              });
              toast.present();
            }
            else {
              (<FormArray>this.recipeForm.get('ingredients'))
                .push(new FormControl(data.name, Validators.required));

                const toast= this.toastCtrl.create({
                  message:'Item Added',
                  duration:3000,
                  position:'bottom'
                });
                toast.present();
            }
          }
        }
      ]
    });
  }



}
