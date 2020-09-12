import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'user-details',
    component:UserDetailsComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'todo',
    component:TodoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
