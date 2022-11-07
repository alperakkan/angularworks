import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000
    )
  }

  serverCreationStatus = 'no server created';
  serverName = '';
  allowNewServer = false;
  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }

  ngOnInit(): void {
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }


}
