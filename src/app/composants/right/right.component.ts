import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { SharedDataService } from '../../services/shared-data.service';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../../payment/payment.component';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RightComponent implements OnInit {
  estimatedRevenue: number = 0;
  showError: boolean = false; // Propriété pour gérer l'affichage du message d'erreur

  constructor(
    private navigationService: NavigationService,
    private sharedDataService: SharedDataService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.sharedDataService.estimatedRevenue$.subscribe(revenue => {
      this.estimatedRevenue = revenue;
      this.showError = false; // Réinitialiser l'erreur lorsque la revenue change
    });
  }

  navigateToPayment() {
    if (this.estimatedRevenue > 0) {
      this.dialog.open(PaymentComponent, {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        panelClass: 'full-screen-dialog',
        data: {}
      });
    } else {
      this.showError = true; // Activer l'affichage du message d'erreur
    }
  }
}
