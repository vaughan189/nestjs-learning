import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .apply(logger) // Functional Middleware
      // .forRoutes('cats');
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });  // Route wildcards
      // .forRoutes(CatsController); // example with a single controller
  }
}
