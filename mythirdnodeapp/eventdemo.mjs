import {EventEmitter} from 'events';

class ScoreBoard extends EventEmitter{
    
}


let sb = new ScoreBoard();
sb.on('six',(nm)=>{
    console.log('sixer...'+nm)
});

sb.on('four',()=>{
    console.log('four...')
});

sb.emit('six','Virat');
sb.emit('four');
sb.emit('six','SomeOne!!');
