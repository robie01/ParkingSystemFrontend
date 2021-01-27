import { Component, OnInit } from '@angular/core';

import {ParkingviewService} from './parkingview.service';
import {SocketioService} from '../socketio.service';

import {ParkingInformation} from '../ParkingInformation';



@Component({
  selector: 'app-parkingview',
  templateUrl: './parkingview.component.html',
  styleUrls: ['./parkingview.component.scss']
})

export class ParkingviewComponent implements OnInit {


  title = 'socketio-angular';
 // title = 'parking View';

  public container: any;
  slotNumber;
  condition = true;
  slotActive;

  constructor(private parkingViewService: ParkingviewService, private socketService: SocketioService) {
  }
  ngOnInit(){

    // socket events
    this.socketService.setupSocketConnection();
    this.socketService.socket.on('IoT/PublicParking/Ultrasonic', (data: string) => {
      this.slotActive = data.toString();
      console.log(this.slotActive);
    });
    this.socketService.socket.emit('my message' , 'Hello there from Angular');
    this.socketService.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
    this.parkingViewService.getAPIData().subscribe((response) => {
      console.log('response from GET API is ', response);
      this.container = response;
    }, (error) => {
      console.log('error is ', error);
    });

  }

}
