import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products:Iproduct[];
  categories:Icategory[];
  selectedCatId:number=0

  constructor(){
    this.categories=[
      {id:0,name:"All Products"},
      {id:1,name:"Bluase"},
      {id:2,name:"Heels"},
      {id:3,name:"Bags"},
      {id:4,name:"Dresses"},
      {id:5,name:"Pants"},
      {id:6,name:"Accessories"},
    ]

    this.products=[
      {id:1, name:"Accessories", price:350,imageUrl:'/accessories2.jpeg' ,catId:6},
      {id:2, name:"bluse", price:350,imageUrl:'/blause1.jpg' ,catId:1},
      {id:3, name:"bluse", price:500,imageUrl:'/blause2.jpg' ,catId:1},
      {id:4, name:"bag", price:200,imageUrl:'/bag1.jpg' ,catId:3},
      {id:5, name:"dresse", price:350,imageUrl:'/dresse2-.jpg' ,catId:4},
      {id:6, name:"pant", price:150,imageUrl:'/pants3.jpg' ,catId:5},
      {id:7, name:"Accessories", price:350,imageUrl:'/accessories1.jpg' ,catId:6},
      {id:8, name:"bluse", price:500,imageUrl:'/blause3.jpg' ,catId:1},
      {id:9, name:"heels", price:500,imageUrl:'/heels6.jpg' ,catId:2},
      {id:10, name:"dresse", price:350,imageUrl:'/dresse1-.jpg' ,catId:4},
      {id:11, name:"Accessories", price:350,imageUrl:'/accessories3.jpg' ,catId:6},
      {id:12, name:"bag", price:500,imageUrl:'/bag2.jpg' ,catId:3},


      
    ]
  }
  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement; // تحديد نوع العنصر
    this.selectedCatId = +target.value; // تحديث الفئة المختارة
  }
  
}
