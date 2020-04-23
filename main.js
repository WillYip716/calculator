let lastNum, lastOp, lastButton;

let num = function(val){
    let holder = document.getElementById("viewPort");

    if(lastButton=="operator"){
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
            lastOp = "plus";
            break;
        case "-":
            document.getElementById("minus").classList.add("selected");
            lastOp = "minus";
            break;
        case "/":
            document.getElementById("divide").classList.add("selected");
            lastOp = "divide";
            break;
        case "*":
            document.getElementById("multiply").classList.add("selected");
            lastOp = "multiply";
            break;
        default:
            break;
    }

    lastButton = "operator";
}

let reset = function(){
    lastButton = null;
    lastNum = null;
    lastOp = null;
    document.getElementById("viewPort").innerHTML = "0";
    let opList = document.querySelector(".selected");
    if(opList){
        opList.classList.remove("selected");
    }
}

let calc = function(){
    let answer;
    let view = document.getElementById("viewPort");
    let operator = document.querySelector(".selected");
    if(operator&&operator.id=="divide"&&view.innerHTML == "0"){}
    else if(operator){
        switch (operator.id) {
            case "plus":
                view.innerHTML = lastNum + parseInt(view.innerHTML);
                lastOp = "plus";
                break;
            case "minus":
                view.innerHTML = lastNum - parseInt(view.innerHTML);
                lastOp = "minus";
                break;
            case "divide":
                if(view.innerHTML == "0"){
                    break;
                }
                view.innerHTML = lastNum / parseInt(view.innerHTML);
                lastOp = "divide";
                break;
            case "multiply":
                view.innerHTML = lastNum * parseInt(view.innerHTML);
                lastOp = "multiply";
                break;
            default:
                break;
        }
        lastButton = "calc";
        operator.classList.remove("selected");

    }

}