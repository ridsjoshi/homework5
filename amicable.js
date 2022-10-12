function isAFactor(n){
    const factors = [1];
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n%i == 0){
            if (i == (n / i)){
                factors.push(i);
            }
            else{
                factors.push(i);
                factors.push(n/i);
            }
        }
    }
    return factors;
}

function factorSum(factors){
    let sum=0;
    for(let i = 0; i < factors.length; i++){
        sum += factors[i];
    }
    return sum;
}

function checkAmicable(factorsA, factorsB, a, b){
    let sumA = factorSum(factorsA);
    let sumB = factorSum(factorsB);
    if(sumA != b){ 
        return false;
    }
    return (sumB == a);
 }

 function listFactors(factors){
     let list = factors.toString();
     return list;
 }

function amicableCheck(){
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;;
    let factors1 = isAFactor(a);
    let factors2 = isAFactor(b);
    var output;
    if(checkAmicable(factors1, factors2, a, b)){
        output = "The numbers: " + a + " and " + b + " are amicable";
    } else {
        output = "The numbers: " + a + " and " + b + " are not amicable";
    }
    let listA = listFactors(factors1);
    let listB = listFactors(factors2);
    document.getElementById("amicable").innerHTML = output;
    document.getElementById("factors").innerHTML = "Factors of " + a + ": " + listA;
    document.getElementById("factors2").innerHTML = "Factors of " + b + ": " + listB;
}



