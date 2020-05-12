import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { HostPipe } from "./host.pipe";
import { NamePipe } from "./name.pipe";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Param("name", NamePipe) name: string
  ): string {
    return this.appService.getHello(name);
  }
}
