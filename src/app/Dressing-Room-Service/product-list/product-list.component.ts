import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  productList: any[] = [];
  
  //dependency injection
  constructor(private _productService: ProductService ) {}

  ngOnInit(): void {
    this.productList = this._productService.productList;
  }

  //lifecycle chạy khi mà input đầu vào thay đổi
  ngOnChanges() {
  }

  
}
