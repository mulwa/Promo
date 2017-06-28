import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {MyProvider} from '../../providers/my/my';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {MoredetailsPage}  from '../moredetails/moredetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   private eventsList :any;

  constructor(public navCtrl: NavController, private navParams: NavParams,
    public loadingCtrl:LoadingController,  public providerService: MyProvider) {
    let loader = this.loadingCtrl.create({
      content: 'Wait fetching Events....',
    });
    loader.present().then(()=>{
      this.providerService.getEventList().subscribe(res=>{
        this.eventsList = res;
        loader.dismiss();
      });



    });

  }
  loadMore(event){
    console.log("clicked "+event.eventName);
    this.navCtrl.push(MoredetailsPage,event);
  }

}
