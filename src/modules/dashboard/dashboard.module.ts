import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { PrismaModule } from 'src/common/providers/prisma/prisma.module';

@Module({
    imports:[PrismaModule],
    controllers:[DashboardController],
    providers:[DashboardService]
})
export class DashboardModule {}
