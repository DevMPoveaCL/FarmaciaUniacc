import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  cartItems = [
    {
      name: 'Losartan Potásico 50mg',
      lab: 'Laboratorio Chile',
      price: 500,
      quantity: 2,
      image: 'assets/images/med3.png',
    },
    {
      name: 'Migranol 650mg',
      lab: 'Laboratorio Bagó',
      price: 3500,
      quantity: 1,
      image: 'assets/images/med2.png',
    },
  ];

  promoCode = '';
  total = 4500;

  constructor() { }

  applyPromoCode() {
    // Lógica para aplicar código promocional
    console.log('Código promocional aplicado:', this.promoCode);
  }

  proceedToCheckout() {
    // Lógica para proceder al checkout
    console.log('Procediendo al checkout');
  }
}
