import React, { FunctionComponent } from 'react';

interface IIconicBoxComponent {
  defclass: string;
  title: string;
  subtitle: string;
  src: string;
}

const IconicBox: FunctionComponent<IIconicBoxComponent> = (props: IIconicBoxComponent) => {
  return (
    <div className={`iconic-box ${props.defclass}`}>
      <div className="img-wrapper">
        <img src={props.src} />
      </div>
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
    </div>
  );
};

export default IconicBox;
