import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result.model';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from "../search-box/search-box.component";
import { SearchResultComponent } from "../search-result/search-result.component";

@Component({
    selector: 'app-youtube-search',
    standalone: true,
    templateUrl: './youtube-search.component.html',
    styleUrl: './youtube-search.component.css',
    imports: [CommonModule, SearchBoxComponent, SearchResultComponent]
})
export class YoutubeSearchComponent implements OnInit {
  results!: SearchResult[];
  loading!: boolean;

  constructor() { }
  ngOnInit() { }

 updateResults(results: SearchResult[]): void {
  this.results = results;
  // console.log("results:", this.results); // uncomment to take a look
 }
}
