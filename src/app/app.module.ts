import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { VideosComponent } from './videos/videos.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { PresentationEcosystemeComponent } from './presentation-ecosysteme/presentation-ecosysteme.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    VideosComponent,
    TeamComponent,
    ContactsComponent,
    AccueilComponent,
    PresentationEcosystemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
