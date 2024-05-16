import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentModule } from './payment/payment.module';
import { VerificationComponent } from './verification/verification.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CommonModule,
    MatDialogModule,
    PaymentModule,
    AppRoutingModule
  ],
  exports: [
    VerificationComponent // Export VerificationComponent here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}