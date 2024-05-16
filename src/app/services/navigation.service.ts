// src/app/services/navigation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public currentComponent: 'left' | 'right' = 'left';

  showRightComponent() {
    this.currentComponent = 'right';
  }

  showLeftComponent() {
    this.currentComponent = 'left';
  }
}