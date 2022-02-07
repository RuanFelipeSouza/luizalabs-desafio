import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer')
    private readonly customerModel: Model<CreateCustomerDto>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customerModel.create(createCustomerDto);
  }

  async findAll() {
    return await this.customerModel.find();
  }

  async findOne(id: string) {
    return await this.customerModel.findOne({ email: id }).exec();
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    await this.customerModel.findOneAndUpdate({ email: id }, updateCustomerDto);
    return 'Customer Updated';
  }

  async remove(id: string) {
    await this.customerModel.findOneAndDelete({ email: id });
    return 'Customer Deleted';
  }
}
