/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges,AfterViewInit, OnDestroy {

  @Input() img: string = "Valor init";
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  //counter = 0;
  //counterFn: number | undefined;
  

  constructor() {
    //antes del render corre
    // no cocrrer cosas async -- once time

    console.log('contructor','imgValue =>', this.img);
   }

   ngOnChanges(changes: SimpleChanges): void {
     // corre poara los inputs
       //corre antes del render y durante
       //obj: estar actualizando los cambios en los inputs
       //corre muchas veces las veces que actualicemos los inputs
      // console.log('ngOnchanges','imgValue =>', this.img);
      }

  ngOnInit(): void {
    //before render
    // aqui podemos correr cosas async
    //pordemos hacer un fetch, API, etc.
    // corre una sola vez
    //console.log('contructor','imgValue =>', this.img);
    //mala practica implementarlo
    //this.counterFn = window.setInterval(() => {
      //this.counter += 1;
      //console.log("run counter")
    //},1000)
  }

  ngAfterViewInit(): void {
      //after render
      //handler children
      //directivas despues*
      //console.log('ngAfterViewInit');
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnDestroy(): void {
        // delete component
        //console.log('ngOnDestroy');
        //window.clearInterval(this.counterFn);
    }

  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
