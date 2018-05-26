import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

export class Ubicacion{
  nombre: string;
  longitude: any;
  latitude: any;
}

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  lat: any;
  long: any;
  locs: any;
  prueba: any;
  ubicacion = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation, private storage: Storage) {

  }

  ionViewDidLoad(){
    var numeros = [2,3,4,8,6,7,7]
    this.storage.set("locations",numeros)
    this.storage.set("prueba","prueba")
    this.prueba = this.storage.get("prueba")
    this.locs = this.storage.get("location")
    this.storage.get('locations').then((val) => {
      this.locs  = val;
  });
    console.log(this.locs)
    this.geo.getCurrentPosition().then (pos =>{
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
    }).catch (err => console.log(err));
    this.storage.keys().then((val) => {
      console.log(val)
    });
    this.storage.forEach( (value, key) => {
      console.log("Nombre:"+key+" Latitud:"+value.latitude+" Longitud:"+value.longitude)
    })
  }

  // logForm(){
  //   console.log(this.ubicacion)
  //   console.log(this.ubicacion.nombre)
  //   this.storage.set(this.ubicacion.nombre,{latitude: this.ubicacion.latitude, longitude: this.ubicacion.longitude})
  //   this.storage.get(this.ubicacion.nombre).then((val) => {
  //     console.log(val)
  //   });
  //}
}
