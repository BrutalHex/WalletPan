import React, { Component } from 'react';
import MNav from './MNav';
import IconicBox from '../components/IconicBox';

const MAinLandingPage = ({ classes }) => {
    return (
        <div class="container-fluid wallet-pan-landing">

            <div className="row section section-head ">
                <div className="col-5 left-part">
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
                <div className="col-7 right-part">

                    <div className="row">
                        <div className="col-12">
                            <MNav className="navbar" id="mainNav">

                            </MNav>
                        </div>

                    </div>
                    <div className="row">

                        <img src={`${process.env.PUBLIC_URL}/landing_assets/wallet_pan_right_ripple.svg`}
                            className="rigth-part-img" />
                    </div>

                </div>

            </div>


            <div className="row section section-operation d-flex justify-content-center">

                <IconicBox defclass="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-12" src={`${process.env.PUBLIC_URL}/landing_assets/create-wallet.svg`} title="Create a new wallet" subtitle="Generate your own unique
XPR wallet" />
                <IconicBox defclass="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-12" src={`${process.env.PUBLIC_URL}/landing_assets/access-to-wallet.svg`} title="Explore your wallet" subtitle="Connect to the blockchain using the wallet of your choice" />
               
                <IconicBox defclass="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-12" src={`${process.env.PUBLIC_URL}/landing_assets/send-xrp.svg`} title="Send XRP" subtitle="Send and Swap XRP & Tokens usign your own wallet" />


            </div>
            <div className="row section ">about</div>
            <div className="row section ">FAQ</div>
            <div className="row section ">footer</div>



        </div>
    );
};

export default MAinLandingPage;