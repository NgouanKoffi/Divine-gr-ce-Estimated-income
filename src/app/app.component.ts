import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './composants/footer/footer.component'
import { LeftComponent } from './composants/left/left.component'
import { RightComponent } from './composants/right/right.component'
import { TopMenuComponent } from './composants/top-menu/top-menu.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, LeftComponent, RightComponent, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Divine-gr-ce-Estimated-income';
}
