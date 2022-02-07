import { Module } from '@nestjs/common';
import { CustomerNotFound } from './costumer-not-found.service';
import { ProductNotFound } from './not-found.service';
@Module({
  providers: [ProductNotFound, CustomerNotFound],
})
export class ErrorModule {}
