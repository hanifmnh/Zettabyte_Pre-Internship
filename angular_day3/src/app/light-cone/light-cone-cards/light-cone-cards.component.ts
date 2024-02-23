import { Component, Input } from '@angular/core';
import { LightCone } from '../light-cone.model';

@Component({
  selector: 'app-light-cone-cards',
  templateUrl: './light-cone-cards.component.html',
  styleUrl: './light-cone-cards.component.css',
})
export class LightConeCardsComponent {
  @Input() lightCones: LightCone[] = [];
}
