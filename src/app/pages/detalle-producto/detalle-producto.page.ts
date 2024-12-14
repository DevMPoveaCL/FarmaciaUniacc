import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage {
  constructor(private navCtrl: NavController) { }

  addToCart() {
    console.log('Producto añadido al carrito');
    // Lógica para añadir el producto al carrito
  }
}
