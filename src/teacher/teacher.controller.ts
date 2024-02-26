import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { TeacherDTO } from "./teacher.DTO";

@Controller('teacher')
export class TeacherController{
    constructor(private teacherService: TeacherService) { }
    @Get('/index')
    getIndex(): string{
        return this.teacherService.getIndex();
    }
    @Get('/users/:id')
    getUserByID(@Param('id') id:number):object{
        return this.teacherService.getUserByID(id);
    }
    @Get('/users')
    getUserByNameAndID(@Query('name') name:string, @Query('id') id:string) :object{
        return this.teacherService.getUserByNameAndID(name,id);
    }
    @Post('/add')
    @UsePipes(new ValidationPipe())
    addTeacher(@Body() teacherDTO:TeacherDTO): object{
        return this.teacherService.addTeacher(teacherDTO);
    }
}