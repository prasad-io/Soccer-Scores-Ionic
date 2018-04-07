import { EndPoint } from './../../app/common/endpoints';
import { FixturesService } from './../../app/common/service/fixtures.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppError } from '../../app/common/app-error';
import { NotFoundError } from '../../app/common/not-found-error';

/**
 * Generated class for the FixturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html',
})
export class FixturesPage {

  


  fixtures : any[];
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: FixturesService) {
  
  }

  ionViewDidLoad() {
    this.displayFixtures();
    console.log('ionViewDidLoad FixturesPage');
  }

  displayFixtures(): void {
  
    this.service.getItems(EndPoint.FIXTURES_EPL_1718).subscribe(
      response => {
        this.fixtures = response.fixtures;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          console.log('not found ');
        }
        else throw error;
      }
    )

  }

  gameOver(status:string) {
    
    switch(status){
      case "FINISHED": return true;
      
      case "IN_PLAY" : return true;

      default : return false;
  
    }

  }

}
