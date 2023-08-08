import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ParamAddDishDto } from './dto/dish.param.dto';
import { FilterParamDto } from 'src/common/dto/filter.param.dto';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }

    @Get('dish')
    getAll(@Query() dto: FilterParamDto) {
        return this.dashboardService.getAll(dto)
    }

    @Post('dish/add')
    add(@Body() data: ParamAddDishDto) {
        console.log(data, 'data')
        return this.dashboardService.add(data)
    }
}
