import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { EAuthLevel, EAuthStatus, SALT_ROUNDS } from 'constant/auth';
import * as bcrypt from 'bcrypt';
import { throwIf } from '$helper';
import { EMAIL_NOT_REGISTED, WRONG_EMAIL, WRONG_PASSWORD } from 'constant/error.constant';
import { IResponse } from '@type';
import * as ms from 'ms';
import { user } from '@prisma/client';
import { config } from 'src/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async create(createAuthDto: CreateAuthDto) {
    const hashPass = await bcrypt.hash(createAuthDto.password, SALT_ROUNDS)
    const user: CreateAuthDto = {
      password: hashPass,
      email: createAuthDto.email,
      level: createAuthDto.isGuest ? EAuthLevel.GUEST : EAuthLevel.USER,
      username: createAuthDto.username,
      status: EAuthStatus.ACTIVE
    }

    return this.usersService.create(user);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async login(email, password): Promise<IResponse> {

    throwIf(!email, new UnauthorizedException(WRONG_EMAIL))
    throwIf(!password, new UnauthorizedException(WRONG_PASSWORD))
    const user = await this.usersService.findByUnique({ email: email });

    throwIf(!user, new UnauthorizedException(EMAIL_NOT_REGISTED))
    const matchPass = await bcrypt.compare(password, user.password);

    throwIf(!matchPass, new UnauthorizedException(WRONG_PASSWORD))
    return this.generateToken(user);
  }

  private generateToken(user: user) {
    const now = Math.floor(Date.now() / 1000);
    const expiresIn = now + ms(config.jwt.expiresIn) / 1000;
    const payload = {
      id: user.iduser,
      username: user.username,
      level: user.level,
      email:user.email,
      status:user.status,
      expiresIn,
    };
    const accessToken = this.jwtService.sign(payload);
    return {
      data: {
        n: expiresIn,
        accessToken,
      }
    };
  }
}
