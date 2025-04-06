import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './navbar.component.html',
  //bootstrap:[AppComponent],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
