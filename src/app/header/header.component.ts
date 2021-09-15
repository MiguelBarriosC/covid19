import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private dialog:MatDialog) { }

  ngAfterViewInit(){
    //scrol width movil 284
    const items = document.getElementById('header-items');
    const btnPrev = document.getElementById('btn-prev');
    let st = 284
    items.scrollTo(st,0)
    btnPrev.addEventListener('click', () => {
      if (items.scrollLeft < 0) items.scrollTo(0,0); else items.scrollTo(items.scrollLeft-=50,0);
    });
  }

  ngOnInit(): void {}

  openDialog() {
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '35%',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
