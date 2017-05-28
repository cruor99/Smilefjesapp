import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Smileys } from '../../app/smileys/smileys'
@Component({
    selector: 'page-details',
    templateUrl: 'details.html'
})
export class DetailsPage {
    smiley: Smileys;

    constructor(public navCtrl: NavController, private navParams: NavParams){
        this.smiley = navParams.get('smiley')
    }
}
