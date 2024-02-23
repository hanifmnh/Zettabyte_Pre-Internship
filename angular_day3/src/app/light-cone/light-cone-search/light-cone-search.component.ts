import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LightCone } from '../light-cone.model';

@Component({
  selector: 'app-light-cone-search',
  templateUrl: './light-cone-search.component.html',
  styleUrl: './light-cone-search.component.css',
})
export class LightConeSearchComponent {
  @Input() lightCones: LightCone[] = [];
  @Output() filteredLightCones = new EventEmitter<LightCone[]>();
  searchText: string = '';

  searchCone() {
    const filteredCones = this.lightCones.filter((cone) =>
      cone.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.filteredLightCones.emit(filteredCones);
  }
}
