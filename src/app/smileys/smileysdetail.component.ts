import {Component, Input} from '@angular/core'
import { Smileys } from './smileys'

@Component({
    selector: 'smiledetails',
    templateUrl: './smileysdetail.component.html'
})
export class SmileysDetailComponent {
    @Input() thingy: Smileys;
}
