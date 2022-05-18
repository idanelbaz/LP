export class LoggerService {
  isDebug = false;

  log: any = (log: any, subModule? : string) => LoggerService.cLog(log, 'green', subModule);

  info: any = (wrn: any, subModule? : string) => LoggerService.cLog(wrn, 'white', subModule);

  debug: any = (wrn: any, subModule? : string) => (this.isDebug ? LoggerService.cLog(wrn, 'gray', subModule) : undefined);

  error: any = (err: any, subModule? : string) => LoggerService.cLog(err, 'red', subModule);

  warn: any = (wrn: any, subModule? : string) => LoggerService.cLog(wrn, 'yellow', subModule);

  private static cLog(msg: any, color: string, subModule?: string) {
    console.log(msg, '%c', `color: ${color}`, subModule);
  }
}

export const loggerService = new LoggerService();
