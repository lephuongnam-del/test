import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  search(searchItem:string){
    console.log(searchItem)
    if(searchItem !== ''){
      this.dataService.searchGif(10,0,environment.API_KEY,searchItem)
    }else
    {
      this.dataService.getTrendingGifs(20, 0, environment.API_KEY)
    }
  }

} 
