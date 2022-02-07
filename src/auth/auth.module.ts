import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { CustomerModule } from 'src/customer/customer.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { secretJwt } from './constant';

@Module({
  imports: [
    CustomerModule,
    PassportModule,
    JwtModule.register({
      secret: secretJwt.secret,
      signOptions: { expiresIn: '1800s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
