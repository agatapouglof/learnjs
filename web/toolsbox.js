var toolbox = {
    randomNumber : function(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }
}

module.exports = toolbox;