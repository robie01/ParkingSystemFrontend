
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingviewService{

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAPIData(){
    return this.http.post('http://localhost:9000/postParkingSlotsData', {});
  }


}
