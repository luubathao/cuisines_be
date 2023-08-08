import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/providers/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma : PrismaService){}
    getAll(){
       return this.prisma.foods.findMany({
            skip:0,
            take:300
        })
    }
}
