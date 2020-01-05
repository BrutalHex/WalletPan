import React from 'react';
 

class XrpTransactionBox extends React.Component {


    constructor(props) {
        super(props);
        
       
    }

     

    render() {



        const item = this.props.item;
         const index=this.props.index;
 
        return (

            <div className="col-12 xrp-tr-box p-2 my-2">
              <div className="row header-part m-2 d-flex justify-content-between">
                   <span className=""> {index}. </span>    
                    <span className="">   
                        <img width="17" height="17" className="mr-2"
                          src={item.typpe=='EXPENSE' ? `${process.env.PUBLIC_URL}/landing_assets/expense-icon.svg` :`${process.env.PUBLIC_URL}/landing_assets/income-icon.svg`}
                        />  
                
                      <img width="17" height="17" className="mx-2" src={`${process.env.PUBLIC_URL}/landing_assets/small-xpr-icon.svg`} /> XRP
                      
                      </span>     
                      
                   <span className={item.type=="EXPENSE" ?  "text-danger" :"text-success"} >{item.amount}</span>   
              </div>
              <div className="row body-part mt2">
                  <div className="col-12">
                      <div className="row text-left my-4"> {item.walletOwner} </div>

                      <div className="row my-2">
                          <div className="col-6">
                              <spn className="w-100 item-label text-left  d-block">
                              Transaction Date:
                              </spn>
                              <spn className="w-100 item-value text-left  d-block">
                                   {item.transactionDate}
                              </spn>
                          </div>
                          <div className="col-6">
                                <spn className="w-100 item-label text-left  d-block">
                                Transaction Time:
                                </spn>
                                <spn className="w-100 item-value text-left  d-block">
                                     {item.transactionTime}
                                </spn>
                          </div>
                      </div>
                      <div className="row mt-2">
                         <div className="col-6">
                              <spn className="w-100 item-label text-left  d-block">
                              Destination Tag:
                              </spn>
                              <spn className="w-100 item-value text-left  d-block">
                                   {item.destTag}
                              </spn>
                          </div>
                          <div className="col-6">
                                <spn className="w-100 item-label text-left  d-block">
                                    Fee:
                                </spn>
                                <spn className="w-100 item-value text-left  d-block">
                                     {item.fee}
                                </spn>
                          </div>
                      </div>

                      <div className="row text-left mt-3">
                          <spn className="w-100 item-label text-left d-block">
                              Transaction Hash:
                          </spn>
                          <spn className="w-100 item-value text-left text-break d-block">
                               {item.transactionHash}
                          </spn>

                      </div>
                  </div>

              </div>
            </div>
                
        )
        ;
    }
}


export default XrpTransactionBox;