import {Component, OnInit} from '@angular/core';
import {SocketioService} from './socketio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'socketio-angular';
  socket;
  container: any;

  constructor(private socketService: SocketioService, private router: Router) {}
  goToPage(page: string): void {
    this.router.navigate([`${page}`]);
  }
  ngOnInit(){
  }

}
