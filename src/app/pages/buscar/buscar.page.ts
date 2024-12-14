import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage {
  products = [
    {
      name: 'Metformina 850mg',
      details: 'Laboratorio Chile',
      price: 1000,
      image: 'assets/images/med1.png',
    },
    {
      name: 'Migranol 650mg',
      details: 'Laboratorio Bago',
      price: 3500,
      image: 'assets/images/med2.png',
    },
    {
      name: 'Losartán 50mg',
      details: 'Laboratorio Chile',
      price: 500,
      image: 'assets/images/med3.png',
    },
    {
      name: 'Metformina 750mg',
      details: 'Laboratorio Chile',
      price: 990,
      image: 'assets/images/med1.png',
    },
    {
      name: 'Migranol 500mg',
      details: 'Laboratorio Bago',
      price: 3800,
      image: 'assets/images/med2.png',
    },
    {
      name: 'Losartán 10mg',
      details: 'Laboratorio Chile',
      price: 700,
      image: 'assets/images/med3.png',
    },
  ];

  constructor() { }
}
