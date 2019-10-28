const   PORT = 9000 || process.port;

var http = require("http");
var fs = require('fs');
var url = require('url');
var queryString = require("querystring"); // managing query parameters
require("remedial"); // interpolation of variable in html page

var contentTypeParams = new Map ([['html', 'text/html'], ['css', 'text/css'], ['jpg', 'images/jpg'], ['png', 'images/png']]);

var server = http.createServer(sendResult);

server.listen(9000);

function sendResult(request,response){
    var data = {
        pageToReturn : "",
        resquestedContentType : "text/html"

    };
    var urlObject = url.parse(request.url);
    var queryParams = queryString.parse(urlObject.query);
    // console.log(urlObject.query);
    // console.log(queryParams);
    var pageToReturn = fs.readFileSync('./html/index.html', 'UTF-8');
    // returnContentType = 'text/html';

    var indexDot = urlObject.pathname.indexOf('.');
    var requestedFileName = urlObject.pathname.substr(1);
    resquestedContentType = urlObject.pathname.substring(indexDot+1);

    if(fs.existsSync('./html/'+requestedFileName) || fs.existsSync('./images/'+requestedFileName)  || fs.existsSync('./css/'+requestedFileName) ){
        switch(resquestedContentType){
            case ("css"):
                pageToReturn = fs.readFileSync('./css/'+requestedFileName); 
                    break;
            case ("jpg"):
                pageToReturn = fs.readFileSync('./images/'+requestedFileName); 
                break;
            case ("png"):
                pageToReturn = fs.readFileSync('./images/'+requestedFileName); 
                break;
            case ("html"):
                pageToReturn = fs.readFileSync('./html/'+requestedFileName, 'UTF-8'); 
                break;
            default :
                pageToReturn = fs.readFileSync('./html/index.html', 'UTF-8');
                resquestedContentType = "html";
                break;        
        }
        
    }
    
    if(requestedFileName == 'toto.html'){
        pageToReturn = pageToReturn.supplant(queryParams);
    }
    // response.end(JSON.stringify(urlObject));
    data.resquestedContentType = contentTypeParams.get(resquestedContentType);
    data.pageToReturn = pageToReturn;
    if(data.resquestedContentType){
        sendData(data, response);
    }
}

function sendData(data, response){
    try{
        response.writeHead(200, {'content-type' : data.resquestedContentType});
        response.write(data.pageToReturn);
        response.end();
    } catch(error){
        console.log("error");
        console.log(error);
    }  

}