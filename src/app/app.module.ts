import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ActionSheetController, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActivityPage } from '../pages/activity/activity';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { AddPhotoPage } from '../pages/add-photo/add-photo';
import { ProfilePage } from '../pages/profile/profile';
import { TabPage } from '../pages/tab/tab';
import { NotificationPage } from '../pages/notification/notification';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';
import { PlansPage } from '../pages/plans/plans';
import { AccountDetailPage } from '../pages/account-detail/account-detail';
import { Camera } from '@ionic-native/camera';
import { HttpModule, Http } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment';
import { GoogleCloudVisionServiceProvider } from '../providers/google-cloud-vision-service/google-cloud-vision-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BotPage } from '../pages/bot/bot';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActivityPage,
    NutritionPage,
    AddPhotoPage,
    ProfilePage,
    TabPage,
    NotificationPage,
    LeaderboardPage,
    PlansPage,
    AccountDetailPage,
    BotPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
   AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActivityPage,
    NutritionPage,
    AddPhotoPage,
    ProfilePage,
    TabPage,
    NotificationPage,
    LeaderboardPage,
    PlansPage,
    AccountDetailPage,
    BotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HttpClientModule,
    HttpClient,
    GoogleCloudVisionServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
