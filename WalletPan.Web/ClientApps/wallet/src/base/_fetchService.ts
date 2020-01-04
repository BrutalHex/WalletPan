import React from "react";
 
 


enum Method {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
};

enum ContentType{

    json="application/json",
   wwwform="'application/x-www-form-urlencoded'"
};

enum Mode{
    cors="cors",
    nocors="no-cors",
    same="same-origin"
};

enum Cache{
    nochache="no-cache",
    default="default",
    reload="reload",
    force="force-cache",
    only="only-if-cached"
};

enum Credentials
{
    same="same-origin",
     omit="omit"

};
 

 function baseFetch(url:any,data:any,contentType:ContentType,method:Method, headers:any,mode : Mode,cache: Cache,  
     credentials:Credentials )
{

      
     
  return   fetch(url, {
        method: method,  
        mode: mode, 
        cache:cache,  
        credentials: credentials, 
        headers: headers,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: (data) // body data type must match "Content-Type" header
      });
      


}


export function postData(url:string,data : object )
{


   return 
    baseFetch(url,JSON.stringify(data),ContentType.json,Method.POST,null,Mode.nocors,Cache.nochache,Credentials.omit);

    
}

export function putData(url:string,data : object )
{


   return 
    baseFetch(url,JSON.stringify(data),ContentType.json,Method.PUT,null,Mode.nocors,Cache.nochache,Credentials.omit);

    
}

export function deleteData(url:string,data : object )
{


   return 
    baseFetch(url,JSON.stringify(data),ContentType.json,Method.DELETE,null,Mode.nocors,Cache.nochache,Credentials.omit);

    
}


export function getData(url:string)
{


   return 
    baseFetch(url,null,ContentType.json,Method.GET,null,Mode.nocors,Cache.nochache,Credentials.omit);

    
}





 


 