import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  template: `
  <input [(ngModel)]="userName">
  <input [(ngModel)]="userEmail">
  <input [(ngModel)]="userPhone">
`
})
export class PaymentComponent {
  currentView: string = 'view1';
  userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PaymentComponent>,
    private sharedDataService: SharedDataService
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  openVerificationModal(event: Event) {
    event.preventDefault();
    document.getElementById('verificationModal')?.classList.remove('hidden');
  }

  changeView(view: string) {
    this.currentView = view;
  }

  nextView() {
    if (this.currentView === 'view1') {
      this.currentView = 'view2';
    } else if (this.currentView === 'view2') {
      this.currentView = 'view3';
    }
  }

  previousView() {
    if (this.currentView === 'view3') {
      this.currentView = 'view2';
    } else if (this.currentView === 'view2') {
      this.currentView = 'view1';
    }
  }

  submitOrder() {
    console.log('Order submitted');
    this.closeDialog();
  }

  get subtotal(): number {
    return this.sharedDataService.estimatedRevenue;
  }

  get total(): number {
    return this.subtotal + 2;
  }
}