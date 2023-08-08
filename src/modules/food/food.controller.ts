import { Controller, Get, Query } from '@nestjs/common';
import { FoodService } from './food.service';
import { FilterParamDto } from 'src/common/dto/filter.param.dto';

@Controller('food')
export class FoodController {
    constructor(private foodService: FoodService) { }

    @Get()
    getAll(@Query() dto: FilterParamDto) {
        return this.foodService.getAll(dto)
    }
}
