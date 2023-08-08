import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/common/providers/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
