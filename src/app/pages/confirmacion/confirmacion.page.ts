import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage {
  orderNumber = '#123456';
  deliveryMethod = 'Envío a domicilio';
  totalPaid = '$4,500';

  constructor() { }
}
