import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SolicitudesService } from '../services/solicitudes.service';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.sass']
})
export class SolicitudesComponent implements OnInit {

  constructor(private dialog:MatDialog, private solicitudService:SolicitudesService) { }

  displayedColumns: string[] = ['title', 'type','estado', 'nInfectados', 'fechaCreacion','fechaEvento','options'];
  solicitudes;

  ngOnInit(): void {
    this.solicitudes = this.solicitudService.getSolicitudes();
    localStorage.setItem('solicitudes', JSON.stringify(this.solicitudes));
  }
  delete(element) {
    this.solicitudService.deleteSolicitud(element.indice);
    this.solicitudes = this.solicitudService.getSolicitudes();
  }
  openCreateDialog() {
    let dialogRef = this.dialog.open(AddComponent, {
      height: '35%',
      width: '500px',
    });
  }
  openEditDialog(element:any) {
    console.log(element)
    let dialogRef = this.dialog.open(EditComponent, {
      height: '35%',
      width: '500px',
      data: element
    });
  }
}
