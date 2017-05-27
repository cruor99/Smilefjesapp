import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Smileys } from './smileys'

@Injectable()
export class SmileysService{

    private smileysUrl = 'http://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?query='

    constructor(private http: Http){}

    getSmileys(query: string): Observable<Smileys[]>{
        return this.http.get(this.smileysUrl + query)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response){
        let body = res.json();
        for (let entry of body["entries"]){
            let dato = entry.dato.match(/.{1,2}/g)
            let newdato = new Date(dato[2]+dato[3], Number(dato[1])-1, dato[0]).toDateString();
            entry.dato = newdato
        }
        return body["entries"] || { };
    }

    private handleError(error: Response | any){
        let errMsg: string;
        if (error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
