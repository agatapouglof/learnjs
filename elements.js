var element = {
    name : "bull",
    speed : 5,
    usage : "fight",

    afficherProps : function(){
        for(prop in this){
            console.log(prop +" ==> "+ this[prop]);
        }
    }
}

module.exports = element;