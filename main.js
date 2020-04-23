let lastNum, lastOp, lastButton;

let num = function(val){
    let holder = document.getElementById("viewPort");
    if(parseInt(holder.innerHTML) === 0){
        holder.innerHTML = val;
    }
    else{
        holder.innerHTML = holder.innerHTML + val; 
    }
}

let op = function(val){
    let holder = document.getElementById("viewPort");
    switch (val) {
        case "+":
            
            break;
        case "-":

            break;

        case "/":
        
            break;
        case "*":

            break;
    
        default:
            break;
    }
}