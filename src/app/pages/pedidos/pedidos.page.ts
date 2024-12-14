import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage {
  orders = [
    {
      date: 'Septiembre 15, 2024',
      title: 'Catedral #1476',
      price: 4500,
      image: 'assets/images/order1.png',
      status: 'Entregado',
    },
    {
      date: 'Septiembre 08, 2024',
      title: 'Miraflores #332',
      price: 3500,
      image: 'assets/images/order2.png',
      status: 'Entregado',
    },
    {
      date: 'Agosto 25, 2024',
      title: 'Catedral #1476',
      price: 2500,
      image: 'assets/images/order3.png',
      status: 'Entregado',
    },
  ];

  constructor() { }
}
