import React, { FunctionComponent } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBoxItem from './AccordionBoxItem';
import AccordionItem from './AccordionItem';

interface IAccordionBox {
  list: Array<AccordionItem>;
  defclass: string;
}

const AccordionBox: FunctionComponent<IAccordionBox> = (props: IAccordionBox) => {
  const listItems = props.list.map((item: AccordionItem, index: number) => {
    return <AccordionBoxItem key={'accordion_key' + index.toString()} item={item} />;
  });

  return <Accordion className={`${props.defclass}`}>{listItems}</Accordion>;
};

export default AccordionBox;
