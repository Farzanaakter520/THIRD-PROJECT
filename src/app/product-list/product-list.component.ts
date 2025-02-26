// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Product } from '../app.component'; // Make sure this is the correct import for Product

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private router: Router) { }

// ngOnInit(): void {
//   // Retrieve products from localStorage
//   this.products = JSON.parse(localStorage.getItem('products') || '[]');
// }

// // Edit product method
// editProduct(product: Product) {
//   const id = product.id;  // Extract product ID
//   // Navigate to the edit page with the product passed in state
//   this.router.navigate(['/add', id], { state: { product } });
// }



//   // Delete product method
//   deleteProduct(product: Product) {
//     const id = product.id;
//     if (confirm('Are you sure you want to delete this product?')) {
//       this.products = this.products.filter(p => p !== product);
//       localStorage.setItem('products', JSON.stringify(this.products));
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../app.component';


@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private router: Router) { }
 
   ngOnInit(): void {
     this.products = JSON.parse(localStorage.getItem('products') || '[]');
   }

   editProducts(product: Product) {
     //const id = product.id;
     this.router.navigate(['/add'], { state: { product}});
   }
   

   deleteProduct(product: Product) {
     //const id = product.id;
     if (confirm('Are you sure you want to delete this product?')) {
       this.products = this.products.filter(p => p !== product);
       localStorage.setItem('products', JSON.stringify(this.products));
     }
   }

   

}
