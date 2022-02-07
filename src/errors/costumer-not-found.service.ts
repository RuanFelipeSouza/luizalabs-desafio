import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerNotFound extends Error {
  error(id) {
    return `Customer ${id} not found`;
  }
}
