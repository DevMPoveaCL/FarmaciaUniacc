import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  constructor(private navCtrl: NavController) { }

  editProfile() {
    console.log('Editar perfil');
    // Lógica para editar perfil
  }

  changePassword() {
    console.log('Cambiar contraseña');
    // Navegación o lógica para cambiar contraseña
  }

  paymentMethods() {
    console.log('Métodos de pago');
    // Navegación a métodos de pago
  }

  viewHistory() {
    console.log('Ver historial de compras');
    // Navegación al historial de compras
  }

  helpCenter() {
    console.log('Centro de ayuda');
    // Navegación al centro de ayuda
  }

  logout() {
    console.log('Cerrar sesión');
    // Lógica para cerrar sesión
  }
}
