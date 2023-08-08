import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/providers/prisma/prisma.service';
import { FilterParamDto } from 'src/common/dto/filter.param.dto';

@Injectable()
export class FoodService {
    constructor(private prisma: PrismaService) { }
    getAll(props?: FilterParamDto) {
        const { pageIndex, pageSize } = props

        return this.prisma.foods.findMany({
            skip: +pageIndex > 1 ? (+pageIndex - 1) * +pageSize : 0,
            take: +pageSize
        })
    }
}
