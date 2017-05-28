import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    gotoDetails(): void{
        console.log("Entered Details")
        this.navCtrl.push(AboutPage);
    }

}
