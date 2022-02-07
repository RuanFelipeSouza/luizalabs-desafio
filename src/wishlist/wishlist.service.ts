import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductService } from '../product/product.service';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class WishlistService {
  private productService;
  constructor(
    @InjectModel('Customer')
    private readonly customerModel: Model<CreateWishlistDto>,
    private readonly customerService: CustomerService,
  ) {
    this.productService = new ProductService();
  }
  async create(id: string, productId: string) {
    const product = await this.productService.findProduct(productId);
    const customer = await this.customerService.findOne(id);
    if (!customer) return `Customer ${id} not found`;
    const favoriteProduct = await this.customerModel.findOne({
      'productList.id': productId,
    });
    if (favoriteProduct) return `Product ${productId} already added`;
    const customerList = await this.customerModel.findOneAndUpdate(
      { email: id },
      {
        $push: { productList: product },
      },
    );
    return customerList;
  }

  async update(id: string, updateWishlistDto: UpdateWishlistDto) {
    return await this.customerModel.findOneAndUpdate(
      { email: id },
      updateWishlistDto,
    );
  }

  async remove(customerEmail, productId: string) {
    const customer = await this.customerModel.findOne({ email: customerEmail });
    const newProductList = customer.productList.map((product) => {
      console.log('product', product);
    });
    await this.customerModel.findOneAndUpdate(
      {
        email: customerEmail,
      },
      { productlist: newProductList },
    );
    return 'Item Removed';
  }
  private async isValid(customer, productId) {
    const isValid = customer.productList.map((product) => {
      if (product.id === productId) return false;
    });
    console.log(isValid);
    return isValid;
  }
}
