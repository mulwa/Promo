import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-moredetails',
  templateUrl: 'moredetails.html',
})
export class MoredetailsPage {
  private event_name:string;
  private event_description:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoredetailsPage');
    this.event_name = this.navParams.get("eventName");
    this.event_description = this.navParams.get('eventDescription');

    console.log("name from second  page "+this.event_name);
  }

}
