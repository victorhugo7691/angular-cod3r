import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { ProductRead2Component } from "../../components/product/product-read2/product-read2.component";

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule, ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {  }

  navigateToProductCreate(): void {
    console.log("Navegando");
    this.router.navigate(['product/create']);
  }
}
