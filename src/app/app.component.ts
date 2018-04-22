import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabPage } from '../pages/tab/tab';
import { ProfilePage } from '../pages/profile/profile';
import { AccountDetailPage } from '../pages/account-detail/account-detail';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';
import { PlansPage } from '../pages/plans/plans';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabPage;
    
  accountDetail = AccountDetailPage;
  leaderboard = LeaderboardPage;
  plans = PlansPage;
  home = TabPage;

  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar,
             splashScreen: SplashScreen,
            private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  
  onAccountDetail(page:any){
      this.nav.setRoot(page);
      this.menuCtrl.close();
  }

  onLeaderboard(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onPlans(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onHome(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

