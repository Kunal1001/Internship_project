import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public productDetail:any;

  public getProductDetail(product:any){

    console.log(product);
    this.productDetail= product;

  }

  public products = [
    {
      id:1,
      name:'jacket',
      price: '₹120000',
      description:'A beautiful Jacket in leather, by BuyIt.com. This premium jacket is not for soft hearted.',
      url:'../../../assets/images/home/placeimg_640_480_any.jpg',
    },
    {
      id:2,
      name:'jacket',
      price: '₹1200000',
      description:'A beautiful Jacket in leather, by BuyIt.com. This premium jacket is not for soft hearted.',
      url:'../../../assets/images/home/placeimg_640_480_any.jpg',
    },
    {
      id:3,
      name:'jacket',
      price: '₹1200001',
      description:'A beautiful Jacket in leather, by BuyIt.com. This premium jacket is not for soft hearted.',
      url:'../../../assets/images/home/placeimg_640_480_any.jpg',
    },
    {
      id:4,
      name:'jacket',
      price: '₹1200002',
      description:'A beautiful Jacket in leather, by BuyIt.com. This premium jacket is not for soft hearted.',
      url:'../../../assets/images/home/placeimg_640_480_any.jpg',
    },
    {
      id:5,
      name:'jacket',
      price: '₹1200003',
      description:'A beautiful Jacket in leather, by BuyIt.com. This premium jacket is not for soft hearted.',
      url:'../../../assets/images/home/placeimg_640_480_any.jpg',
    },
  ]
}
