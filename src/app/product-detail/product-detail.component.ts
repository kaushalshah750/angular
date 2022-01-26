import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products = products;

  constructor() { }

  share(){
    window.alert('You have Clicked on share button')
    // document.getElementById('hero')?.insertAdjacentText('afterend', 'hello')
  }
  
  onNotify(){
    window.alert('You have Clicked on notify button')
  }

  ngOnInit(): void {
  }

}
