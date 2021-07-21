import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  route = 1;
  constructor() {}
  routeTo(id) {    
    this.route = id

  }
}
