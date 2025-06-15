import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { Hero2Component } from './hero2/hero2.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StepComponent } from './step/step.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    Hero2Component,
    BenefitsComponent,
    NavbarComponent,
    StepComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'thai_pay';
}
