import { Controller,Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messageService: MessagesService){}

    @Get()
    getHello(): string {
        return this.messageService.getMessage();
        
    }    
}
