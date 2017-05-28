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
    smileys;
    selectedsmiley: Smileys
    previousquery: string;

    constructor(private smileysService: SmileysService, public navCtrl: NavController){
    }

    ngOnInit(){
        this.getSmileys("");
    }

    getPreviousSmileyPage(pagenum: string): void{
        let finalnum = Number(pagenum)-1;
        if (this.previousquery.indexOf("&page=") >= 0){
            var querystring = this.previousquery.replace(/\&page\=[0-9]+/, '&page='+finalnum.toString())
        } else{
            var querystring = this.previousquery+"&page="+finalnum.toString()
        }

        this.getSmileys(querystring);
    }

    getNextSmileyPage(pagenum: string): void{
        let finalnum = Number(pagenum)+1;
        if (this.previousquery.indexOf("&page=") >= 0){
            var querystring = this.previousquery.replace(/\&page\=[0-9]+/, '&page='+finalnum.toString())
        } else{
            var querystring = this.previousquery+"&page="+finalnum.toString()
        }

        this.getSmileys(querystring)
    }

    getSmileys(query: any){
        let val: string
        try {
            if (query == ""){
                val = query
            } else if(query.indexOf("&page") >=0 ){
                val = query
            } else {
                val = query.target.value
            }
        } catch(e){
            val = query.target.value
        }
        this.previousquery = val;
        this.smileysService.getSmileys(val)
            .subscribe(
                smileys => this.smileys = smileys);
    }

    onSelect(smiley: Smileys): void {
        this.selectedsmiley = smiley;
        this.navCtrl.push(DetailsPage, {smiley: smiley});
    }
}
