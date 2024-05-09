import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent {
  contentState: number = 1; // Start with the first content

  nextContent() {
    if (this.contentState < 3) {
      this.contentState++;
    }
  }

  previousContent() {
    if (this.contentState > 1) {
      this.contentState--;
    }
  }
}