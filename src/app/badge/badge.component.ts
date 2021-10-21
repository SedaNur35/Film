import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { AlertifyService } from '../services/alertify.service';
import { CartItemService } from '../services/services/cart-item.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  animations:[
    trigger('heart', [
      state('unliked', style({
          color: '#fff',
          opacity: '0.5',
          transform: 'scale(1)'
      })),
      state('liked', style({
          color: '#e74c3c',
          opacity: '1',
          transform: 'scale(1.1)'
      })),
      transition('unliked <=> liked', animate('100ms ease-out'))
  ])
  ]
})
export class BadgeComponent implements OnInit {
  @Input() item: Product;
  product: Product[];
  public likeState: string = 'unliked';
  public iconName: string = 'heart-outline';
  constructor(private alertify:AlertifyService ,private active:ActivatedRoute,private cardservice:CartItemService) { }

  ngOnInit() {


  }

  toggleLikeState(item:any){

    if(this.likeState == 'unliked'){

      this.likeState = 'liked';
      this.iconName = 'heart';
      this.cardservice.addtoCart(item);

    } else {
      this.likeState = 'unliked';
      this.iconName = 'heart-outline';

    }
  }
}
