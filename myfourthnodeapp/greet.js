class GreetService {
    greet(name){
        if(name=="")
            return 'Hello Guest!!';
        else
            return 'Hello '+ name+'!!';
    }
}

module.exports = GreetService;
