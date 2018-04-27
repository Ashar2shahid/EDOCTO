import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environment';
import { AlertInputOptions } from 'ionic-angular/components/alert/alert-options';
import { AlertController } from 'ionic-angular';

@Injectable()
export class GoogleCloudVisionServiceProvider {

  constructor(public httpClient: HttpClient,
              public alertCtrl: AlertController,
              public http: Http) {
    console.log('Hello GoogleCloudVisionServiceProvider Provider');
  }

   

  getLabels(base64Image) {
/*     var data;
    
    var request = new XMLHttpRequest();

		request.open("POST", "https://ml.googleapis.com/v1/projects/Edocoto/models/flowers/versions/v1:predict?access_token=ya29.GluYBSTmTHYJkMs0xVF3GtWEUsk7kSmd2Ry3njBo-_TjfZGROlQN0Ivq8h1KAHUMmBJZFuIQC29pMc27bnu81pexMJa7fT5SyX3WllfgLYCLZrIyA2oyCOcTifDl", true);
		request.setRequestHeader("content-Type", "application/json");
		request.send(JSON.stringify({"instances": [{ "b64": base64Image } ] })); 
    request.onreadystatechange = function() {
  				if (request.readyState == 4 && request.status == 200) {
            data = "hello";
  				console.log(request.responseText);
          }
          	
        };
        this.showAlert(data); */

    const body = {image : base64Image}
    const predictions = this.http.post('http://35.187.245.40:5000/postmethod', body);
    console.log('in provider')
    console.log(predictions)
    return predictions;
    //return data;  
  }

  getNutri(name:string) {
    const body = {food : name}

        const predictions = this.http.post('http://35.187.245.40:5000/nutritionmethod', body);
        console.log('in provider  '+name)
        console.log(predictions)
        return predictions;
  }


    showAlert(message) {
      let alert = this.alertCtrl.create({
        title: 'from cloud vision',
        subTitle: message,
        buttons: ['OK']
      });
      alert.present();
    }
    //https://vision.googleapis.com/v1/images:annotate?key=
//https://ml.googleapis.com/v1/projects/Edocoto/models/flowers/versions/v1:predict
}
