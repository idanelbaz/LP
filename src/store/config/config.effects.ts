import { ConfigService, configService } from './config.service';
import { LoggerService, loggerService } from '../../logger/logger.service';

export class ConfigEffects {
  constructor(private effectLoggerService : LoggerService, private effectConfigService : ConfigService) {
    console.log("ConfigEffects constructor");
  }

  public allEffects : Array<any> = [
  ];
}

export const configEffects = new ConfigEffects(loggerService, configService);
