import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xcapital_products',
  templateUrl: './xcapital_products.component.html',
  styleUrls: ['./xcapital_products.component.scss'],
})
export class XCAPITAL_Products_Component implements OnInit {
  products = [
    {
      imgSrc: '../../../assets/product_phone.png',
      imgAlt: 'product_phone',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis.',
    },
    {
      imgSrc: '../../../assets/box.png',
      imgAlt: 'product_box',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis.',
    },
    {
      imgSrc: '../../../assets/box2.png',
      imgAlt: 'product_box2',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}
