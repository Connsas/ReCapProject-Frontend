import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrandComponent } from "./components/brand/brand.component";
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from "./components/navi/navi.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, BrandComponent, CustomerComponent, ColorComponent, NaviComponent]
})
export class AppComponent {
  title = 'ReCapProject';
}
