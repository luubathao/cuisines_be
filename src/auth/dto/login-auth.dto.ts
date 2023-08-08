import { IAuthLevel } from "@type/auth";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNumber()
    @IsNotEmpty()
    level: IAuthLevel
}
