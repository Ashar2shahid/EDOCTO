import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotPage } from './bot';

@NgModule({
  declarations: [
    BotPage,
  ],
  imports: [
    IonicPageModule.forChild(BotPage),
  ],
})
export class BotPageModule {}
