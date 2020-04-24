let lastNum, lastOp, lastButton;

let num = function(val){
    let holder = document.getElementById("viewPort");

    if(lastButton=="calc"){
        reset(val);
    }
    else if(lastButton=="operator"){
        lastNum = parseInt(holder.innerHTML);
        holder.innerHTML = val;
    }
    else if(parseInt(holder.innerHTML) === 0){
        holder.innerHTML = val;
    }
    else{
        holder.innerHTML = holder.innerHTML + val; 
    }
    lastButton = "num";
}

let op = function(val){
    let holder = document.getElementById("viewPort");
    let opList = document.querySelector(".selected");
    if(opList){
        opList.classList.remove("selected");
    }

    switch (val) {
        case "+":
            document.getElementById("plus").classList.add("selected");
            break;
        case "-":
            document.getElementById("minus").classList.add("selected");
            break;
        case "/":
            document.getElementById("divide").classList.add("selected");
            break;
        case "*":
            document.getElementById("multiply").classList.add("selected");
            break;
        default:
            break;
    }

    lastButton = "operator";
}

let reset = function(val){
    lastButton = null;
    lastNum = null;
    lastOp = null;
    document.getElementById("viewPort").innerHTML = "" + val;
    let opList = document.querySelector(".selected");
    if(opList){
        opList.classList.remove("selected");
    }
}

let calc = function(){

    let temp;
    let view = document.getElementById("viewPort");
    let operator = document.querySelector(".selected");
    if(lastButton == "calc"){
        console.log("lastNum is " +lastNum)
        switch (lastOp) {
            case "plus":
                view.innerHTML = parseInt(view.innerHTML) + lastNum ;
                lastOp = "plus";
                break;
            case "minus":
                view.innerHTML = parseInt(view.innerHTML) - lastNum ;
                lastOp = "minus";
                break;
            case "divide":
                view.innerHTML = parseInt(view.innerHTML) / lastNum ;
                lastOp = "divide";
                break;
            case "multiply":
                view.innerHTML = parseInt(view.innerHTML) * lastNum ;
                lastOp = "multiply";
                break;
            default:
                break;
        }
    }
    else if(operator&&operator.id=="divide"&&view.innerHTML == "0"){}
    else if(operator){
        temp = parseInt(view.innerHTML);
        switch (operator.id) {
            case "plus":
                view.innerHTML = lastNum + parseInt(view.innerHTML);
                lastOp = "plus";
                lastNum = temp;
                break;
            case "minus":
                view.innerHTML = lastNum - parseInt(view.innerHTML);
                lastOp = "minus";
                lastNum = temp;
                break;
            case "divide":
                view.innerHTML = lastNum / parseInt(view.innerHTML);
                lastOp = "divide";
                lastNum = temp;
                break;
            case "multiply":
                view.innerHTML = lastNum * parseInt(view.innerHTML);
                lastOp = "multiply";
                lastNum = temp;
                break;
            default:
                break;
        }
        if(!(lastButton=="calc")){
            lastButton = "calc";
            operator.classList.remove("selected");
        }
    }
}

let removeLast = function(){
    let holder = document.getElementById("viewPort");
    if(!(holder.innerHTML == "0")){
        if(holder.innerHTML.length==1){
            holder.innerHTML = 0;
        }
        else{
            holder.innerHTML = holder.innerHTML.substring(0,holder.innerHTML.length-1);
        }
    }
}