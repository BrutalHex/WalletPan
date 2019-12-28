import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';
 

class AccordionBox extends React.Component {


    constructor(props) {
        super(props);
    }
    render() {



        const items = this.props.list;
        const listItems = items.map((item,index) =>

            <Card>
                <AccordionToggle as={Card.Header} eventKey="index">
                    {item.title}
                </AccordionToggle>
                <AccordionCollapse eventKey="index">
                      {item.text}
                </AccordionCollapse>
            </Card>


        );






        return (

            <div className={`question-box ${this.props.defclass}`}>

                <Accordion defaultActiveKey="1">
                    {listItems}
                </Accordion>

            </div>

        )
        ;
    }
}


export default AccordionBox;