import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!. Aqui nos conectamos a la base de datos';
  }

  getMessage() {
    return 'Nuevo Mensaje';
  }
}
