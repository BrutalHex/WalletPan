import React, { Component } from 'react';

class Footer extends React.Component {
  render() {
    const list = [
      {
        title: 'Discover',
        links: [
          { text: 'Convert Units', href: '#' },
          { text: 'XRP', href: '#' },
          { text: 'Spark', href: '#' },
          { text: 'Verify Message', href: '#' },
          { text: 'Explore Wallet', href: '#' },
        ],
      },

      {
        title: 'Affiliates',
        links: [{ text: ' ', href: '#' }],
      },

      {
        title: 'WalletPan',
        links: [
          { text: 'About', href: '#' },
          { text: 'Team', href: '#' },
          { text: 'FAQs', href: '#' },
          { text: 'Customer Support', href: '#' },
          { text: 'Help Center', href: '#' },
          { text: 'Donate', href: '#' },
        ],
      },
    ];

    const res = list.map((item, index) => {
      return (
        <div
          key={'footer_head' + index.toString()}
          className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3"
        >
          <div className="col-12 footer-links-header"> {item.title}</div>
          {item.links.map((inner, ind) => {
            return (
              <div key={'footer_body' + ind.toString()} className="col-12 footer-links">
                <a href={inner.href}>{inner.text}</a>
              </div>
            );
          })}
          ;
        </div>
      );
    });

    return (
      <div className={`section section-footer row`}>
        <div className="col-10 footer-wrapper center">
          <div className="row">
            {res}

            <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <div className="row footer-logo">
                {' '}
                <img src={`${process.env.PUBLIC_URL}/landing_assets/footer-logo.svg`} />
              </div>
              <div className="row footer-text text-justify-left">
                WalletPan is open-source and free.
              </div>
              <div className="row footer-social d-flex justify-content-left">
                <a href="#">
                  {' '}
                  <img src={`${process.env.PUBLIC_URL}/social/facebook.svg`} />
                </a>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/social/twitter.svg`} />
                </a>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/social/reddit.svg`} />
                </a>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/social/github.svg`} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 footer-copy-right text-center">
          © 2019 Walletpan. All Rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
