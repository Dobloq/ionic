import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'locationList.html'
})
export class LocationListPage {
  icons: string[];
  items: Array<{title: string, latitude: any, longitude: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.items = [];
    this.storage.forEach( (value, key) => {
      console.log("Nombre:"+key+" Latitud:"+value.latitude+" Longitud:"+value.longitude)
      this.items.push({
        title: key,
        latitude: value.latitude,
        longitude: value.longitude
      });
    })

  }

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
