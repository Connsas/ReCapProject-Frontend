import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carDetails } from '../../models/carDetails';
import { CarService } from '../../services/car.service';
import { response } from 'express';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getAllCarDetails();
  }

  carDetails: carDetails[] = [];

  getAllCarDetails() {
    this.carService.getAllCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
