import React, { Component } from 'react';
import MNav from './MNav';
import IconicBox from '../components/IconicBox';
import VerticalIconicBox from '../components/VerticalIconicBox';
import AccordionBox from '../components/AccordionBox';
import Footer from './Footer';

const MainLandingPage = ({ classes }) => {


    const list = [{
        title: 'How do I create a new wallet?',
        text:  'How do I create a new wallet ?How do I create a new wallet?H ow do I create a new wallet?Ho w do I create a new wallet?'
    }, {
            title:'What is Walletpan Connect?',
            text: 'Walletpan Connect is our companion mobile app for MyEtherWallet. We call it a hardware wallet without all the hardware. Now available for all Android and iOS smartphones!'
        },
        {
            title:'Can Walletpan work with other wallets?',
            text: 'Can Walletpan work with other wallets? Can Walletpan work with other wallets?v Can Walletpan work with other wallets?'
        },
        {
            title:'How can I send a transaction?',
            text: 'How can I send a transaction? v How can I send a transaction? How can I send a transaction? How can I send a transaction? How can I send a transaction?'
        },
        {
            title:'I forgot my password / private key! What can I do?',
            text: 'I forgot my password/private key! What can I do? vI forgot my password / private key! What can I do? I forgot my password/private key! What can I do? I forgot my password/private key! What can I do?'
        }
    ];



    return (
        <div className="container-fluid wallet-pan-landing">

            <div className="row section section-head twin-section vh-90 vw-90" id="home">
                <div className="col-12 col-md-5 left-part">
                    <div className="row">
                        <div className="col-12 logo-wrapper">
                            <img src={`${process.env.PUBLIC_URL}/landing_assets/logo.svg`}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 banner-Text">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <h2>XRP’s Original Wallet</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <p>

                                        Walletpan is a free,
                                            client-side interface helping
                                            you interact with the
                                            XRP blockchain. Our easy-to-use,
                                            open-source platform allows you
                                            to generate wallets, interact with
                                            smart contracts, and so much more.
          
                                     </p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 right-part">

                    <div className="row">
                        <div className="col-12">
                            <MNav className="navbar" id="mainNav">

                            </MNav>
                        </div>

                    </div>
                    <div className="row img-wrapper ">

                    
                    </div>

                </div>

            </div>


            <div className="row section section-operation d-flex justify-content-center" id="wallet">

                  <a className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3" href="#">

                  </a>
                <IconicBox defclass="" src={`${process.env.PUBLIC_URL}/landing_assets/create-wallet.svg`} title="Create a new wallet" subtitle="Generate your own unique
XPR wallet" />
                <IconicBox defclass="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3" src={`${process.env.PUBLIC_URL}/landing_assets/access-to-wallet.svg`} title="Explore your wallet" subtitle="Connect to the blockchain using the wallet of your choice" />
               
                <IconicBox defclass="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3" src={`${process.env.PUBLIC_URL}/landing_assets/send-xrp.svg`} title="Send XRP" subtitle="Send and Swap XRP & Tokens usign your own wallet" />


            </div>
            <div className="row section section-about" id="about">

                <div className="col-12 landing-title center">
                    About Walletpan
                </div>
                <div className="col-12 landing-subtitle">
                    <p className="center text-center">Walletpan puts the XRP blockchain at your fingertips.
                       We are a team of crypto-enthusiasts dedicated to bring
                      you the most secure, most intuitive, and dare we say
                        prettiest way to manage your XRP and ERC-20 tokens.
                        We're always here to help, and <span className="text-danegr">we're never giving away XRP</span>.</p>
                </div>
                <div className="col12 section-about-boxes-wrapper center">
                    <div className="row w-100 d-flex justify-content-center" >

                        <VerticalIconicBox defclass="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                            src={`${process.env.PUBLIC_URL}/landing_assets/join-walletpan.svg`} 
                            title="Join Walletpan" subtitle="Access the XRP blockchain's original and most-trusted wallet client, now with a host of new features all contained in an elegant, easy-to-use interface." />

                        <VerticalIconicBox defclass="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6" 
                            src={`${process.env.PUBLIC_URL}/landing_assets/hardware-wallet-supp.svg`} 
                            title="Hardware Wallet Support" subtitle="Walletpan offers support for all major hardware wallets including Ledger, Trezor, and many more." />

                    </div>
                    
                      <div className="row w-100 d-flex justify-content-center">

                        <VerticalIconicBox defclass="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6" 
                            src={`${process.env.PUBLIC_URL}/landing_assets/swap.svg`} 
                            title="Swap" subtitle="Walletpan has partnered with Bity, Kyber Network, Changelly, and Simplex to allow users to swap fiat to crypto, XRP and BTC, ETH and ERC-20." />

                        <VerticalIconicBox defclass="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6" 
                            src={`${process.env.PUBLIC_URL}/landing_assets/walletpan-connect.svg`} 
                            title="Walletpan Connect" subtitle="Walletpan's companion app brings hardware-wallet style security to your iOS or Android smartphone, helping you to secure your funds as never before." />

                    </div>
                    
                </div>

            </div>
            <div className="row section-faqs-one" id="FAQs">
                <div className="col-12 landing-title center">
                    FAQs
                </div>
            </div>
            <div className="row section-faqs-two">
                    
                <div className="col-12">

                    <AccordionBox defclass="col-12 accordion center" list={list} />

                </div>

                   
                <div className="col-12 foot-note text-center">

                    <span>Have not found the question that you are looking for? </span><a href="#">See More…</a>

                </div>
                    
                     
     
            </div>
           
                 
                   <Footer      />


         



        
        </div>
      
    );
};

export default MainLandingPage;