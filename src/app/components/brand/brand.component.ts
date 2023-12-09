import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { RouterModule } from '@angular/router';
import { group } from 'console';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand = {brandId:0, brandName:"dummy"};
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (this.currentBrand == brand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item disable';
    }
  }

  removeCurrentBrand(){
    this.currentBrand = {brandId:0, brandName:"dummy"}
  }

  getAllBrandClass(){
    if(this.currentBrand.brandId == 0){
      return 'list-group-item active';
    }else{
      return 'list-group-item disable';
    }
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
}
