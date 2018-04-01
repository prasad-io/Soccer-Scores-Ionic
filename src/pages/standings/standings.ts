import { EndPoint } from './../../app/common/endpoints';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: StandingsService) {
  
  }

  ionViewDidLoad() {
    this.displayStandings();
    console.log('ionViewDidLoad StandingsPage');
  }

  displayStandings(): void {
  
    this.service.getItems(EndPoint.STANDINGS_EPL_1718).subscribe(
      response => {
        this.standings = response.standing;
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
