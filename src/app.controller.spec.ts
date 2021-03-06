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

    // having a request scoped pipe makes the controller request scoped.
    appController = await app.resolve<AppController>(AppController);
  });

  describe('root', () => {
    it('should return hello message', () => {
      assertThat(appController.getHello("Bruce Wayne"), is('Hello Bruce Wayne!'));
    });
  });
});
