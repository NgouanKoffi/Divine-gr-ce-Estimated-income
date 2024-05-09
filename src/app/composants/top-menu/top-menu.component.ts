import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  showSidebar: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize(window.innerWidth);
    }
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  private checkScreenSize(width: number): void {
    if (width > 804) {
      this.showSidebar = false;
    }
  }
}