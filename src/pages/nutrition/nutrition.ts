import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'


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
  items:any[]=[];
  totalWeight:number;
  totalNutri:any={};
  foodName:string="";
  calories:string;
  fat:string;
  protien:string;
  carbs:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutritionPage');
    this.items = this.global.global_items
  }
  ngOnInit() {
      /* this.nutri = nutrition['name'];
      this.totalWeight = foodData['totalWeight'];
      this.totalNutri = foodData['totalNutrients'] */
    }

}
