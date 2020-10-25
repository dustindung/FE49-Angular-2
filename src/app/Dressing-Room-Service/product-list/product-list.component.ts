import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  productList: any[] = [];

  displayList: any[] = [];

  //dependency injection
  constructor(private _productService: ProductService, private _cateService: CategoryService) { }

  ngOnInit(): void {
    this.productList = this._productService.productList;
    this._cateService.cateEmitter.subscribe(this.filterProducts); // hàm truyền vào hàm, phải để arrow function, this, mới đúng ngữ cảnh

    this.filterProducts(this._cateService.selectedCategory);
    //hàm subscribe khi phát hiện có thay đổi, sẽ thực hiện function
  }

  //Phải đổi thành arrow function, thì phía trên mới dùng dc
  filterProducts = (filterValue: string) => {
    this.displayList = this.productList.filter((prod) => prod.type === filterValue);
  }

  //lifecycle chạy khi mà input đầu vào thay đổi
  ngOnChanges() {
  }


}
