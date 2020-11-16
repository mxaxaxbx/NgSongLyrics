import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SongI } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  private apiUrl: string = environment.lyricApiUrl;

  constructor(private httpClient: HttpClient) { }

  getLirycs(song: SongI) {
    return this.httpClient
      .get<SongI>(`${this.apiUrl}/${song.artist}/${song.title}`)
        .pipe(
          tap(data => {
            console.log('song fetched');
            
          }),

          catchError(this.handleError('GET, lyrics by artist and title', []))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
      
    }
  }
}
