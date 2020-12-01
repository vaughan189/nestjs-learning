
import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles('admin') // Setting roles per handler
  @UseGuards(RolesGuard)
  @UseInterceptors(LoggingInterceptor)
  // @UseFilters(HttpExceptionFilter)  // Pass class directly, leaving responsibility for instantiation to the framework, and enabling dependency injection.
  async create(@Body() createCatDto: CreateCatDto): Promise<any> {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }
}