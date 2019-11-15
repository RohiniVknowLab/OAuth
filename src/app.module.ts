import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

import { CatsModule } from './cats/cats.module';
import { SourcesModule } from './sources/sources.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, SourcesModule, AuthModule, UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/cats-db')],
  controllers: [AppController]
})


export class AppModule {}
