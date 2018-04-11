import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsService } from '../../app/common/service/teams.service';
import { EndPoint } from '../../app/common/endpoints';
import { NotFoundError } from '../../app/common/not-found-error';
import { AppError } from '../../app/common/app-error';


/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service: TeamsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    this.displayTeamsList();
  }


  displayTeamsList(): void {

    this.service.getItems(EndPoint.TEAMS_EPL_1718).subscribe(
      response => {
        console.log(response);
        this.teams = response.teams;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('not found ');
        }
        else throw error;
      }
    )

  }

  viewPlayers(team : any){

    var fetchPlayersUrl = team._links.players.href;
    this.navCtrl.push('PlayersPage',{teamUrl:fetchPlayersUrl,teamName:team.name});
  }
  

}
