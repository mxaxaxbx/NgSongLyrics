import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindLyricsComponent } from 'src/app/components/pages/find-lyrics/find-lyrics.component';

const routes: Routes = [
  {
    path: '',
    component: FindLyricsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
