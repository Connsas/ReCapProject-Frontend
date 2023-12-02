import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorService } from '../../services/color.service';
import { response } from 'express';
import { Color } from '../../models/color';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent implements OnInit {
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors()
  }

  colors: Color[] = [];

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
