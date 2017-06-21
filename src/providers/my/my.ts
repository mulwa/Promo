import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase , FirebaseListObservable} from "angularfire2/database";
import * as firebase from 'firebase';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MyProvider {
  private events:FirebaseListObservable<any[]>;

  constructor(public http: Http , private db : AngularFireDatabase) {

  }
  getEventList(){
    return this.db.list('/Events');
  }


}
