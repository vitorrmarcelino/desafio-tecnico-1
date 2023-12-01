let wantToContinue;

do{
    const input = require('prompt-sync')({sigint: true});
    
    const calculateSum = (num) => {
        let sum = 0;
        for(let i=3; i<num; i++){
            if(i%3 === 0 || i%5 === 0){
                sum += i;
            }
        }
    
        return sum;
    }
    
    const validateNumber = (num) => {
        if(isNaN(num)||num<0||!Number.isInteger(num)){
            console.log("Número inváldo!")
            return false;
        }
        return true;
    }
    
    let isValidNumber;
    let num;
    
    do{
        num = input("Insira um número inteiro positivo: ");
        isValidNumber = validateNumber(Number(num))
    }while(!isValidNumber);
    
    const sum = calculateSum(Number(num));
    
    console.log(`O número obtido a partir de ${num} é ${sum}`);

    wantToContinue = input("Deseja inserir outro número?[s/n]").toLowerCase();
    
}while(wantToContinue === "s");
