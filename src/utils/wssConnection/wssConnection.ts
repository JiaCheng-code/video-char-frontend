import { DefaultEventsMap } from '@socket.io/component-emitter';
import socketClient, {Socket} from 'socket.io-client';

const SERVER: string = 'http://localhost:8000';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export  const connectWithSocket = ():void=>{
    socket = socketClient(SERVER)
    socket.on('connection',()=>{
        console.log("WebSocket connection success");
        console.log(socket.id)
    })
}