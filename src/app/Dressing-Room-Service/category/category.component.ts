import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  // services
  cateList: any[];

  //dependency injection
  constructor(private _categoryService: CategoryService) {}

  selectCate(cate: string){
    this._categoryService.setSelectedCategory(cate);
  }

  //lifecycle chạy lúc đầu
  ngOnInit(): void {
    this.cateList = this._categoryService.cateList ;
    
  }
}
