export const apiUrl='http://localhost:5000/api/';

export function settings()
{
   const obj={
           mainUrl:apiUrl,
          Ripple:'wss://s.altnet.rippletest.net/'
         
    };

    return obj;
}


export function getApiUrl(address)
{
    debugger;
    return apiUrl+address;
}

export default settings;