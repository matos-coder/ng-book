import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchResult } from "./search-result.model";
import { map } from 'rxjs/operators';

export let YOUTUBE_API_KEY: string = "AIzaSyD4bOxWcylpYriF8ghubV9mDWhJF8UYf7Y";
export let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YouTubeSearchService {

  constructor(
   private http: HttpClient,
   @Inject(YOUTUBE_API_KEY) private apiKey: string,
   @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}


  // search(query: string): Observable<SearchResult[]> {
  //   const params: string = [
  //    `q=${query}`,
  //    `key=${this.apiKey}`,
  //    `part=snippet`,
  //    `type=video`,
  //    `maxResults=10`
  //    ].join('&');
  //   const queryUrl = `${this.apiUrl}?${params}`;
  //   return this.http.get(queryUrl).pipe(map(response => {

  //    return <any>response['items'].map(item => {
  //    // console.log("raw item", item); // uncomment if you want to debug
  //    return new SearchResult({
  //     id: item.id.videoId,
  //     title: item.snippet.title,
  //     description: item.snippet.description,
  //     thumbnailUrl: item.snippet.thumbnails.high.url
  //    });
  //    });
  //   }));
  // }



  // search(query: string): Observable<SearchResult[]> {
  //    const params: string = [
  //    `q=${query}`,
  //    `key=${this.apiKey}`,
  //    `part=snippet`,
  //    `type=video`,
  //    `maxResults=10`
  //    ].join('&');
  //    const queryUrl = `${this.apiUrl}?${params}`;
  //   return this.http.get<Response>(queryUrl).map((response: { [x: string]: any[]; }) => {
  //    return <any>response['items'].map(item => {
  //    // console.log("raw item", item); // uncomment if you want to debug
  //    return new SearchResult({
  //     id: item.id.videoId,
  //     title: item.snippet.title,
  //     description: item.snippet.description,
  //     thumbnailUrl: item.snippet.thumbnails.high.url
  //    });
  //    });
  //    });
  //    }






  // Assuming you are working within a class
  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;

    return this.http.get<any>(queryUrl).pipe(
      map(response => {
        return response.items.map((item: any) => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      })
    );
  }




 }
