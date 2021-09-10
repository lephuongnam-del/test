import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { API } from "src/app/_share/api/api.config";
import { HttpService } from "src/app/_services/http.service";
import { BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    gifs = new BehaviorSubject<any>([]);
 
    constructor(private http: HttpService) { }

    // get list trending gifs
    getTrendingGifs(limit:number, offset:number,api_key:string) {
        return this.http.sendToServer('GET',API.GIF.TRENDING,null,null,{limit,offset,api_key})
        .subscribe((res:any) => {
            console.log('aaaaaaaaaaa',res)
            this.gifs.next(res.data)
        })
    }

    // get gif by id
    getGifById(id:string,api_key:string){
        return this.http.sendToServer('GET',API.GIF.GET_BY_ID(id),null,null,{api_key});
    }

    //get releted GIFS
    getRelatedGifs(ids:string,api_key:string,limit:number){
        return this.http.sendToServer('GET',API.GIF.RELATED_GIF,null,null,{limit,ids,api_key})
    }

    // filter gif
    searchGif(limit:number, offset:number, api_key:string, q:string){
        return this.http.sendToServer('GET',API.GIF.SEARCH,null,null,{limit,offset,api_key,q})
        .subscribe((res:any) => {
            this.gifs.next(res.data)
        })
    }



    getGif(){
      return   this.gifs.asObservable();
    }


}