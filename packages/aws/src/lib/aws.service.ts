import { Injectable } from '@nestjs/common';

@Injectable()
export class AWSService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
