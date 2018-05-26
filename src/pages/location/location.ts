import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  lat: any;
  long: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {

  }

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then (pos =>{
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
    }).catch (err => console.log(err));
  }
}
