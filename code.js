
var khanWrapper = function(processing){
    khanMethods.forEach(function(methodName){
        window[methodName] = processing[methodName];
    })

    //PASTE YOUR KHANACADEMY CODE HERE.
    
    processing.setup = setup;
    processing.draw = draw;
}

