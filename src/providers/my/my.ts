import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase , FirebaseListObservable} from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable()
export class MyProvider {
  private events:FirebaseListObservable<any[]>;
  private currentUser: firebase.User;
  private url:string ="https://jsonplaceholder.typicode.com/users";



  constructor(public http: Http , private db : AngularFireDatabase , public afAuth: AngularFireAuth) {
     afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }
  get authenticated(): boolean {
    return this.currentUser !== null;
  }
  getEventList(){
    return this.db.list('/Events');
  }
  getUsers(){
    return this.db.list('/Student Account');
  }


}
