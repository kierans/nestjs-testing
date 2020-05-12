import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { HostPipe } from "./host.pipe";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Param("host", HostPipe) host: string
  ): string {
    return this.appService.getHello(host);
  }
}
