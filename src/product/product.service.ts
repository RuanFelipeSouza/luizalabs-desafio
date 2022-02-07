import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProductService {
  private api;
  constructor() {
    this.api = axios.create({
      baseURL: process.env.MAGALU_PRODUCTS,
    });
  }
  async findProduct(id, page = 1) {
    const { data } = await this.api.get(`/product/?page=${page}`);
    const product = data.products.filter((element) => {
      return element.id === id;
    });
    if (!product) return `Product ${id} not found`;
    return product;
  }
}
