import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class FilterFoodParamDto {
    @IsNotEmpty()
    @ApiProperty({ default: 0 })
    @IsNumber()
    pageIndex: number;

    @IsNotEmpty()
    @ApiProperty({ default: 30 })
    @IsNumber()
    pageSize: number;
}