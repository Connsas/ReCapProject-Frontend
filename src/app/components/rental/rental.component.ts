import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalService } from '../../services/rental.service';
import { rentalDetails } from '../../models/rentalDetails';
import { response } from 'express';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css',
})
export class RentalComponent implements OnInit {
  constructor(private rentalService: RentalService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  rentalDetails: rentalDetails[] = [];

  getAllRentalDetails() {
    this.rentalService.getAllRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
    });
  }
}
