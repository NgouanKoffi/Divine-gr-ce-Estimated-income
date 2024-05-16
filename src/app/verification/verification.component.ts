import { Component } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {
  closeModal() {
    // Logic to close the modal
    document.getElementById('verificationModal')?.classList.add('hidden');
  }
}
