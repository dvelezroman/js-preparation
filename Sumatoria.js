function sumaPares (){
    let resultadoSuma=0;
    for (let index = 10; index < 50; index++) {
        if (index%2==0){
             resultadoSuma= resultadoSuma+index;
             
        }
        
    }
    console.log(resultadoSuma);
}

sumaPares()