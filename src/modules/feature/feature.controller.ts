import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { FeatureService } from './feature.service';
import { FilterFeatureParamDto } from './dto/feature.param.dto';

@Controller('food')
export class FeatureController {
    constructor(private featureService: FeatureService) { }
    @Get()
    getAll(@Query() dto: FilterFeatureParamDto) {

        return true
    }
}
