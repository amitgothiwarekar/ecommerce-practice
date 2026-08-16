
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
    providedIn:'root'
})
export class ProductService {

    private showProductbaseUrl='http://localhost:8080/product/showallproducts';
    private addProductBaseUrl='http://localhost:8080/product/addproduct';
    
    constructor(private http:HttpClient){}

    showProducts():Observable <Product[]> {
        return this.http.get<Product[]>(this.showProductbaseUrl)
    }

    // Inside your ProductService
addProduct(product: Product): Observable<string> {
  return this.http.post(this.addProductBaseUrl, product, { responseType: 'text' });
}
}
