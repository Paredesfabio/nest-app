import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    getMessage() {
        return 'Nuevo Mensaje 2';
    }    
}
