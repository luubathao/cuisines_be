import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ParamAddDishDto {
    @IsNotEmpty()
    @IsNumber()
    name: string;

    @IsNumber()
    id_recipe?: number;

    @IsString()
    ingredient: string;

    @IsString()
    unit?: string

    @IsNumber()
    quantity?: number;

    @IsString()
    image?: string;
}