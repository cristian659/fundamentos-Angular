import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {StoreService} from '../../services/store.service'
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  today = new Date();// fecha actual
  date = new Date(2021,1,21);
  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getAllProduct()// se mete aqui porque es una funcion asincrona
    .subscribe(data => {//para obtener los datos vamos a tener la info que extraimos de API 
      this.products = data;
    });
  }

  onAddToShopingCart(product: Product) {
    this.storeService.addProduct(product);// se envia al servicio con inyeccion de dependencias
    this.total = this.storeService.getTotal();
    //reduce nos sirve para calcular y reducir todo a un solo valor
  }

}
