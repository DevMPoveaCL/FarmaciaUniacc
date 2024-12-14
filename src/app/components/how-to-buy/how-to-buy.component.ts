import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-how-to-buy',
  templateUrl: './how-to-buy.component.html',
  styleUrls: ['./how-to-buy.component.scss'],
})
export class HowToBuyComponent {
  constructor(private modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }
}
