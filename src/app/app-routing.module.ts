import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifDetailComponent } from './gif/pages/gif-detail/gif-detail.component';
import { GifListComponent } from './gif/pages/gif-list/gif-list.component';

const routes: Routes = [
  {
    path:'trending',component:GifListComponent
  },
  {
    path:'trending/:id',component:GifDetailComponent
  },
  {
    path:'', pathMatch:'full',redirectTo:'trending'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
