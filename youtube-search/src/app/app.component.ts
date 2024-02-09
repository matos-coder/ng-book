import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { YoutubeSearchComponent } from "./youtubeSearch/youtube-search/youtube-search.component";
import { SearchBoxComponent } from "./youtubeSearch/search-box/search-box.component";
import { youTubeSearchInjectables } from './youtubeSearch/youtubeSearch.injectables';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    providers: youTubeSearchInjectables,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, YoutubeSearchComponent, SearchBoxComponent,HttpClientModule]
})
export class AppComponent {
  title = 'youtube-search';
}
