import { EventEmitter, Injectable, Output } from '@angular/core';

// metadata
@Injectable({
    providedIn: 'root', //tất cả các component, service khác đều có quyền truy cập
})
export class CategoryService {
    cateList = [
        { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
        { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
        { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
        { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
        { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
        // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
        { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
        { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
    ];

    selectedCategory: any = 'topclothes';
    //set như vậy để mới render trang, nó hiện topclothes

    @Output() cateEmitter = new EventEmitter();

    setSelectedCategory(cate: string){
        this.selectedCategory = cate;
        this.cateEmitter.emit(this.selectedCategory);
        // phải thông báo cho các component khác, bằng output thì mới thay đổi dữ liệu
    }
}

