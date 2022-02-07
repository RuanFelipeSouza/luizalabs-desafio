import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductNotFound extends Error {
  error(id) {
    return `Product ${id} not found`;
  }
}
