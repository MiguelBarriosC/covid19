import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  solicitudes:any[];

  ngOnInit(): void {
    this.solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
  }

}
