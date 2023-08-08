import { Injectable, Post } from '@nestjs/common';
import { IParam } from '@type';
import { PrismaService } from 'src/common/providers/prisma/prisma.service';
import { ParamAddDishDto } from './dto/dish.param.dto';
import { FilterParamDto } from 'src/common/dto/filter.param.dto';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) { }

    async getAll(props?: FilterParamDto) {
        const { pageIndex, pageSize } = props
        const totalSize = await this.prisma.dish.count()
        const data = await this.prisma.dish.findMany({
            skip: +pageIndex > 1 ? (+pageIndex - 1) * +pageSize : 0,
            take: +pageSize
        })
        return {
            data, totalPage: Math.round(+totalSize / +pageSize) + 1
        }
    }

    add(data: ParamAddDishDto) {
        try {
            return this.prisma.dish.create({
                data
            })
        } catch (error) {
            console.log(error);

        }
    }
}