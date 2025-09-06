import { Injectable } from '@nestjs/common';

@Injectable()
export class CourierService {
  ping() {
    return { ok: true };
  }
}
