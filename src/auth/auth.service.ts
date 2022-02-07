import { Injectable } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class AuthService {
  constructor(private customerService: CustomerService) {}
  async validateUser(email: string, password: string) {
    const user = await this.customerService.findOne(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
