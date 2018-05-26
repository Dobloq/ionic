import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  lat: any;
  long: any;
  locs : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation, private storage: Storage) {

  }

  ionViewDidLoad(){
    var numeros = [2,3,4,8,6,7,7]
    this.storage.set("locations",numeros)
    this.locs = this.storage.get("location")
    console.log(this.locs)
    this.geo.getCurrentPosition().then (pos =>{
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
    }).catch (err => console.log(err));
  }
}
