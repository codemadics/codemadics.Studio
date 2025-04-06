import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,
    CarouselModule,
    ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas:[],
})
export class CarouselComponent {
  carouselItems = [
    { image: 'assets/pexels-bertellifotografia-2377000.jpg', title: 'Image 1' },
    { image: 'assets/pexels-garrettmorrow-2179864.jpg', title: 'Image 2' },
    { image: 'assets/pexels-mali-102108.jpg', title: 'Image 3' }
  ];

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };

}
