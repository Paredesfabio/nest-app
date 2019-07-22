import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // SE DEFINE EL NOMBRE DE LA RUTA PARA LA URL
  // @Get('test')
  @Get()
  getHello(): string {
    return this.appService.getMessage();

  }

  @Get('nuevo/:id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }

}
