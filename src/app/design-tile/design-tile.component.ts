import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-design-tile',
  imports: [],
  templateUrl: './design-tile.component.html',
  styleUrl: './design-tile.component.css'
})
export class DesignTileComponent {

  @Input() design: any;
}
