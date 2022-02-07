import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { CustomerModule } from 'src/customer/customer.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [CustomerModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
