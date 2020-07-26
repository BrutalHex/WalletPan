import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBoxItem from './AccordionBoxItem';

const AccordionBox: FunctionComponent<any> = (props: any) => {
  const items = props.list;

  const listItems = items.map((item: any, index: number) => {
    return <AccordionBoxItem key={'accordion_key' + index.toString()} item={item} index={index} />;
  });

  return <Accordion className={`${props.defclass}`}>{listItems}</Accordion>;
};

export default AccordionBox;
