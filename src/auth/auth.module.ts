import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config';

@Module({
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: config.jwt.secret,
    signOptions: { expiresIn: config.jwt.expiresIn },
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
