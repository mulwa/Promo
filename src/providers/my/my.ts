import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase , FirebaseListObservable} from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MyProvider {
  private events:FirebaseListObservable<any[]>;
  private currentUser: firebase.User;



  constructor(public http: Http , private db : AngularFireDatabase , public afAuth: AngularFireAuth) {
     afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }
  get authenticated(): boolean {
    return this.currentUser !== null;
  }
  getEventList(){
    return this.db.list('/Events');
  }


}
