import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoundProgressModule } from 'angular-svg-round-progressbar';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})

@NgModule({
  imports: [RoundProgressModule],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePage {


  current: number = 27;
  max: number = 50;
  stroke: number = 15;
  radius: number = 90;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = 'rgb(253, 80, 28)';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 1;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 12;
  rate:number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

   
  }
}
