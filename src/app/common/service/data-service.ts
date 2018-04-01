
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// TODO : unnecessary import due to a vs code bug; remove after updating typescript for vs code
import 'rxjs/Rx';
import { NotFoundError } from '../../../app/common/not-found-error';
import { TooManyReqestsError } from '../../../app/common/too-many-requests-error';
import { AppError } from '../../../app/common/app-error';
//import 'rxjs/add/observable/map';



@Injectable()
export class DataService {

 
  constructor(private http: Http) {

  }

  private getRequestHeader(){

    const headerDict = {
        
        'X-Auth-Token':'4d25f966ff0a4e2cbe4e1889020d20b4',
      }
      
      const requestOptions = {                                                                                                                                                                                 
        headers : new Headers(headerDict),
      };

      return requestOptions;

  }


  getItems(apiurl) {
    return this.http.get(apiurl,this.getRequestHeader())
    .map(response=>response.json())
    .catch(this.handleError);
      

  }


  private handleError(error:Response) {

    if(error.status===404){
      return Observable.throw(new NotFoundError());
    }
    else if(error.status===429){
      return Observable.throw(new TooManyReqestsError(error));
    } 
    else{
      return Observable.throw(new AppError(error));
      
    }
    
  }

}
