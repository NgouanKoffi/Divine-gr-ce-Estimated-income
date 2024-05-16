import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule {}