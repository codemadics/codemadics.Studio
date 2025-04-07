import { Component } from '@angular/core';
import { DesignTileComponent } from '../design-tile/design-tile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design-grid',
  imports: [DesignTileComponent, CommonModule],
  templateUrl: './design-grid.component.html',
  styleUrl: './design-grid.component.css'
})
export class DesignGridComponent {

  designItems = [
    { title: 'Modern Look', image: 'assets/pexels-bertellifotografia-2377000.jpg' },
    { title: 'Royal Vibe', image: 'assets/pexels-garrettmorrow-2179864.jpg' },
    { title: 'Minimal Studio', image: 'assets/pexels-weekendplayer-93820.jpg' },
    { title: 'Modern Look', image: 'assets/pexels-bertellifotografia-2377000.jpg' },
    { title: 'Royal Vibe', image: 'assets/pexels-garrettmorrow-2179864.jpg' },
    { title: 'Minimal Studio', image: 'assets/pexels-weekendplayer-93820.jpg' },
    { title: 'Modern Look', image: 'assets/pexels-bertellifotografia-2377000.jpg' },
    { title: 'Royal Vibe', image: 'assets/pexels-garrettmorrow-2179864.jpg' },
    { title: 'Minimal Studio', image: 'assets/pexels-weekendplayer-93820.jpg' },
    { title: 'Modern Look', image: 'assets/pexels-bertellifotografia-2377000.jpg' },
    { title: 'Royal Vibe', image: 'assets/pexels-garrettmorrow-2179864.jpg' },
    { title: 'Minimal Studio', image: 'assets/pexels-weekendplayer-93820.jpg' },
  ];
}
