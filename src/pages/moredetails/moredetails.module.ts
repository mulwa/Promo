import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoredetailsPage } from './moredetails';

@NgModule({
  declarations: [
    MoredetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoredetailsPage),
  ],
  exports: [
    MoredetailsPage
  ]
})
export class MoredetailsPageModule {}
