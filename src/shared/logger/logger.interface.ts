import { LoggerConfigOptions } from 'src/config/defineConfig';

/**
 * 日志等级
 */
export type WinstonLogLevel = 'info' | 'error' | 'warn' | 'debug' | 'verbose';

export interface LoggerModuleOptions extends LoggerConfigOptions {
  isGlobal?: boolean;
  // 默认输出为 用户主目录 + logDirName
  logDirName?: string;
}