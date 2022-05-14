import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{

  

  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description:'',
  }
  @Output() addedProduct = new EventEmitter<Product>();//envio de objeto product

  constructor() { }


  onAddToCart(){
    this.addedProduct.emit(this.product);//le estoy enviando producto
  }

}
