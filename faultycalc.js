function fcal(a,sign,b){
    return Math.random()>0.1?correctCalculation(a,sign,b):falseCalculation(a,sign,b)
}
const correctCalculation=(a,sign,b)=>{
    if(sign=='+') return a+b;
    else if(sign=='-') return a-b;
    else if(sign=='*') return a*b;
    else if(sign=='/') return a/b;
}
const falseCalculation=(a,sign,b)=>{
    if(sign=='+') return a-b;
    else if(sign=='-') return a/b;
    else if(sign=='*') return a+b;
    else if(sign=='/') return a**b;
}

alert("The result is: "+fcal(parseInt(prompt("enter your first number")),prompt("which operation you want?"),parseInt(prompt("enter your second number"))))
