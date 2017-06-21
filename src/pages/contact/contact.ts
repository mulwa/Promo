import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyProvider} from '../../providers/my/my';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private studentList: any;

  constructor(public navCtrl: NavController, public myprovider: MyProvider) {

    this.myprovider.getUsers().subscribe(res =>{
      this.studentList = res;
      console.log(this.studentList);
    });

  }

}
