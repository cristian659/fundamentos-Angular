import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShopingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();// escuchar activamente cambios

  constructor() { }

  addProduct(product: Product)// la forma de agregar un producto al carritow
  {
    this.myShopingCart.push(product);
    this.myCart.next(this.myShopingCart);//para avisarle a solo los subscritos una notificacion
  //tramitimos el estado de la lista a los que esten interezados en recibir
  }

  getShoppingCart() {
    return this.myShopingCart;
  }

  getTotal() {
    return this.myShopingCart.reduce((sum, item)=> sum + item.price, 0);
  }
}
