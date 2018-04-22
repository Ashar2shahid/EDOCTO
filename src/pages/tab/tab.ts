import { Component } from "@angular/core";
import { ActivityPage } from "../activity/activity";
import { AddPhotoPage } from "../add-photo/add-photo";
import { ProfilePage } from "../profile/profile";
import { NutritionPage } from "../nutrition/nutrition";
import { HomePage } from "../home/home";

@Component({
    selector:'tab-page',
    templateUrl:'tab.html'
})
export class TabPage{
    activity = ActivityPage;
    addPhoto = AddPhotoPage;
    profile = ProfilePage;
    nutrition = NutritionPage;
    home = HomePage;
}