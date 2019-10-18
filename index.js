var readline = require('readline-sync');

// var input = readline.question('give an input');

// console.log(input);
// console.log("test run basic node");

// separator("+");
// separator("*");
// separator("-");


function separator(sep){
    var separe = "";
    var i=0;
    while(i<50){
        separe += sep;
        i++;
    } 
    console.log(separe);
}

function selectCase(element){
    switch(element){
        case 1 : 
            console.log("case 1 is selected");
            separator("1");
            break;
        case 2 : 
            console.log("case 2 selected");
            separator("2");
            break;
        case 3 : 
            console.log("case 3 fin de programme");
            separator("inf");
            break;
        default :  
            console.log("why this input");
            separator("?");
            break;  
    }
}

function readInteger(text){
    var result  = readline.question(text + "\n");
    return parseInt(result);
}

var selection = 0;
// do{
//     var selection  = readInteger("choisir le case a executer 1, 2 ou 3");
//     selectCase(selection);
// }while(selection != 3);

console.log(calculMoyenne());

function calculMoyenne(){
    var tab =  [1,8,7,3,4,16,7,9,12];
    var somme = tab.reduce((som, val) => som + val, 0);
    var moyenne = somme / tab.length;
    return moyenne;

}

calculMoyenne(); 