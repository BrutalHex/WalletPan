import React, { FunctionComponent } from 'react';

const TwinSection: FunctionComponent<any> = (props: any) => {
  return (
    <div className={'twin-section ' + props.className} id={props.id}>
      {props.left}
      {props.right}
    </div>
  );
};

export default TwinSection;
