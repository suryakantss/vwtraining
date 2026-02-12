import { EventEmitter } from 'events';
import { exit } from 'process';

export class GreetGenerator extends EventEmitter {
    msg = ['Hi!!', 'Hello!!', 'Welcome!!', 'Happy Learning!!'];
    generate() {
        let i = 0;
        setInterval(() => {
            if (i == 5)
            {
                this.emit('end');
            }    
            else
                this.emit('start', this.msg[Math.floor(Math.random() * 4)]);
            i++;
        }, 1000);
    }
}


