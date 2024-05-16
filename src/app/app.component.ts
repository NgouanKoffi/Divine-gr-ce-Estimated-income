import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './composants/footer/footer.component';
import { LeftComponent } from './composants/left/left.component';
import { RightComponent } from './composants/right/right.component';
import { TopMenuComponent } from './composants/top-menu/top-menu.component';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    LeftComponent,
    RightComponent,
    TopMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Divine-gr-ce-Estimated-income';
  formIsValid = false;

  @ViewChild(LeftComponent) leftComponent!: LeftComponent;

  isSmallScreen(): boolean {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  }

  constructor(public navigationService: NavigationService) {}
}