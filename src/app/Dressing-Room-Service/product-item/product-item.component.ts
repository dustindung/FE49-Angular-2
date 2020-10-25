import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() prod;

  // _ biểu hiện private, chỉ được truy suất bên trong, và được truyền từ bên ngoài vào (quy ước)
  constructor(private _productService: ProductService) { }

  selectProduct() {
    this._productService.setSelectedProducts({
      type: this.prod.type,
      img: this.prod.imgSrc_png,
    });

  }


  ngOnInit(): void { }
}
