import { MatButtonModule } from '@angular/material/button';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(response => {
      console.log(response);
      this.productService.showMessage('Sucesso');
      this.cancel();
    });

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
