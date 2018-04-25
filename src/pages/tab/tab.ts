import { Component } from "@angular/core";
import { ActivityPage } from "../activity/activity";
import { AddPhotoPage } from "../add-photo/add-photo";
import { NutritionPage } from "../nutrition/nutrition";
import { HomePage } from "../home/home";
import { BotPage } from "../bot/bot";

@Component({
    selector:'tab-page',
    templateUrl:'tab.html'
})
export class TabPage{
    activity = ActivityPage;
    addPhoto = AddPhotoPage;
    bot = BotPage
    nutrition = NutritionPage;
    home = HomePage;
}