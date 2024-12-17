import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
