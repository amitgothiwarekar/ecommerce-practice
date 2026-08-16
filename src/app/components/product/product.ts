import { Component,ChangeDetectorRef } from '@angular/core';
import { Product } from '../../model/product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../serices/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  products: Product[]=[];

  newProduct : Product={
    name : '',
    price : 0
  };

  constructor(private productService: ProductService,private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.loadProducts();
  }

  loadProducts():void {
    this.productService.showProducts().subscribe({
      next:(data)=>{this.products=data;
        console.log(this.products);
       // this.products = [...data];
        this.cdr.detectChanges();
      },
      error:(err)=>console.log('Error fetching products'+err)

    });
    }

    onSubmit():void{
      this.productService.addProduct(this.newProduct).subscribe({
        next : (responseMessage)=>{
          this.loadProducts();
           
          // this.products = [...this.products, createdProduct];
           //this.cdr.detectChanges();
           console.log(this.products);
          this.newProduct={name:'',price:0}
        },
        error : (err)=> console.error('product could not be added in error call back',err)

      })

    }
  }

  



