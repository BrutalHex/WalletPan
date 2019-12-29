import React, { Component }  from 'react';

 class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

      


        
     

     render() {


       const   list = [{
        title:"Discover",
         links:[{text:"Convert Units",href:"#"},
         {text:"XRP Connect",href:"#"},
         {text:"XRP CX",href:"#"},
         {text:"Buy a Hardware wallet",href:"#"},
         {text:"Send Offline Helper",href:"#"},
         {text:"Verify Message",href:"#"},
         {text:"View Wallet Info",href:"#"},
         {text:"Submit Dapp",href:"#"}]},

         {title:"Affiliates",
         links:[ {text:"XRP Card",href:"#"},
         {text:"Bity",href:"#"},
         {text:"Billfodl",href:"#"},
         {text:"Finney",href:"#"},                   
         {text:"BitBox",href:"#"},
         {text:"Trezor",href:"#"},
         {text:"Secalot",href:"#"},
         {text:"KeepKey",href:"#"},
         {text:"State of the Dapps",href:"#"}]},

         {title:"WalletPan",
         links:[ {text:"About",href:"#"},
         {text:"Team",href:"#"},
         {text:"FAQs",href:"#"},
         {text:"Customer Support",href:"#"},
         {text:"Help Center",href:"#"},
         {text:"Donate",href:"#"}]}

];


        const res=  list.map((item,index)=>{
                  return (
                      <div key={'footer'+index.toString()}  className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                   <div className="col-12 footer-links-header"> {item.title}</div>
                {

  item.links.map((inner,ind)=>{

      return (<div key={'footer' +index.toString() + ind.toString()}  className="col-12 footer-links">
        <a href={inner.href}>{inner.text}</a>   
     </div>);
    

 })};
                }
                 
                   
                   


            </div>

                  );
        });


        
        return(
            <div className={`section section-footer row`}>
               
             <div className="col-10 footer-wrapper center">
                 
             
<div className="row">

              {res}
              
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                         <div className="row footer-logo">  <img src={`${process.env.PUBLIC_URL}/landing_assets/footer-logo.svg`}
                            /></div>
               <div className="row footer-text text-justify-left">  
               
               MyEtherWallet is open-source and free to the community. Your donations go a long way towards making that possible.
               
                </div>
                <div className="row footer-social d-flex justify-content-left">  
               
               <a href="#"> <img src={`${process.env.PUBLIC_URL}/social/facebook.svg`}    /></a>
               <a href="#" ><img src={`${process.env.PUBLIC_URL}/social/twitter.svg`}    /></a>
               <a href="#" ><img src={`${process.env.PUBLIC_URL}/social/reddit.svg`}    /></a>
               <a href="#" ><img src={`${process.env.PUBLIC_URL}/social/github.svg`}    /></a>


                </div>
                  



                </div>
                </div>
            </div>
            <div className="col-12 footer-copy-right text-center">
            © 2019 Walletpan. All Rights reserved.
            </div>
            </div>
)
        ;
     }
}

 
export default Footer;