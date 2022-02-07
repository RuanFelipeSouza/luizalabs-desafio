import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { ProductService } from './product/product.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/luizalabs'),
    ConfigModule.forRoot(),
    CustomerModule,
    WishlistModule,
    AuthModule,
  ],
  controllers: [],
  providers: [ProductService],
})
export class AppModule {}
