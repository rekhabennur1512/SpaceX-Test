import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpaceXServiceService {

  private url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014';
  private url1 = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true'

  constructor(private http: HttpClient) { }

  getSpaceX() {
    return this
            .http
            .get(`${this.url}`);
        }

        getLaunchDetails(){
          return this
            .http
            .get(`${this.url1}`);
        }
        
}
