import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddComponent>, private solicitudService:SolicitudesService, private router:Router) { }

  soliForm = new FormGroup({
    title: new FormControl('', [ Validators.required ]),
    type: new FormControl('', [ Validators.required ]),
    estado: new FormControl('',[ Validators.required ]),
    nInfectados: new FormControl('', [ Validators.required ]),
    fechaCreacion: new FormControl('', [ Validators.required ]),
    fechaEvento: new FormControl('', [ Validators.required ])
  })

  ngOnInit(): void {
  }
  create() {
    this.solicitudService.addSolicitud(this.soliForm.value);
    this.onNoClick();
    window.location.reload();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
