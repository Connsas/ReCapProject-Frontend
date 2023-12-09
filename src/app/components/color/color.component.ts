import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorService } from '../../services/color.service';
import { response } from 'express';
import { Color } from '../../models/color';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent implements OnInit {

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  colors: Color[] = [];
  currentColor: Color = { colorId: 0, colorName: 'dummy' };

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getColorClass(color: Color) {
    if (this.currentColor == color) {
      return 'list-group-item active';
    } else {
      return 'list-group-item disable';
    }
  }

  removeCurrentColor() {
    this.currentColor = { colorId: 0, colorName: 'dummy' };
  }

  getAllColorClass() {
    if ((this.currentColor.colorId == 0)) {
      return 'list-group-item active';
    } else {
      return 'list-group-item disable';
    }
  }
}
