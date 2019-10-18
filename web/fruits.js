// var toolbox = require("./toolsbox");

var fruitTemplate  = {

     creerCerises : function(){
        var cerises = {
            nom : "cerises",
            poids : toolbox.randomNumber(1,11),
            prix : 40 
        }
        return cerises;
    },
    
     creerFraises : function(){
        var fraises = {
            nom : "fraises",
            poids : toolbox.randomNumber(1,11),
            prix : 20
        }
    
        return fraises;
    }

}

// module.exports = fruitTemplate;
