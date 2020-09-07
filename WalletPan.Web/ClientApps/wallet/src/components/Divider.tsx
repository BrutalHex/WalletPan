import React, { FunctionComponent } from 'react';

interface IDividerComponent {
  title: string;
}

const Divider: FunctionComponent<IDividerComponent> = (props: IDividerComponent) => {
  return (
    <div className="row custom-divider">
      <span className="center"> {props.title}</span>
    </div>
  );
};

export default Divider;
