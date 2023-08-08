import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category/category.module';
import { UserModule } from './modules/user/user.module';
import { FoodModule } from './modules/food/food.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CategoryModule, UserModule, FoodModule, DashboardModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
