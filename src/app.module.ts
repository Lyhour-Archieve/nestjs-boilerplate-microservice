import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './shared.module';
import { ConfigService } from './shared/services/config.service';

@Module({
    imports: [
        SharedModule,
        UsersModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
