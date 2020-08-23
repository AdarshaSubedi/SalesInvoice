import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  success(msg){
    this.config['panelClass'] = ['success'];
    this.snackBar.open(msg, '', this.config);
  }
  warn(msg){
    this.config['panelClass'] = ['notificaation', 'warn'];
    this.snackBar.open(msg, '', this.config);
  }
}
