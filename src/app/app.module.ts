import { PlayersService } from './../pages/players/service/players.service';
import { TeamsPage } from './../pages/teams/teams';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TeamsService } from '../pages/teams/service/teams.service';
import { HttpModule } from '@angular/http';
import { PlayersPage } from '../pages/players/players';


@NgModule({
  declarations: [
    MyApp,
    TeamsPage,
    PlayersPage
  ],
  imports: [
  
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeamsPage,
    PlayersPage
  ],
  providers: [
    TeamsService,
    PlayersService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
