

import {postData,getData} from '../fetchService';
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './action';


  function fetchProducts() {
    return   dispatch =>  {
        debugger;
        dispatch(fetchProductsPending());

         getData('http://localhost:5000/api/CryptoCurrency/GetAll',(data)=> {
             
         debugger;
         dispatch(fetchProductsSuccess(data))
        
        });
    

         
     
    }
}

export default fetchProducts;
