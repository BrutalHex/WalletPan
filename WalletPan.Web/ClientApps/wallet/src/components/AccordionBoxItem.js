import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
 
 

class AccordionBoxItem extends React.Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {selected: false};
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            selected: !state.selected
          }));
      }

    render() {



        const item = this.props.item;
         const index=this.props.index;
 
        return (

            <div className={ this.state.selected ? 'card-wrapper fillblue' : 'card-wrapper'}   >
            <Card onClick={this.handleClick}>
            <AccordionToggle as={Card.Header} eventKey={index.toString()}>
                        <span>{item.title}</span>
                        <img src={`${process.env.PUBLIC_URL}/landing_assets/plus.svg`} className="card-header-plus"/>
                        <img src={`${process.env.PUBLIC_URL}/landing_assets/minus.svg`} className="card-header-minus"/>
            </AccordionToggle>
            <Accordion.Collapse eventKey={index.toString()}>
                   <Card.Body>{item.text}</Card.Body>
             </Accordion.Collapse>
          </Card>
           </div>
        )
        ;
    }
}


export default AccordionBoxItem;