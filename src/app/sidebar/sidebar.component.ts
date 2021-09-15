import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit  {

  constructor(private loginService:LoginService) {}

  config =  {
    mode:'over',
    hasBackdrop:true
  }
  route:string = location.pathname.replace('/','');
  
  ngOnInit(): void {
    this.route = this.route.replace(this.route[0],this.route[0].toUpperCase());
  }
  logout() {
    this.loginService.logout();
  }
}