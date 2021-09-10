import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { environment } from "src/environments/environment";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss']
})
export class GifListComponent implements OnInit,OnDestroy {

  subcription:Subscription;
  gifs: any[] = [];
  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.getTrendingGifs(50, 0  , environment.API_KEY);

    this.subcription = this.dataService.getGif().subscribe((res:any) => {

        this.gifs = res;
    })
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}
