import { Injectable } from '@angular/core';
import * as reverse from 'reverse-geocode';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              console.log(
                'Latitude: ' +
                  position.coords.latitude +
                  'Longitude: ' +
                  position.coords.longitude
              );
              let lat = position.coords.latitude;
              let lng = position.coords.longitude;

              const location = {
                lat,
                lng,
              };
              this.GetAddress(lat,lng);
              resolve(location);
            }
          },
          (error) => console.log(error)
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }
     
  GetAddress(lat:number,lng:number) {
      console.log(reverse.lookup(37.8072792, -122.4780652, 'us'))
  //  const KEY = "AIzaSyBN0zGprcv-v-e5b4B3TjcjUc0bVcsZhrA";
  //  let url=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${KEY}`;
  //  fetch(url).then(res=>console.log(res)).catch(err=>console.warn(err))
    
        }
    }

