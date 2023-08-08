import { Module } from '@nestjs/common';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { PrismaModule } from 'src/common/providers/prisma/prisma.module';

@Module({
    imports:[PrismaModule],
    controllers:[FeatureController],
    providers:[FeatureService]
})
export class FeatureModule {}
