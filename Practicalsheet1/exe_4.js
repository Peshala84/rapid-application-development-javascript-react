function isPrime(n){

    if(n<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){

            return false;
        }
    }

    return true;
}

let num=parseInt(prompt("Enter a number:"));

if(isPrime(num)){
    console.log("The number is prime.");}
    else{
        console.log("The number is not prime.");
    }