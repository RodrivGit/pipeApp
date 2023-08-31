import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Color, Hero } from '../../interfaces/hero.interface';


@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Cuperman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Baredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Aobin',
      canFly: true,
      color: Color.green
    }
  ]

  
  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase
    console.log(this.isUpperCase)
  }
  
  public sortType: keyof Hero | null = 'name';
  
  onClick(value:keyof Hero): void{
     this.sortType = value;
  }

}
