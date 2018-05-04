import { EndPoint } from './../../app/common/endpoints';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NotFoundError } from '../../app/common/not-found-error';
import { AppError } from '../../app/common/app-error';
import { StandingsService } from '../../app/common/service/standings.service';


/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {


  standings : any[];
  loader : any;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private service: StandingsService , 
              private loadingCtrl : LoadingController) {
  
  }

  ionViewDidLoad() {

    this.loader = this.loadingCtrl.create(
      {content:'Loading...',
      spinner : 'dots'
    })

    this.loader.present().then(() => {
      this.displayStandings();
    })

  }

  displayStandings(): void {
  
    this.service.getItems(EndPoint.STANDINGS_EPL_1718).subscribe(
      response => {
        this.standings = response.standing;
        this.loader.dismiss();
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('not found ');
        }
        else throw error;
        this.loader.dismiss();
      }
    )

  }


  viewPlayers(team : any){

    var fetchPlayersUrl = team._links.team.href + "/players";
    this.navCtrl.push('PlayersPage',{teamUrl:fetchPlayersUrl,teamName:team.teamName});
  }
  
}
