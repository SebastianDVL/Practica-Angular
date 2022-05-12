import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])onScrollEvent($event: any) {
    let menu:any = document.querySelector("#menu")
    if($event.srcElement.scrollingElement.scrollTop > 0) {
      menu.classList.add("bg-pink-900")
      menu.classList.remove("bg-pink-900/70")
    }else{
      menu.classList.add("bg-pink-900/70")
      menu.classList.remove("bg-pink-900")
    }
  }
}


