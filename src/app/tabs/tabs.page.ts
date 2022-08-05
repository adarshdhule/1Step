import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  constructor() { }
  selectedTab: string;

  ngOnInit(){
  // alert("In tabss");
  }
  setCurrentTab(){
    console.log('Current Tab: '+this.tabs.getSelected())
    this.selectedTab = this.tabs.getSelected()
  }

}
