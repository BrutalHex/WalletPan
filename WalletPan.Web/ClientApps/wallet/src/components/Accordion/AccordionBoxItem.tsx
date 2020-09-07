import React, { useState, FunctionComponent } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import AccordionItem from './AccordionItem';

interface IAccordionBoxItem {
  item: AccordionItem;
}

const AccordionBoxItem: FunctionComponent<IAccordionBoxItem> = (props: IAccordionBoxItem) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={show ? 'card-wrapper fillblue' : 'card-wrapper'}>
      <Card onClick={handleClick}>
        <AccordionToggle as={Card.Header} eventKey={props.item.index.toString()}>
          <span>{props.item.title}</span>
          <img
            src={`${process.env.PUBLIC_URL}/landing_assets/plus.svg`}
            className="card-header-plus"
          />
          <img
            src={`${process.env.PUBLIC_URL}/landing_assets/minus.svg`}
            className="card-header-minus"
          />
        </AccordionToggle>
        <Accordion.Collapse eventKey={props.item.index.toString()}>
          <Card.Body>{props.item.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
};

export default AccordionBoxItem;
