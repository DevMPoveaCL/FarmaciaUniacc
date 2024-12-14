import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  direccion: string = '';
  ciudad: string = '';
  metodoPago: string = '';
  metodoEntrega: string = '';
  archivoReceta: File | null = null;

  constructor(private router: Router, private alertController: AlertController) { }

  async confirmarCompra() {
    if (!this.direccion || !this.ciudad || !this.metodoPago || !this.metodoEntrega) {
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, complete todos los campos obligatorios antes de continuar.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    console.log('Compra confirmada:', {
      direccion: this.direccion,
      ciudad: this.ciudad,
      metodoPago: this.metodoPago,
      metodoEntrega: this.metodoEntrega,
      receta: this.archivoReceta ? this.archivoReceta.name : 'No se subió receta',
    });

    this.router.navigate(['/confirmacion']);
  }

  subirReceta() {
    const fileInput = document.getElementById('receta') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivoReceta = input.files[0];
      console.log('Archivo seleccionado:', this.archivoReceta);
    }
  }
}
