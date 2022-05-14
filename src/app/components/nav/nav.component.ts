import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  constructor(
    private storeService : StoreService,//inyeccion de dependencias desde el servicio
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      //lista de productos
      //cada que halla un cambio el nos va a avisar
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
