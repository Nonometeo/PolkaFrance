import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
  { path: 'videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) },
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
