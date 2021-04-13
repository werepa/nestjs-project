import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/api', 301)
  @ApiExcludeEndpoint()
  getHello() {
    return;
  }

  @Get('young')
  getYoungHello(): string {
    return this.appService.getYoungHello();
  }
}
