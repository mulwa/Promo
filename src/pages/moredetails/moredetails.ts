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
  private event_venue :string;
  private event_time: string;
  private event_target: string;
  private event_date: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.event_name = this.navParams.get("eventName");
    this.event_description = this.navParams.get('eventDescription');
    this.event_date = this.navParams.get('eventDate');
    this.event_time = this.navParams.get('eventTime');
    this.event_venue = this.navParams.get('eventVenue');

    console.log("name from second  page "+this.event_name);
  }

}
