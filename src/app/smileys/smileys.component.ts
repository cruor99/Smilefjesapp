import {Component, OnInit} from '@angular/core'
import { NavController } from 'ionic-angular'
import { DetailsPage } from '../../pages/details/details'
import { SmileysService } from './smileys.service'

import { Smileys } from './smileys'
@Component({
    selector: 'smilelist',
    templateUrl: './smileys.component.html',
    providers: [SmileysService]
})
export class SmileysComponent implements OnInit {
    smileys: Smileys[];
    selectedsmiley: Smileys

    constructor(private smileysService: SmileysService, public navCtrl: NavController){
    }

    ngOnInit(){
        this.getSmileys("");
    }

    getSmileys(query: any){
        let val: string
        if (query == ""){
            val = query
        } else {
            val = query.target.value
        }
        this.smileysService.getSmileys(val)
            .subscribe(
                smileys => this.smileys = smileys);
    }

    onSelect(smiley: Smileys): void {
        console.log(smiley)
        this.selectedsmiley = smiley;
        this.navCtrl.push(DetailsPage, {smiley: smiley});
    }
}
