import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor() { }

  medicines = [
    ['Med A', 200.00, 'No Side Effects'],
    ['Med B', 1200.00, 'No Side Effects'],
    ['Med C', 500.00, 'No Side Effects']
  ];
  medicinepocessor(){
    return this.medicines;
  }
}
