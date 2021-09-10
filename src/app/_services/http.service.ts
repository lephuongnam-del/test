import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    public sendToServer(method: string, api: string, bd?: any, hd?: any, pr?: any) {
        let url = environment.endPoint + api;
        let ret: Observable<any>;
        let body = bd || {};
        let header = hd || { 'Content-Type': 'application/json' };

        if (pr) Object.keys(pr).forEach(element => {
            if (pr[element] === '' || typeof (pr[element]) == 'undefined' || pr[element] == null) {
                delete pr[element];
            }
        });
        const params = new HttpParams({ fromObject: pr });
        console.log(url)
        switch (method) {
            case 'GET':
                ret = this.http.get(url, {
                    headers: header,
                    observe: 'body',
                    params: params
                });
                break;
            case 'POST':
                ret = this.http.post(url, body, {
                    headers: header,
                    observe: 'body',
                    params: params
                });
                break;
            default:
                break;
        }
        return new Observable(obs => {
            ret.subscribe(res => {
                obs.next(res);
                obs.complete();
            }, (err) => {
                obs.error(err);
            });
        })
    }
}