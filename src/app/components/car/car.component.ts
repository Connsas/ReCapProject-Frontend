import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carDetails } from '../../models/carDetails';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  currentCar: carDetails = {
    brandId: 0,
    colorId: 0,
    brandName: 'dummy',
    carName: 'dummy',
    colorName: 'dummy',
    dailyPrice: 0,
    description: 'dummy',
    modelYear: 0,
  };

  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['brandId']){
        this.getCarDetailsByBrand(params['brandId']);
      }else if(params['colorId']){
        this.getCarDetailsByColor(params['colorId']);
      }else{
        this.getAllCarDetails();
      }
    })
  }

  carDetails: carDetails[] = [];

  getAllCarDetails() {
    this.carService.getAllCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarDetailsByBrand(brandId:number){
    this.carService.getCarsDetailsByBrand(brandId).subscribe((response) =>{
      this.carDetails = response.data;
    })
  }

  getCarDetailsByColor(colorId:number){
    this.carService.getCarsDetailsByColor(colorId).subscribe((response) =>{
      this.carDetails = response.data;
    })
  }

  getCurrentCar(carDetails: carDetails) {
    this.currentCar = carDetails;
  }

  getCarClass(carDetails: carDetails) {
    if (this.currentCar == carDetails) {
      return 'list-group-item active';
    } else {
      return 'list-group-item disable';
    }
  }

  removeCurrentCar() {
    this.currentCar = {
      brandId: 0,
      colorId: 0,
      brandName: 'dummy',
      carName: 'dummy',
      colorName: 'dummy',
      dailyPrice: 0,
      description: 'dummy',
      modelYear: 0,
    };
  }

  getAllCarClass() {
    if (this.currentCar.carName == 'dummy') {
      return 'list-group-item active';
    } else {
      return 'list-group-item disable';
    }
  }
}
