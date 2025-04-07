import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DesignGridComponent } from './design-grid/design-grid.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,CarouselComponent, DesignGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Studio';
}
