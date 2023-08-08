import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FindUserDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    iduser?: number;

    @IsNotEmpty()
    @IsEmail()
    email?: string;
}