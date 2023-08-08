import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/common/providers/prisma/prisma.service';
import { FindUserDto } from './dto/user.param.dto';
import { CreateUserDto } from './dto/user.create.dto';
import { IResponse } from '@type';
import { throwIf } from '$helper';
import { DUPLICATE_EMAIL, WRONG_EMAIL, WRONG_PASSWORD } from 'constant/error.constant';
import { EAuthStatus } from 'constant/auth';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }
    getAll() {
        return this.prisma.user.findMany()
    }

    async create(params: CreateUserDto): Promise<IResponse> {
        const userExists = await this.findByUnique({ email: params.email })
        throwIf(!userExists.email, new UnauthorizedException(WRONG_EMAIL))
        throwIf(!userExists.password, new UnauthorizedException(WRONG_PASSWORD))
        throwIf(userExists && userExists.status === EAuthStatus.ACTIVE, new UnauthorizedException(DUPLICATE_EMAIL))
        await this.prisma.user.create({ data: params })
        return {
            data: true,
        }
    }

    findByUnique(params: FindUserDto) {
        return this.prisma.user.findUnique({ where: params })
    }
}