import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [

  ]
})
export class MenuComponent implements OnInit{
  public items : MenuItem[] = [];

  ngOnInit() {
    this.items = [{
        label: 'Pipes de Angular',
        icon: 'my-margin-left pi pi-fw pi-sign-out',
        items: [
            {label: 'Texto y Fechas', icon: 'pi pi-align-left',routerLink:'/'},
            {label: 'Numeros', icon: 'pi pi-dollar',routerLink:'numbers'},
            {label: 'No Comunes', icon: 'pi pi-globe', routerLink:'uncommon'}
        ]
    },
    {
      label: 'Pipes Personalizadoss',
      icon: 'pi pi-cog',
      items: [{
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        routerLink: 'custom'
      }]
    }

  ];
}


}
