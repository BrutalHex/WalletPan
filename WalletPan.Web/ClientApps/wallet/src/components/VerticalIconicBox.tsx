import React, { FunctionComponent } from 'react';

const VerticalIconicBox: FunctionComponent<any> = (props: any) => {
  return (
    <div className={`vertical-iconic-box ${props.defclass}`}>
      <div className="vertical-iconic-box-img-wrapper">
        <img src={props.src} />
      </div>
      <div className="vertical-iconic-box-text-wrapper">
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default VerticalIconicBox;
