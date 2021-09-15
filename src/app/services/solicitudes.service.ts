import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }
  solicitudes:any[];

  getSolicitudes():any[] {
    this.solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
    this.setInidiceElement();
    return this.solicitudes
  }
  addSolicitud(solicitud:any) {
    this.solicitudes.push(solicitud);
    localStorage.setItem('solicitudes',JSON.stringify(this.solicitudes));
    this.solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
  }
  deleteSolicitud(index:number) {
    this.solicitudes.splice(index,1);
    localStorage.setItem('solicitudes',JSON.stringify(this.solicitudes));
    this.solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
  }
  editSolicitud(indice:number,newSolicitud:any) {
    this.solicitudes[indice] = { 
      title:newSolicitud.title,
      type:newSolicitud.type,
      estado: newSolicitud.estado,
      nInfectados:newSolicitud.nInfectados,
      fechaCreacion:newSolicitud.fechaCreacion,
      fechaEvento: newSolicitud.fechaEvento
    }
    localStorage.setItem('solicitudes',JSON.stringify(this.solicitudes));
    this.solicitudes = JSON.parse(localStorage.getItem('solicitudes'));
  }
  setInidiceElement() {
    let i = 0;
    this.solicitudes.forEach((e:any) => {
      e.indice = i;
      i++;
    });
  }
}
