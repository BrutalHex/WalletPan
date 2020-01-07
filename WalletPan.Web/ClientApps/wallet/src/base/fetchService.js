
import fetch from 'cross-fetch';


const Method ={
    POST : "POST",
    GET : "GET",
    PUT : "PUT",
    DELETE : "DELETE"
};

const ContentType={

    json:"aapplication/json; charset=utf-8",
   wwwform:"'application/x-www-form-urlencoded'"
};

const Mode={
    cors:"cors",
    nocors:"no-cors",
    same:"same-origin"
};

const Cache={
    nochache:"no-cache",
    default:"default",
    reload:"reload",
    force:"force-cache",
    only:"only-if-cached"
};

const Credentials=
{
    same:"same-origin",
     omit:"omit"

};
 

   function baseFetch(url,data,contentType,method, headers,mode ,cache,  
     credentials , callback)
{

   
  
    fetch(url, {
        method: method,  
        mode: mode, 
        cache:cache,  
      
        headers: {
            "Content-Type":contentType,
            "Accept": "*/*",
            "Connection": "keep-alive"
        },
  
        body: (data) // body data type must match "Content-Type" header
      }).then((response) => 
          response.json()
        )
      .then((responseJSON) =>  callback(responseJSON)
          
       
      )
    
    .catch((error) => {
      console.error('Error:', error);
    });
    
    
      
     


}


export function postData(url,data  )
{


   return 
    baseFetch(url,JSON.stringify(data),ContentType.json,Method.POST,null,Mode.nocors,Cache.nochache,Credentials.omit);

    
}

export function putData(url,data  )
{


   return 
    baseFetch(url,JSON.stringify(data),ContentType.json,Method.PUT,null,Mode.nocors,Cache.nochache,Credentials.omit);

    
}

export function deleteData(url,data  )
{


   return 
    baseFetch(url,JSON.stringify(data),ContentType.json,Method.DELETE,null,Mode.nocors,Cache.nochache,Credentials.omit);

    
}


export async function getData(url,callback)
{

 
   baseFetch(url,null,ContentType.json,Method.GET,null,Mode.cors,Cache.nochache,Credentials.omit,callback);
   
 
    
}





 


 