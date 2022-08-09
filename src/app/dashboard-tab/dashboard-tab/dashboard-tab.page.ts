import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tab',
  templateUrl: './dashboard-tab.page.html',
  styleUrls: ['./dashboard-tab.page.scss'],
})
export class DashboardTabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openProgress() {
    var x = document.getElementById("progress");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
