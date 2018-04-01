import { DataService } from './data-service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class PlayersService extends DataService {

  constructor(http: Http) {

    super(http);
    
  }


}
