import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import nutrition from '../../data/nutrition';
import foodData from '../../data/foodData';

/**
 * Generated class for the NutritionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html',
})
export class NutritionPage implements OnInit {
  nutri:any={};
  
  totalWeight:number;
  totalNutri:any={};
  foodName:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutritionPage');
  }
  ngOnInit() {
      /* this.nutri = nutrition['name'];
      this.totalWeight = foodData['totalWeight'];
      this.totalNutri = foodData['totalNutrients'] */
      this.foodName = this.navParams.data['name']
      this.totalWeight = this.navParams.data['predictions']['totalWeight']
      this.totalNutri = this.navParams.data['predictions']['totalNutrients']
      console.log(this.nutri);
    }

}
