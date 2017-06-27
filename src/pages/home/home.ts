import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyProvider} from '../../providers/my/my';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   private eventsList :any;

  constructor(public navCtrl: NavController , public providerService: MyProvider) {
    this.providerService.getEventList().subscribe(res=>{
      console.log(res);
      this.eventsList = res;
      console.log(this.eventsList);

    });
  }
  loadMore(event){
    console.log("clicked "+event.eventName);
  }
}
