import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular'; 
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GoogleCloudVisionServiceProvider } from '../../providers/google-cloud-vision-service/google-cloud-vision-service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-add-photo',
  templateUrl: 'add-photo.html',
})
export class AddPhotoPage {


  //items: AngularFireList<any[]>;
   items :any[]=[];

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private camera: Camera,
             private toastCtrl : ToastController,
             private vision: GoogleCloudVisionServiceProvider,
             private db: AngularFireDatabase,
             private alert: AlertController) {
           
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPhotoPage');
  }
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log(this.vision.getLabels(imageData))
      this.vision.getLabels(imageData).subscribe((result) => {
       this.saveResults(imageData, result);
      console.log(result);
     // this.showAlert(result.json().responses);
      }, err => {
        this.showAlert(err);
     });
    }, err => {
      this.showAlert(err);
    });
  }

  saveResults(imageData, results) {
//      console.log(imageData);
      console.log("here is the result");
      console.log(results);
    this.items.push({ imageData: imageData, results: JSON.parse(results)})
    console.log(JSON.parse(results));
    //this.showAlert(this.items[0]); 
    this.toastCtrl.create({
      message:this.items[0],
      duration:3000
      
    }).present();
    //    .then(_ => { })
      //  .catch(err => { this.showAlert(err) });
  }

  showAlert(message) {
    let alert = this.alert.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}



