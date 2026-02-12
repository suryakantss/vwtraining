import {EventEmitter} from 'events';
export class CoffeShop extends EventEmitter {
    placeOrder(customer,type){
        this.emit('queue',customer)
        this.emit('brew',customer);
        this.emit('ready',customer);
    }
}

