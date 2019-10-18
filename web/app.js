// var fruitTemplate = require("./fruits");
// var toolbox = require("./toolsbox");

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
    console.log(" poids cerises " + poidsCerises);
    console.log(" poids cerises " + prixCerises);
}


function validerPoidsFraises(){
    var poidsFraises = document.querySelector("#poidsfraises").value;
    var prixFraises = document.querySelector("#prixfraises").value;
    console.log(" poids fraises " + poidsFraises);
    console.log(" poids fraises " + prixFraises);
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
        listHtml += "<li>"+ elt.nom  + " "+ (index+1) + "</li>"
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