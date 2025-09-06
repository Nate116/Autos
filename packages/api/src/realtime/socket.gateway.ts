import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' }})
export class SocketGateway {
  @WebSocketServer() server: Server;

  emitOrderUpdate(orderId: string, payload: unknown) {
    this.server.to(`order:${orderId}`).emit('order:update', payload);
  }
}
