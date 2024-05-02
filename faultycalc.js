function fcal(a,sign,b){
    console.log(Math.random()>0.1?correctCalculation(a,sign,b):falseCalculation(a,sign,b))
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

fcal(3,'+',4)