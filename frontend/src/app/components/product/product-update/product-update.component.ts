import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{

  product: Product = {
    name: '',
    price: null
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;//! diz que não é nulo
    console.log("O ID E " + id);
    this.productService.readById(id).subscribe(response => {
      this.product = response;
    });
   }

  update(): void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado!');
      this.cancel();
    });
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
