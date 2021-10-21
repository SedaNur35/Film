import { FoodComponent } from './food/food.component';
import { CartItemService } from './services/services/cart-item.service';
import { SepetekleComponent } from './sepetekle/sepetekle.component';
import { ProductAddComponent } from './cicek/product-add/product-add.component';
import { AlertifyService } from './services/alertify.service';
import { NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicPipe } from './pipes/basic.pipe';
import { CicekComponent } from './cicek/cicek.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { BadgeComponent } from './badge/badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';
import { CategoryfiltPipe } from './pipes/categoryfilt.pipe';


@NgModule({
  declarations: [AppComponent,BasicPipe,CicekComponent,ProductAddComponent,
    DetailComponent,SepetekleComponent,HeaderComponent,FoodComponent,BadgeComponent,CategoryfiltPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    BrowserAnimationsModule,SwiperModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AlertifyService,CartItemService],
  bootstrap: [AppComponent,CicekComponent,SepetekleComponent],
})
export class AppModule {}
