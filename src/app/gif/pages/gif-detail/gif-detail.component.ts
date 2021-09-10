import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataService } from '../../_services/data.service';
@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit {

  id = '';

  id$ = this.route.params.pipe(map(params => params.id));
  gif$ = this.id$.pipe(
    switchMap(id => {
      this.id = id;
      return  this.dataService.getGifById(id,environment.API_KEY).pipe(tap(x=> console.log('xxxxxxxx',x)))
    })
  )

  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
  }


}
