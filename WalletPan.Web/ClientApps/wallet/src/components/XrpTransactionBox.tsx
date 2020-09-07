import React, { FunctionComponent } from 'react';

const XrpTransactionBox: FunctionComponent<any> = (props: any) => {
  const item = props.item;
  const index = props.index;

  return (
    <div className="col-12 xrp-tr-box px-4 my-4">
      <div className="row header-part m-2 py-3 d-flex justify-content-between">
        <span className=""> {index}. </span>
        <span className="img-text">
          <img
            width="17"
            height="17"
            className="mr-2"
            src={
              item.type == 'EXPENSE'
                ? `${process.env.PUBLIC_URL}/landing_assets/expense-icon.svg`
                : `${process.env.PUBLIC_URL}/landing_assets/income-icon.svg`
            }
          />
          <img
            width="17"
            height="17"
            className="mx-2"
            src={`${process.env.PUBLIC_URL}/landing_assets/small-xpr-icon.svg`}
          />{' '}
          XRP
        </span>

        <span className={item.type == 'EXPENSE' ? 'text-danger' : 'text-success'}>
          {item.amount}
        </span>
      </div>
      <div className="row body-part mt2">
        <div className="col-12">
          <div className="row text-left my-3 text-break d-block">
            <div className="col-12">{item.walletOwner} </div>
          </div>

          <div className="row my-2">
            <div className="col-6">
              <span className="w-100 item-label text-left  d-block">Transaction Date:</span>
              <span className="w-100 item-value text-left  d-block">{item.transactionDate}</span>
            </div>
            <div className="col-6">
              <span className="w-100 item-label text-left  d-block">Transaction Time:</span>
              <span className="w-100 item-value text-left  d-block">{item.transactionTime}</span>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <span className="w-100 item-label text-left  d-block">Destination Tag:</span>
              <span className="w-100 item-value text-left  d-block">{item.destTag}</span>
            </div>
            <div className="col-6">
              <span className="w-100 item-label text-left  d-block">Fee:</span>
              <span className="w-100 item-value text-left  d-block">{item.fee}</span>
            </div>
          </div>

          <div className="row text-left mt-3">
            <div className="col-12 pb-3">
              <span className="w-100 item-label text-left d-block">Transaction Hash:</span>
              <span className="w-100 item-value text-left text-break d-block">
                {item.transactionHash}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XrpTransactionBox;
