let input = "avani"

function rev(input){

    input= input+"";

    return input.split('').reverse().join('')
    
}


function reversingDelay (string){
    setTimeout(function()  {
        let reversed =rev(string);
        console.log("after reversing :"+reversed);
        
    }, 2000);
}

reversingDelay(input)




















