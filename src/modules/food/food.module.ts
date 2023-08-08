import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { PrismaModule } from 'src/common/providers/prisma/prisma.module';

@Module({
    imports:[PrismaModule],
    controllers:[FoodController],
    providers:[FoodService]
})
export class FoodModule {}
