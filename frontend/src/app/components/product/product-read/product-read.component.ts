import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [ CommonModule, MatTableModule, RouterLink],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{

  products = new MatTableDataSource<Product>();
  displayedColumns = ['id', 'name', 'price', 'acoes'];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.read().subscribe(response => {
      this.products.data = response;
      console.log(this.products);
    })
  }

  //delete(id: string): void{
    //console.log("ID E O DELETE " + id);
    //this.productService.delete(id);
    //this.productService.showMessage('Produto deletado');
 // }
}
