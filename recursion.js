var personne = {
    nom : "nougbele",
    prenoms : "daniel jonatan",
    tecnos : {
        angular : 4,
        reactjs : 1,
        laravel : 4,
        javasript : {
            client : 999,
            server : 1000
        }
    },
    age : 25,
    vetements : {
        tshirt : 3,
        pantalon : 6,
        montre : "Rolex"
    }
}



function afficherObjet(obj){
    for(var prop in obj){
        process.stdout.write(" ");
        if(typeof(obj[prop]) === "object"){
            afficherObjet(obj[prop]);
        }else{
            console.log(prop + " ==> " + obj[prop]);
        }
    }
}

afficherObjet(personne);