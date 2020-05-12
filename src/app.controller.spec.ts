import { Test, TestingModule } from '@nestjs/testing';
import { assertThat, is } from "hamjest";

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [
        AppController
      ],
      providers: [
        AppService
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    /*
     * The problem:
     *
     * When testing the controller with a Pipe, if the Pipe is a singleton instance
     * Nest constructs the controller instance and this test will pass.
     *
     * If the Pipe is Request scoped, the controller is not instantiated correctly
     * (this.appService will be undefined) and this test will fail.
     *
     * To see in action, in AppController swap NamePipe for HostPipe
     */
    it('should return hello message', () => {
      assertThat(appController.getHello("Bruce Wayne"), is('Hello Bruce Wayne!'));
    });
  });
});
