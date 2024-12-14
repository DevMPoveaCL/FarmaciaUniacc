import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HowToBuyComponent } from 'src/app/components/how-to-buy/how-to-buy.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: HowToBuyComponent,
    });
    return await modal.present();
  }
}

