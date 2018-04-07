
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppError } from '../../app/common/app-error';
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

  players : any[];
  teamurl : string;
  teamName : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: PlayersService) {
     
    this.teamurl = navParams.get('teamUrl');
    this.teamName = navParams.get('teamName');

    }

  ionViewDidLoad() {
    this.displayTeamsList();
    console.log('ionViewDidLoad PlayersPage');
  }

 

  displayTeamsList(): void {
  //console.log(this.teamurl);
    this.service.getItems(this.teamurl).subscribe(
      response => {
        this.players = response.players;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('not found ');
        }
        else throw error;
      }
    )

  }

}
