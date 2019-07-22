import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


@Module({
  imports: [ TypeOrmModule.forRoot() ],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
