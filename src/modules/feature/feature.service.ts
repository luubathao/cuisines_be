import { Injectable } from '@nestjs/common';
import { IParam } from '@type';
import { PrismaService } from 'src/common/providers/prisma/prisma.service';
import { FilterFeatureParamDto } from './dto/feature.param.dto';

@Injectable()
export class FeatureService {
    constructor(private prisma: PrismaService) { }
    foodOfDay() {
        return this.prisma.foods.findMany()
    }
}
