import Axios, { AxiosResponse } from 'axios';
import { ConfigInterface } from './config.interface';
import { LoggerService, loggerService } from '../../logger/logger.service';
import { configInitState } from './config.initState';

export class ConfigService {
  constructor(public serviceLoggerService: LoggerService) {
    this.config = configInitState;
  }

  config: ConfigInterface;

  async init(): Promise<ConfigInterface> {
    console.log('env', process.env.REACT_APP_ENV_TYPE);
    const configFileAddress = process.env.REACT_APP_ENV_TYPE === 'prod'
      ? './config/config.prod.json' : './config/config.local.json';
    console.log('configFileAddress', configFileAddress);
    return Axios.get(configFileAddress)
      .then(({ data }: AxiosResponse<ConfigInterface>) => {
        this.serviceLoggerService.log(data);
        this.config = data;
        return data;
      });
  }
}

export const configService = new ConfigService(loggerService);
