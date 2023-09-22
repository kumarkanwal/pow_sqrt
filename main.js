let number;
let check;
let pow;
let sqrt;


// power button code 
document.getElementById("pow_btn").onclick = function(){

    number = document.getElementById("user_input").value;
    number = Number(number);
    check = Boolean(number);
    
    // pow( ) code 
    if(check){

        pow = Math.pow(number,2);
    console.log(pow);

        document.getElementById("h1_cantainer").innerHTML = pow;
    
    }else{
        document.getElementById("h1_cantainer").innerHTML = "please enter a valid number";

    }
}

// sqrt button code 
document.getElementById("sqrt_btn").onclick = function(){

    number = document.getElementById("user_input").value;
    number = Number(number);
    check = Boolean(number);
    
    // pow( ) code 
    if(check){

        sqrt = Math.sqrt(number,2);
    console.log(sqrt);

        document.getElementById("h1_cantainer").innerHTML = sqrt;
    
    }else{
        document.getElementById("h1_cantainer").innerHTML = "please enter a valid number";

    }
}


