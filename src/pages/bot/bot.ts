import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
 
// this variable is not working
declare var ApiAIPromises: any;

@IonicPage()
@Component({
  selector: 'page-bot',
  templateUrl: 'bot.html',
})
export class BotPage {
    answer;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public platform: Platform, 
              public ngZone: NgZone) {

                platform.ready().then(() => {
                  console.log('platform is ready')

                  ApiAIPromises.init({
                    clientAccessToken: "e0ecd69c3e9c46c89c054fd14767a6e5"
                  })
                  .then((result) =>  console.log(result))
                  
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotPage');
  }
  showAlert(msg:string) {

  }

  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.answer = speech;
       });
    })
  }
}
