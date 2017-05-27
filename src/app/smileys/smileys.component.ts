import {Component, OnInit} from '@angular/core'
import { SmileysService } from './smileys.service'

import { Smileys } from './smileys'
@Component({
    selector: 'smilelist',
    templateUrl: './smileys.component.html',
    providers: [SmileysService]
})
export class SmileysComponent implements OnInit {
    smileys: Smileys[];

    constructor(private smileysService: SmileysService){
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
}
