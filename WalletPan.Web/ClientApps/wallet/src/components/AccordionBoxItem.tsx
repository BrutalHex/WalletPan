import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import throttle from 'lodash.throttle';
 

class AccordionBoxItem extends React.Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {selected: false};
        this.handleClickThrottled = throttle(this.handleClick, 1000);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            selected: !state.selected
          }));
      }

      componentWillUnmount() {
        this.handleClickThrottled.cancel();
      }

    render() {



        const item = this.props.item;
         const index=this.props.index;
 
        return (

            <div className={ this.state.selected ? 'card-wrapper fillblue' : 'card-wrapper'}   >
            <Card onClick={this.handleClickThrottled}>
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