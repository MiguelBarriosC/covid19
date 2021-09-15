import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) 
  public data, private solicitudService:SolicitudesService) { }

  soliForm = new FormGroup({
    title: new FormControl('', [ Validators.required ]),
    type: new FormControl('', [ Validators.required ]),
    estado: new FormControl('',[ Validators.required ]),
    nInfectados: new FormControl('', [ Validators.required ]),
    fechaCreacion: new FormControl('', [ Validators.required ]),
    fechaEvento: new FormControl('', [ Validators.required ])
  })

  ngOnInit(): void {
    this.soliForm.setValue({
      title: this.data.title,
      type: this.data.type,
      estado: this.data.estado,
      nInfectados: this.data.nInfectados,
      fechaCreacion: this.data.fechaCreacion,
      fechaEvento: this.data.fechaEvento
    })
  }
  edit(){
    this.solicitudService.editSolicitud(this.data.indice ,this.soliForm.value);
    this.onNoClick();
    window.location.reload();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
