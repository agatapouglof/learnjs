var fruitTemplate = require("./fruits");
var toolbox = require("./toolsbox");

var panier =  genererPanierAleatoire();
generationListe();

function genererPanierAleatoire (){
    var panier = {
        cerises : [],
        fraises : []
    }
    
    var alea  = toolbox.randomNumber(1,6) // generer un nombre en [1,5]
    for (var i = 0; i < alea; i++) {
        var cerise = fruitTemplate.creerCerises();
        panier.cerises.push(cerise);
        
    }
    
    var alea  = toolbox.randomNumber(1,6) // generer un nombre en [1,5]
    for (var i = 0; i < alea; i++) {
        var fraise = fruitTemplate.creerFraises();
        panier.fraises.push(fraise);
        
    }
    return panier;
}


function validerPoidsCerises(){
    var poidsCerises = document.querySelector("#poidscerises").value;
    var prixCerises = document.querySelector("#prixcerises").value;

    var vraiPoidsCerises = calculPoidsFruits(panier.cerises);
    var vraiPrixCerises = calculPrixFruits(panier.cerises);

    var sectionResultat = document.querySelector(".resultatCerises");

    if((vraiPoidsCerises == poidsCerises) && (vraiPrixCerises == prixCerises) ) {
        sectionResultat.innerHTML = "<img src ='./images/check.png' width='10' />";
    }else{
        sectionResultat.innerHTML = "Mauvaise reponse";
    }

}


function validerPoidsFraises(){
    var poidsFraises = document.querySelector("#poidsfraises").value;
    var prixFraises = document.querySelector("#prixfraises").value;

    var vraiPoidsFraises = calculPoidsFruits(panier.fraises);
    var vraiPrixFraises = calculPrixFruits(panier.fraises);

    var sectionResultat = document.querySelector(".resultatFraises");


    if((vraiPoidsFraises == poidsFraises) && (vraiPrixFraises == prixFraises) ) {
        sectionResultat.innerHTML = "<img src ='./images/check.png' width='10' />";

    }else{
        sectionResultat.innerHTML = "Mauvaise reponse";

    }
}

function genererListeCerises(){
    var cerisesHtml = document.querySelector('.cerises ul');
    cerisesHtml.innerHTML = genererListe("cerises");
}

function genererListeFraises(){
    var fraisesHtml = document.querySelector('.fraises ul');
    fraisesHtml.innerHTML = genererListe("fraises");
}

function genererListe(fruit){
    var listHtml = "";
    panier[fruit].forEach(function(elt,index){
        listHtml += "<li>" + (index+1) + " Poids "+ elt.poids  + " -  Prix "+ elt.prix  + "</li>"
    });
    return listHtml
}

function generationListe(){
    genererListeFraises();
    genererListeCerises();
}

var panierImage = document.querySelector(".panier");

panierImage.addEventListener("click", function(){
    panier =  genererPanierAleatoire();
    generationListe();
});


function calculPoidsFruits(fruits){
    var totalPoids = fruits.reduce(function(acc,val){
        return acc + val.poids; 
    },0);
    return totalPoids;
}

function calculPrixFruits(fruits){
    var totalPrix = fruits.reduce(function(acc,val){
        return acc + val.prix; 
    },0);
    return totalPrix;
}