import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrandComponent } from "./components/brand/brand.component";
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from "./components/navi/navi.component";
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, BrandComponent, CustomerComponent, ColorComponent, NaviComponent, CarComponent, RentalComponent]
})
export class AppComponent {
  title = 'ReCapProject';
}
