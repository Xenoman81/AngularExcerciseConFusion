import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  dish: Dish;
  promotion: Promotion;
  
  constructor(private dishservice: DishService,
  private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getDish(0);
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
