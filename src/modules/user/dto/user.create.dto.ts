import { IAuthLevel, IAuthStatus } from "@type/auth"
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsString()
    username: string

    @IsNumber()
    @IsNotEmpty()
    level: IAuthLevel

    @IsNumber()
    @IsNotEmpty()
    status: IAuthStatus
}