import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SongI } from 'src/app/models/song';
import { LyricsService } from 'src/app/services/lyrics.service';

@Component({
  selector: 'app-find-lyrics',
  templateUrl: './find-lyrics.component.html',
  styleUrls: ['./find-lyrics.component.css']
})
export class FindLyricsComponent implements OnInit {

  loading = false;
  lyrics: string;
  song$: SongI;

  constructor(private lyricsSvc: LyricsService) { }

  public lyricForm = new FormGroup({
    artist: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }


  findLyric(form: SongI) {
    this.loading = true;

    const payload: SongI = {
      artist: form.artist.toUpperCase(),
      title: form.title.toUpperCase(),
    }

    this.lyricsSvc.getLirycs(payload)
      .subscribe(data => {
        this.loading = false;
        this.lyrics = data['lyrics'];        
        
      }, err => {
        this.loading = false;
        console.error(err);
        
      })
    
  }

  private formatLyric(lyric: string) {
    return lyric.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}
