import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}
    @Get()
    getAll(){
        return this.categoryService.getAll()
    }
}
