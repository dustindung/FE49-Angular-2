import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit, AfterViewInit {

  selectedProduct: any;

  @ViewChild('demo') demoTag: ElementRef;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.productEmitter.subscribe((val: any) => {
      this.selectedProduct = val;
    });
  };

  ngAfterViewInit() {
    this.demoTag.nativeElement.style.color = 'red';
    this.demoTag.nativeElement.innerHTML = 'hieu';
  }




}
