import { Component } from '@angular/core';
import { LocationService } from './services/location/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketPlaceWeb';
constructor( private locationService:LocationService,){}
async ngOnInit()
{
  const position:any = await this.locationService.getCurrentLocation();

localStorage.setItem('latitude',position['lat'])
localStorage.setItem('longitude',position['lng'])

}
 
}
