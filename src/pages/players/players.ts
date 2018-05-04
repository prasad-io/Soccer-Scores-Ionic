import { AppError } from './../../app/common/app-error';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NotFoundError } from '../../app/common/not-found-error';
import { PlayersService } from '../../app/common/service/players.service';

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  players: any[];
  teamurl: string;
  teamName: string;
  loader : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: PlayersService , public loadingCtrl : LoadingController) {

    this.teamurl = navParams.get('teamUrl');
    this.teamName = navParams.get('teamName');

  }

  ionViewDidLoad() {

     this.loader = this.loadingCtrl.create(
      {content:'Loading players...',
      spinner : 'dots'
    })

    this.loader.present().then(() => {
      this.displayTeamsList();
    })

  }

  toHttps(val: string) {
    if (!val.includes("https")) {
      val = val.replace("http", "https");
    }
    console.log(val);
    return val;
  }

  displayTeamsList(): void {
    //console.log(this.teamurl);
    this.service.getItems(this.toHttps(this.teamurl)).subscribe(
      response => {
        this.players = response.players;
        this.loader.dismiss();
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('not found ');
        }
        else {
          throw error;
        }
        this.loader.dismiss();
      }
    )

  }

}
